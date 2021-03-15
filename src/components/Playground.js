import React from "react";
import lemons from "../Images/lemons.jpg";
import "../App.css";

function Playground() {
  return (
    <div className="container">
      <div className="box">
        <img src={lemons} className="slide" alt="Citroner" />
        <div className="quote">
          <h2 className="rubrik">When life gives you lemons...</h2>
          <h3 className="underRubrik">make lemonade!</h3>
        </div>
      </div>
    </div>
  );
};

export default Playground;
