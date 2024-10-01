<<<<<<< HEAD
/*
    Promise : 비동기 작업의 결과를 처리하는 객체
    async /await : 비동기 작업을 동기적으로 실행하는 것 처럼 보이게 만드는 구문
    then 과 await : promise 의 결과를 사용할때
    then 을 사용하거나 async 함수 내에서 await로 처리할때
*/

function increase(num){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result = num + 10;
            if(result > 50){
                const e = new Error("num to big!");
                return rehect(e);
=======

/*
    Promise : 비동기 작업의 결과를 처리하는 객체
    async/await : 비동기 작업을 동기적으로 실행하는 것 처럼 보이게 
    만드는 구문
    then() 과 await : promise 의 결과를 사용할 때
    then() 을 사용하거나 , async 함수 내에서 await 로 처리할 수 있음..

*/


function increase(number){

    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result = number + 10;
            if(result > 50){
                const e = new Error("number to big");
                return reject(e);
>>>>>>> 6f575384880afb77d48bb9566394499e392857aa
            }
            resolve(result);
        },1000);
    })
    return promise;
}

<<<<<<< HEAD
=======

// async : 비동기 함수를 정의
>>>>>>> 6f575384880afb77d48bb9566394499e392857aa
async function run(){
    try{
        let result = await increase(1);
        console.log(result);
        result = await increase(2);
        console.log(result);
        result = await increase(3);
        console.log(result);
        result = await increase(4);
        console.log(result);
        result = await increase(5);
        console.log(result);
        result = await increase(6);
        console.log(result);
        return result;
<<<<<<< HEAD
    }catch(e){
        console.log(e,"발생!!");
    }
}

const value = async()=>{
    const runValue = await run();
    console.log("value : "+runValue);
}
const result = value();
=======
    }catch (e){
        console.log(e, " 가 발생함");
    }
}

const value = async () =>{
    const runValue = await run();
    console.log("value : " + runValue);
}

const result = value();
console.log(result);
>>>>>>> 6f575384880afb77d48bb9566394499e392857aa
