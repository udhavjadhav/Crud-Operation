import React, { Fragment, useState } from "react";
import { Button, Table, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Employees from "./Employees";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [editData, setEditData] = useState({ id: "", name: "", location: "", createdAt: "" });
  const [newData, setNewData] = useState({ name: "", location: "", createdAt: "" });

  let history = useNavigate();

  // #Edit Operation
  const handleEdit = (id, name, location, createdAt) => {
    setEditData({ id, name, location, createdAt });
    setShowEdit(true);
  };

  // #DELETE Operation
  const handleDelete = (id) => {
    let index = Employees.map((e) => e.id).indexOf(id);
    Employees.splice(index, 1);
    history("/");
  };

  // Handle modal close
  const handleCloseEdit = () => setShowEdit(false);
  const handleCloseCreate = () => setShowCreate(false);

  // Handle modal save for edit
  const handleSaveEdit = () => {
    let index = Employees.map((e) => e.id).indexOf(editData.id);
    Employees[index].Name = editData.name;
    Employees[index].location = editData.location;
    Employees[index].createdAt = editData.createdAt;
    setShowEdit(false);
  };

  // Handle modal save for create
  const handleSaveCreate = () => {
    const newId = Employees.length ? Math.max(...Employees.map(e => e.id)) + 1 : 1;
    Employees.push({ id: newId, Name: newData.name, location: newData.location, createdAt: newData.createdAt });
    setShowCreate(false);
    setNewData({ name: "", location: "", createdAt: "" });
  };

  // Open Create Modal
  const handleCreate = () => setShowCreate(true);

  return (
    <Fragment>
      <div className="container text-center">
        <h1 className="m-5">CRUD Operation</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Vender Name</th>
              <th>Location</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.Name}</td>
                      <td>{item.location}</td>
                      <td>{item.createdAt}</td>
                      <td>
                        {/* <Button
                          variant="success"
                          onClick={() => handleEdit(item.id, item.Name, item.location, item.createdAt)}
                        >
                          Edit
                        </Button>
                        <Button
                          className="mx-2"
                          variant="danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          Delete
                        </Button> */}
                        <Button
                          variant="link"
                          onClick={() => handleEdit(item.id, item.Name, item.location, item.createdAt)}
                        >
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Button>
                        <Button style={{color:'red'}}
                          variant="link"
                          className="mx-2"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : <p className="mt-2">No data available</p>}
          </tbody>
        </Table>
        <br />
        <div className="d-grid gap-2">
          <Button size="lg" onClick={handleCreate}>Add Users</Button>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Vender</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formNameEdit">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={editData.name}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLocationEdit">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Location"
                value={editData.location}
                onChange={(e) =>
                  setEditData({ ...editData, location: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCreatedAtEdit">
              <Form.Label>Created At</Form.Label>
              <Form.Control
                type="date"
                value={editData.createdAt}
                onChange={(e) =>
                  setEditData({ ...editData, createdAt: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Create Modal */}
      <Modal show={showCreate} onHide={handleCloseCreate}>
        <Modal.Header closeButton>
          <Modal.Title>Add Vender</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formNameCreate">
              <Form.Label>Vender Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Vender Name"
                value={newData.name}
                onChange={(e) =>
                  setNewData({ ...newData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formLocationCreate">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Location"
                value={newData.location}
                onChange={(e) =>
                  setNewData({ ...newData, location: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCreatedAtCreate">
              <Form.Label>Created At</Form.Label>
              <Form.Control
                type="date"
                value={newData.createdAt}
                onChange={(e) =>
                  setNewData({ ...newData, createdAt: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCreate}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveCreate}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default Home;
