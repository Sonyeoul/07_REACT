<<<<<<< HEAD
const ApiComponent=()=>{
    const callApi=()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            console.log(response);
            return response.json();
        })
        .then(data=>{
            console.log(data);
        })
        .catch(e=>{
            console.log("API 호출 중 오류 발생",e);
        })
    }
    return(
=======

const ApiComponent = () => {

    const callApi = () =>  {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response =>{
                console.log(response);
                return response.json();
            })
            .then(data =>{
                console.log(data);
            })
            .catch(error => {
                console.log("API 호출 중 오류 발생",error);
            })
    }

    return (
>>>>>>> 6f575384880afb77d48bb9566394499e392857aa
        <>
            <button onClick={callApi}>api 호출</button>
        </>
    )
}
export default ApiComponent;