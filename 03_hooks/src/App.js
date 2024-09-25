import { useState } from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { Container } from "./01_useEffect/04_useEffect-cleanup";
import { TimeApp } from "./01_useEffect/05_timer";
import UseReducerBasic from "./02_useReducer/01_useReducer-basic";
import ReducerFormControl from "./02_useReducer/02_reducer-form-controll";
import ReducerQuestion from "./02_useReducer/03_question";

function App() {
  const [message,setMessage] = useState("안녕하세요");

  return (
    <>
      {/* <UseEffectBasic message={message}/> */}
      {/* <UseEffectMount/> */}
      {/* <UseEffectUpdate/> */}
      {/* <TimeApp/> */}
      {/* <UseReducerBasic/> */}
      {/* <ReducerFormControl/> */}
      <ReducerQuestion/>
    </>
  );
}

export default App;
