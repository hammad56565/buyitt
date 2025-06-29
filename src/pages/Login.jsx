import React, { useState } from 'react'
import {
  appwriteAccount
} from '../appwriteConfigure'; // Import this

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name?.value || 'No Name';
    try {
      console.log("appwriteAccountOBJECT:", appwriteAccount);
      console.log("METHODS:", Object.keys(appwriteAccount));
      console.log("account methods:", Object.getOwnPropertyNames(Object.getPrototypeOf(appwriteAccount)));

      if (currentState === 'Login') {
        const session = await appwriteAccount
          .createEmailPasswordSession(email, password);
        console.log("Logged in!", session);
        console.log("Logged haha", appwriteAccount
        );
      } else {
        const user = await appwriteAccount
          .create('unique()', email, password, name);
        console.log("Signed up!", user);
        // Login right after signup
        const session = await appwriteAccount
          .createEmailPasswordSession(email, password);
        console.log("Logged in after signup!", session);
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState} </p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === 'Login' ? '' :
        <input required type="text" placeholder='Name' className='w-full px-3 py-2 border border-gray-800' value={formData.name} onChange={handleInputChange} name="name" id="" />}
      <input required type="email" placeholder='Email' className='w-full px-3 py-2 border border-gray-800' value={formData.email} onChange={handleInputChange} name="email" id="" />
      <input required type="password" placeholder='Password' className="w-full px-3 py-2 border border-gray-800" value={formData.password} onChange={handleInputChange} name='password' />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {
          currentState === 'Login' ?
            <p onClick={() => setCurrentState('SignUp')} className="cursor-pointer">Create account
            </p> :
            <p onClick={() => setCurrentState('Login')} className="cursor-pointer">Login here</p>
        }
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  )
}

export default Login
