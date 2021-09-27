import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom"

export default function Header(user, onLogout){
  function handleLogOut(){
    fetch("logout", {
      method: "DELETE", 
    }).then(() => onLogout());
  }
    return(<>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">Cocoyam</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="all_restaurants">All Restaurants</Nav.Link>
            <Nav.Link href="top_restaurants">Top Resturants</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
      </>)
}