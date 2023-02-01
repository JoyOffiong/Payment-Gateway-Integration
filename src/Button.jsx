import React, {useState} from "react";
import "./payment.css";
import { useNavigate } from "react-router";
import axios from "axios";

function Button() {
  const [email, setEmail] = useState("")
  const navigate = useNavigate();
  const [infos, setinfos]= useState(false)

  // const createInvoice= ()=>{

  // }

  const checkCustomerExists = async (email_or_code) => {
    try {
      const result = await axios.get(
        `https://api.paystack.co/customer/${email_or_code}`,

        {
          headers: {
            Authorization:
              "Bearer " + "sk_test_b67c74ff0ca0c976a02d9689b30d5ecb7f04398f",
          },
        }
      );
      // console.log(result.data)
      const customer = result.data.data.customer_code

    if (result) {
      navigate(`./Invoice?customer=${customer}`);
    }
     
      console.log("worked");
    } catch (error) {
      navigate("./Customer");
    }


  };

// const mailExist = async ()=>{
// try {
//  const email= await localStorage.getItem('email')
//  const first_name= await localStorage.getItem('firstname')
//   const last_name= await localStorage.getItem('lastname')
//   const tokens= await localStorage.getItem('tokens')

// if (email&&first_name&&last_name&&tokens) {
//   setinfos(true)
//   navigate('./Invoice')
// }
// } catch (error) {
//   console.log(error)
// }}

// useEffect(() => {
//   mailExist()
//   }
// , [])


  return (

    <div className="App" style={{marginTop:"20px"}}>

      <div style={{backgroundColor:'#3b3b3b', padding:"20px"}}>
      <form action="">
        <input type="email" name="" id="" style={{ backgroundColor:"#e5e5e5", padding:"10px", borderRadius:'20px', border:"none"}}
        placeholder="Enter Email Address Here"
         onChange={(e) => setEmail(e.target.value)}/>
      </form>

      <div>
        
      </div>
      <button style={{fontSize:"12px", marginTop:"20px"}}
        onClick={() => {
          checkCustomerExists(email);
        }}
      >
        Get Invoice
      </button>
      </div>
      
    </div>
  );
}

export default Button
