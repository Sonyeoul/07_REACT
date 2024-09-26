import { useState } from "react";
import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { Container } from "./01_useEffect/04_useEffect-cleanup";
import { TimeApp } from "./01_useEffect/05_timer";
import UseReducerBasic from "./02_useReducer/01_useReducer-basic";
import ReducerFormControl from "./02_useReducer/02_reducer-form-controll";
import ReducerQuestion from "./02_useReducer/03_question";
import HardCalculator from "./03_useMemo/01_hard-calculator";
import UseMemoComponent from "./03_useMemo/03_performance-useMemo";
import CallBackProblem from "./04_useCallback/01_problem";
import FunctionMemoization from "./04_useCallback/02_function-memoization";
import CallbackComponent from "./04_useCallback/03_components";
import UseRefCounter from "./05_useRef/02_useRef";
import LoginComponent from "./05_useRef/03_inputRef";
import Page from "./06_useContext/01_props-dribbling";
import ContextContainer from "./06_useContext/02_useContext";

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
      {/* <ReducerQuestion/> */}
      {/* <HardCalculator/>
      <UseMemoComponent/> */}
      {/* <CallBackProblem/> */}
      {/* <FunctionMemoization/> */}
      {/* <CallbackComponent/> */}
      {/* <UseRefCounter/> */}
      {/* <LoginComponent/> */}
      {/* <Page/> */}
      <ContextContainer/>
    </>
  );
}

export default App;
