import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  let imgSrc;
  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 18) {
      imgSrc = require("./assets/underweight.png");
    } else if (bmi >= 18 && bmi < 25) {
      imgSrc = require("./assets/healthy.png");
    } else {
      imgSrc = require("./assets/overweight.png");
    }
  }

  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter a valid weight and height");
    } else {
      let bmi = weight / (height * height);
      setBmi(bmi.toFixed(1));
      if (bmi < 18) {
        setMessage("You are underweight");
      } else if (bmi >= 18 && bmi < 25) {
        setMessage("You are a health weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  let clear = () => {
    window.location.reload();
  };

  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(kg)</label>
            <input
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <label>Height(m)</label>
            <input
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={clear}>
              Clear
            </button>
          </div>
        </form>

        <div className="center">
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
