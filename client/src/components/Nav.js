import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


function NavTab() {
    return (
            <Nav justify variant="tabs">
                <Nav.Item>
                    <Nav.Link as={NavLink} to={"/api/patient/list"}>Patients List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to={"/api/patient/new"}>Add New Patient</Nav.Link>
                </Nav.Item>
            </Nav>
    );
}

export default NavTab;