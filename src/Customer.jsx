import React, {useState} from "react";
import axios from "axios";

const Transfer = () => {

    const [email, setEmail] = useState("")
    const [first_name, setFirst_Name] = useState("")
    const [last_name, setLast_Name] = useState("")
  const [phone, setPhone] = useState("")


  const submit = async () => {

    // creation of customer
    console.log("workers")
    try {
      let response = await axios.post("https://api.paystack.co/customer", {
        email,
        first_name,
        last_name,
      },
     
     {headers:{
        Authorization: 'Bearer ' + 'sk_test_b67c74ff0ca0c976a02d9689b30d5ecb7f04398f',
        "Content-Type": "application/json"
        
     }} );
      // store in local storage;
        let res= response.data.data
      console.log(res.email);

      localStorage.setItem("email", JSON.stringify(res.email));
      localStorage.setItem("customer_code", JSON.stringify(res.customer_code));

    //   notifySuccess();

    //   navigate("/questions");
    } catch (err) {
        console.log(err)
    }

  };

  return (
    <div className="App">
      <div className="container">
        <div className="checkout-form">
          <div className="checkout-field">
            <label> First Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setFirst_Name(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Last Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setLast_Name(e.target.value)}
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

          <div>
            <button  onClick={()=>{submit()}}> Submit</button>
          </div>
          {/* <PaystackButton className="paystack-button" {...componentProps} /> */}
        </div>
      </div>
    </div>
  );
};

export default Transfer;
