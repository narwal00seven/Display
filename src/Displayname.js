import { useState } from "react";
export default function DisplayName(){
    const [submit,setSubmit]=useState(false);
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [fullname,setFullname] = useState("");


    const handleFirstname =(e) =>{
        setFirstname(e.target.value)
    }
    const handleLastname =(e) =>{
        setLastname(e.target.value)
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(e);
        setFullname(`${firstname} ${lastname}`);
        setSubmit(true)
    }

    return (
        <>
        <form >
            <h1>Full Name Display</h1>
            <label> First Name:</label>
            <input type="text" onChange={handleFirstname} required></input><br></br>
            <label> Last Name:</label>
            <input type="text" onChange={handleLastname} required></input><br></br>
            <button type="submit" onClick={handleSubmit}> Submit</button>
            {submit ? <div>Full Name : {fullname}</div>:""}
        </form>
        </>
    )
}