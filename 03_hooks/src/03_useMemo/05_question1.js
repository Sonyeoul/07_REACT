import { useMemo, useState } from "react";

const SqareCalculator = () => {

    const [numbers,setNumbers] = useState("");

    const sqareNumbers = useMemo(()=>{
        console.log("제곱값 계산 실행");
        return numbers.split(",").map(num =>{
            return isNaN(num)? 0 : num ** 2;
        })
    },[numbers]);

}


export default SqareCalculator;