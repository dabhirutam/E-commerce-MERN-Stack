import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SignUp = () => {

    const [auth, authData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        authData({ ...auth, [e.target.name]: e.target.value });
    }

    const handleSubmit = () => {
        console.log(auth);
        dispatch(SignUp());
    };

    return (
        <section className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md={6} className="bg-white shadow p-4 rounded-4">
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="username"
                                    placeholder="Enter username"
                                    value={auth.username}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={auth.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value={auth.password}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" onClick={handleSubmit} className="w-100">
                                Sign Up
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SignUp;