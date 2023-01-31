import React from "react";
import "./payment.css";
import { useNavigate } from "react-router";

function Button() {
  const navigate = useNavigate();

  // const createInvoice= ()=>{

  // }

  const checkCustomerExists = async (email_or_code) => {
    const result = await axios.get(
      `https://api.paystack.co/customer/${email_or_code}`,

      {
        headers: {
          Authorization:
            "Bearer " + "sk_test_b67c74ff0ca0c976a02d9689b30d5ecb7f04398f",
        },
      }
    );
    result ? navigate("./Invoice") : navigate("./Customer");
  };

  return (
    <div className="App">
      <form action="">
        <label htmlFor="">Email Address</label>
        <input type="email" name="" id="" />
      </form>

      <button
        className="paystack-button"
        onClick={() => {
          checkCustomerExists();
        }}
      >
        Get Invoice
      </button>
    </div>
  );
}

export default Button;
