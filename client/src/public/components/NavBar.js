import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavBar = ({ user, setUser }) => {
    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }
  
  return (
    <>
    <Navbar expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand href="/">Cocoyam</Navbar.Brand>
            <h1>Welcome {user.username}!</h1>
            <Nav.Link href="/top_restaurants">Top Rated</Nav.Link>
            <Nav.Link href="/restaurants">Restaurants</Nav.Link>
            <Button variant="outline-dark" onClick={handleLogoutClick} >Logout</Button>
        </Container>      
    </Navbar>
    </>
  );
};

export default NavBar;
