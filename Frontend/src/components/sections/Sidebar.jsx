import { Nav, Image, Button, Card } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = () => {
    return (
        <div className="h-100 p-3 ps-4" style={{width: '290px'}}>
            <div className="d-flex flex-column bg-white rounded-4 p-3 shadow-sm h-100">
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <a
                        href="https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center text-decoration-none"
                    >
                        <Image
                            src="../assets/img/logo-ct-dark.png"
                            width="26"
                            height="26"
                            className="me-2"
                            alt="main_logo"
                        />
                        <span className="fw-bold">Creative Tim</span>
                    </a>
                    <i className="bi bi-x-lg d-xl-none text-secondary" style={{ fontSize: '1.2rem', cursor: 'pointer' }}></i>
                </div>

                <hr />

                {/* Nav Items */}
                <Nav className="flex-column">
                    <Nav.Link href="../pages/dashboard.html" active>
                        <i className="bi bi-speedometer2 me-2"></i>
                        Dashboard
                    </Nav.Link>
                    <Nav.Link href="../pages/tables.html">
                        <i className="bi bi-table me-2"></i>
                        Tables
                    </Nav.Link>
                    <Nav.Link href="../pages/billing.html">
                        <i className="bi bi-credit-card-2-front me-2"></i>
                        Billing
                    </Nav.Link>
                    <Nav.Link href="../pages/virtual-reality.html">
                        <i className="bi bi-cpu me-2"></i>
                        Virtual Reality
                    </Nav.Link>
                    <Nav.Link href="../pages/rtl.html">
                        <i className="bi bi-globe2 me-2"></i>
                        RTL
                    </Nav.Link>

                    <div className="mt-4 mb-2 px-3 text-uppercase text-muted small fw-bold">
                        Account pages
                    </div>

                    <Nav.Link href="../pages/profile.html">
                        <i className="bi bi-person-circle me-2"></i>
                        Profile
                    </Nav.Link>
                    <Nav.Link href="../pages/sign-in.html">
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Sign In
                    </Nav.Link>
                    <Nav.Link href="../pages/sign-up.html">
                        <i className="bi bi-pencil-square me-2"></i>
                        Sign Up
                    </Nav.Link>
                </Nav>
            </div>
        </div>
    );
};

export default Sidebar;