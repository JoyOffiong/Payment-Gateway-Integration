import axios from "axios";
// const BASE_URL = "https://api.paystack.co/customer"

const baseURL =  axios.create({
  baseURL: "https://api.paystack.co/customer",
  headers: {
    Authorization: "application/json",
    "Content-Type": "application/json",
  },
});


  
export default baseURL;