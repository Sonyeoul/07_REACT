<<<<<<< HEAD
import { useEffect, useState } from "react"

const Title = () =>{
    return <h1>회원 목록</h1>
}

const ItemList = () =>{
=======
import { useEffect, useState } from "react";

const Title = () => {
    return <h1>회원 목록</h1>
}

const ItemList = () => {

>>>>>>> 6f575384880afb77d48bb9566394499e392857aa
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
<<<<<<< HEAD
    .then(Response => Response.json()).then(data=>setUsers(data));
    },[])
    
    return(
        <div>
            {users.map(user=><Item user={user}/>)}
        </div>
    )
}
const Item = ({user})=>{
=======
            .then(response => response.json())
            .then(data => setUsers(data));
    },[])

    return (
        <div>
            {users.map(user => <Item user={user}/>)}
        </div>
    )
}

const Item = ({user}) => {
>>>>>>> 6f575384880afb77d48bb9566394499e392857aa
    const styles = {
        background:'powderblue',
        border:'1px dotted black',
        width:'350px',
        display:'inline-block',
        margin:'10px'
      }
<<<<<<< HEAD
      return(
        <div style={styles}>
     <h1>{user.name}</h1>
    <p>
        id:{user.id} <br/>
        email:{user.email}<br/>
        phone : {user.phone}<br/>
    </p>
=======
      return (
        <div style={styles}>
            <h4>{user.name}</h4>
            <p>
                id :{user.id}<br/>
                email : {user.email}<br/>
                phone : {user.phone}<br/>
            </p>
>>>>>>> 6f575384880afb77d48bb9566394499e392857aa
        </div>
      )
}

<<<<<<< HEAD
export const Container = () =>{
    return(
        <>
             <Title/>
             <ItemList/>
        </>

    )
}
=======



const Container = () => {

    return(
        <>
            <Title/>
            <ItemList/>
        </>
    )
}
export default Container;
>>>>>>> 6f575384880afb77d48bb9566394499e392857aa
