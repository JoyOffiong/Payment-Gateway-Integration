import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import oil from "./assets/shopping.png";
import { useNavigate } from "react-router";

const Payment = () => {
  const publicKey = "pk_test_50026f4b6d90461f96d53c9067cd64375d23c861";
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate()
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
      // navigate('./'),
      onClose: () => alert("Wait! Don't leave :("),
   
   

    
  };
  
const back =()=>{
navigate('/')
}
  return (
    <div className="App">
      
      <div className="container">
        <div className="item">
          <img className="item-image" src={oil} alt="" />
          <div className="item-details">
            <p>Dancing Shoes</p>
          </div>
        </div>

        <div className="checkout">
        <div className="checkout-form">
          <div className="checkout-field">
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="checkout-field">
            <label>Amount</label>

            <select
              name=""
              id=""
              style={{ padding: "10px" }}
              onChange={(e) => setAmount(e.target.value)}
            >
              <option value="20000">20000</option>
              <option value="40000">40000</option>
              <option value="50000">50000</option>
              <option value="60000">60000</option>
            </select>
          </div>
          <PaystackButton
            className="paystack-button"
            style={{ marginTop: "0px" }}
            {...componentProps}
            
          />
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Payment;
