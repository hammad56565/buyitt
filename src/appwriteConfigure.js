import { Client, Account } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://nyc.cloud.appwrite.io/v1') // Replace with your actual endpoint
  .setProject('685d58a1002bd69bab2b'); // Replace with your Project ID

const account = new Account(client);

export const appwriteAccount = account ;
