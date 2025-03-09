import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  let inputLength = 5;

  const [otpInputs, setOtpInputs] = useState(new Array(inputLength).fill(""));
  console.log("otpInputs", otpInputs);
  const inputRef = useRef(null);
  const handleChange = (id, value) => {
    console.log("id, value", id, value);
    inputRef.current = (id + 1)%inputLength;
    
  };

  return (
    <>
      <div>Otp functionality</div>
      {otpInputs.map((_, idx) => (
        <input
          id={idx}
          ref={inputRef}
          className={`inputField ${"currentId" === idx ? "_active" : ""}`}
          onChange={(e) => handleChange(_, e.target.value)}
        />
      ))}
    </>
  );
}

export default App;
