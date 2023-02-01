import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";
import axios from "axios";

function Invoice() {
  const [amount, setAmount] = useState("");
  const location = (useLocation().search).replace('?','')
  

  const customer = location.split('=')[1];
  console.log(customer)
  const description = "2-for-1 promo";
  // console.log(customer)
  const makePayment = async (form) => {
    form.preventDefault();
    try {
      let response = await axios.post(
        "https://api.paystack.co/paymentrequest",
        {
          customer,
          amount,
          description,
        },

        {
          headers: {
            Authorization:
              "Bearer " + "sk_test_b67c74ff0ca0c976a02d9689b30d5ecb7f04398f",
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      // console.log(customer)

      if (response) {
        // navigate(`./Payment?amount=${amount}`)
        alert("Kindly Check your email for Invoice")
        navigate("./");
      }
    } catch (err) {
      console.log(err)
      console.log(customer)
    }
  };

  return (
    <div className="App" >
      <div className="checkout-field">
        <p>{customer}</p>

        <form action="">
          <select
            name=""
            id=""
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            required
          >
            <option value="20000">20000</option>
            <option value="40000">40000</option>
            <option value="50000">50000</option>
            <option value="60000">60000</option>
          </select>

          <p>{description}</p>

          <button onClick={makePayment}>Create Invoice</button>
        </form>
      </div>
    </div>
  );
}

export default Invoice;
