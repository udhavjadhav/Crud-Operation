import React, {useState} from "react";
import { Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import {v4 as uuid} from 'uuid';
import {useNavigate} from 'react-router-dom';

// Creating Users
const Create = () =>{
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    let history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a = name;
        let b = age;

        //Push the users to array (Employees.js)
        Employees.push({id: uniqueId, Name: a, Age: b});
        history('/');
    }
    return <div className="container text-center my-5 p-5">
        <h1 className="m-5">Create Users</h1>
            <Form className="d-grid gap-2">
                <Form.Group className="mb-3" controlId="FormName">
                    <Form.Control type="text" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)} required></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="FormAge">
                    <Form.Control type="text" placeholder="Enter Age" onChange={(e)=> setAge(e.target.value)} required></Form.Control>
                </Form.Group>
                <Button onClick={(e)=>handleSubmit(e)}>Submit</Button>
            </Form>
        </div>

}
export default Create;