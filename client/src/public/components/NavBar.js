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
    <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="/">Cocoyam</Navbar.Brand>
            {/* {user && <Nav.Link href={`/user/${user.id}`}>{user && user.username}</Nav.Link>} */}
          <Navbar.Collapse className="justify-content-end">
          { user && user.username ? <Navbar.Text>
              Signed in as: <a href="#login">{user && user.username}</a>
            </Navbar.Text> : ""}
            <Nav.Link href="/top_restaurants">Top Rated</Nav.Link>
            <Nav.Link href="/restaurants">Restaurants</Nav.Link>
          </Navbar.Collapse>
          { user && user.username ? <Button variant="outline-light" onClick={handleLogoutClick} >Logout</Button> : <Button variant="outline-light" onClick={handleLogoutClick} > Sign In</Button> }
        </Container>      
    </Navbar>
    </>
  );
};

export default NavBar;
