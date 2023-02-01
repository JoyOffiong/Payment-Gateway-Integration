import React from "react";
import Customer from "./Customer"
import { Routes, Route} from "react-router";
import Button from "./Button";
import "./Payment.css";
import Invoice from "./Invoice";
import Payment from "./Payment";
import Home from "./Home";


const App = () => {
  return (
    <>
        <Routes>
       
          <Route path={"/"} element={<Home/>}></Route>
          <Route path={"/Customer"} element={<Customer />}></Route>
          <Route path={"/Invoice"} element={<Invoice />}></Route>
          <Route path={"/Payment"} element={<Payment/>}></Route>
          
        </Routes>
    </>
  );
};

export default App;
