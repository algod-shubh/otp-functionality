import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  let inputLength = 4;

  const [otpInputs, setOtpInputs] = useState(new Array(inputLength).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);
  const handleChange = (id, value) => {
    if (isNaN(value)) return;

    let newOtp = [...otpInputs];
    newOtp[id] = value.substring(value.length - 1);

    setOtpInputs(newOtp);

    if (id < inputLength - 1 && value && inputRef.current[id + 1]) {
      inputRef.current[id + 1].focus();
    }
  };
  const onClick = (index, event) => {
    inputRef.current[index].setSelectionRange(1,1);
  };

  const onKeyDown = (index, event) => {
    if(event.key == "Backspace"){
        if(index > 0){
            const newOtp = [...otpInputs];
            newOtp[index] = "";
            setOtpInputs(newOtp);
            inputRef.current[index-1].focus();
        }
    }
  };

  return (
    <>
      <div>Otp functionality</div>
      {otpInputs.map((value, idx) => (
        <input
          id={idx}
          key={idx}
          ref={(input) => (inputRef.current[idx] = input)}
          value={value}
          className={`otpInput`}
          onChange={(e) => handleChange(idx, e.target.value)}
          onClick={(e) => onClick(idx, e)}
            onKeyDown={(e) => onKeyDown(idx, e)}
        />
      ))}
    </>
  );
}

export default App;
