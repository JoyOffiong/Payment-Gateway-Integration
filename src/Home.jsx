import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

function Home() {
  return (
    <>
   
      <div className="App">
        

        <div className="checkout_field" style={{ gap: "50px" }}>
          <Button />

          <div style={{ marginTop: "40px" }}>
            <button>
              <Link to={"/Payment"}>MAKE PAYMENT</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
