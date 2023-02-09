import React, {useState, useEffect} from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';

function Edit(){
    const [name, setName] = useState("");
    const [age, setAge] = useState('');
    const [id, setId] = useState('');

    let history = useNavigate();
    
    let index = Employees.map((e) => {
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) =>{
        e.preventDefault();

        let a = Employees[index];
        a.Name = name;
        a.Age = age;
        
        history('/');
    }
    uuid();
    useEffect(()=>{
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setId(localStorage.getItem('Id'))
    },[]);  

    return(
        <div className="container text-center my-5 p-5">
            <h1 className="m-5">Edit Users</h1>
            <Form className="d-grid gap-2">
                <Form.Group className="mb-3" controlId="FormName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)} required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormAge">
                    <Form.Control type="text" placeholder="Enter Age" value={age} onChange={(e)=> setAge(e.target.value)} required></Form.Control>
                </Form.Group>
                <Button onClick={(e)=>handleSubmit(e)}>Update</Button>
            </Form>
        </div>
    )
}
export default Edit;