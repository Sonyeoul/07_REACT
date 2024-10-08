/*
    promise 는 콜백 지옥과 같은 코드가 형성되지 않게
    (비동기 통신간의 순서를 정하기 쉽게) 하는 방안으로 es6에서 도입됨

    promise 객체 생성 이유?
    1. 비동기 처리 함수를 실행 시 성공, 실패에 대한 처리가 용이하다.
    2. promise 객체가 제공하는 메소드를 사용하기 위함
    (콜백 지옥 상황을 해소해 주기 때문.. 가독성이 좋고, 메소드 체이닝 방식제공)
*/

const increase = (num) =>{
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result = num +10;
            if(result>50){
                const e = new Error("num to big!");
                return reject(e);
            }
            resolve(result);
            },1000)
       
    })
    return promise;
}
increase(30).then(num=>{
    console.log(num);
    return increase(num);
}).then(num=>{
    console.log(num);
    return increase(num);
}).catch(e=>console.log(e,"가 발생"));

//체이닝
//promise 객체는 then 메소드를 사용하여 비동기 작업의 결과를 처리할 수 있다
