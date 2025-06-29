import { createContext, useEffect, useState } from "react"
import { products } from "../assets/frontend_assets/assets2"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { appwriteAccount 
 } from "../appwriteConfigure"


export const ShopContext  = createContext()

const ShopContextProvider = (props) => {

    const currency = '$'
    const delivery_fee = 5.99
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false)
    const [cartItems,setCartItems]  = useState({})
    const navigate = useNavigate()

    const addToCart = async (itemId,sizes) => {

        let cartData = structuredClone(cartItems)
        if (!sizes) {
             toast.error('Select Product Size')
        }
        if (cartData[itemId]) {
            if (cartData[itemId][sizes]) {
                cartData[itemId][sizes] += 1
            }
            else{
                cartData[itemId][sizes] =1
            }
        }
        else{
            cartData[itemId] = {}
            cartData[itemId][sizes] = 1
        }
        setCartItems(cartData)
    }

    const getCartCount = ()=>{
        let totalCount = 0
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try {
                    if (cartItems[items][item]>0){
                         totalCount += cartItems[items][item]
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount
    }
    const updateQuantity = async(itemId,sizes,quantity)=>{
         let  cartData = structuredClone(cartItems)
             cartData[itemId][sizes] = quantity
             setCartItems(cartData)
    }

    const getCartAmount = ()=>{
        let totalAmount = 0
        for(const items in cartItems){
            console.log(items)
            let itemInfo = products.find((product) => product._id === items )
              for(const item in cartItems[items]){
                try {
                        if(cartItems[items][item]> 0){
                            totalAmount += itemInfo.price * cartItems[items][item]
                        }
                } catch (error) {
                    
                }
              }
        }
        return totalAmount
    }
    const checkUserLoggedIn = async () => {
  try {
    const user = await appwriteAccount 
.get();
    console.log("User is logged in", user);
  } catch {
    console.log("No active session");
  }
};

useEffect(() => {
  checkUserLoggedIn();
}, []);
    //   useEffect(()=>(
    //     console.log(cartItems)
    // ),[cartItems])

    const value ={
        products ,navigate, currency, delivery_fee ,checkUserLoggedIn, search, setSearch, showSearch,getCartAmount, updateQuantity,setShowSearch,addToCart, cartItems,getCartCount

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider