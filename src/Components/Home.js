import React, { Fragment } from "react";
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Employees from "./Employees";
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    let history = useNavigate();
    
    //#Edit Operation
    const handleEdit = (id, name, age) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
        localStorage.setItem('Id', id);
    }

    // #DELETE Operation
    const handleDelete = (id) => {
        let index = Employees.map((e) => {
            return e.id 
        }).indexOf(id);

        Employees.splice(index, 1);
        history('/');
    }
    
    return (
        <Fragment>
            <div className="container text-center">
                <h1 className="m-5">CRUD Operation</h1>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        Employees && Employees.length > 0
                                ?
                                Employees.map((item) => {
                                    return (
                                        <tr>
                                            <td>
                                                {item.Name}
                                            </td>
                                            <td>
                                                {item.Age}
                                            </td>
                                            <td>
                                                <Link to={`/edit`}>
                                                    <Button variant="success" onClick={() => handleEdit(item.id, item.Name, item.Age)}>Edit</Button>
                                                </Link>

                                                <Button className="mx-2" variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                "No data available"
                               
                        }

                    </tbody>

                </Table>
                <br />
                <Link className="d-grid gap-2" to={'/create'}>
                    <Button size="lg">Add Users</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;