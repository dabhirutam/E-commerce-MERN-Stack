import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { SignUpAsync } from "../services/actions/AuthAction";

const SignUp = () => {

    const { isLoading, isSignUp } = useSelector(state => state.AuthReducer);

    const [auth, authData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        authData({ ...auth, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(SignUpAsync(auth));
    };

    useEffect(() => {
        isSignUp && navigate('/signin');
    }, [ isSignUp ]);

    return (
        <section className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md={4} className="bg-white shadow p-4 rounded-4">
                        <h2 className="text-center mb-4">Sign Up</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" placeholder="Enter username" value={auth.username} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" value={auth.email} onChange={handleChange} required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" placeholder="Enter password" value={auth.password} onChange={handleChange} required />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100 text-center fw-medium" disabled={isLoading}>
                                {
                                     isLoading ? 
                                        <div className="fs-5 d-flex align-items-center justify-content-center">
                                            <div className="spinner-border border-3 me-2" style={{width: '25px', height: '25px'}} role="status">
                                            </div>
                                            Adding...
                                        </div>
                                    : 'Submit'
                                }
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SignUp;