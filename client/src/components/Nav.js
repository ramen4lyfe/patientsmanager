import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import CreateModal from './modals/CreateModal';


function NavTab() {
    return (
        <div className="d-flex justify-content-between">
            <Nav  variant="tabs">
                <Nav.Item>
                    <Nav.Link as={NavLink} to={"/api/patient/shortlist"}>Short List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={NavLink} to={"/api/patient/list"}>Patients List</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link as={NavLink} to={"/api/patient/new"}>Add New Patient</Nav.Link>
                </Nav.Item> */}
            </Nav>
            <CreateModal />
        </div>
    );
}

export default NavTab;