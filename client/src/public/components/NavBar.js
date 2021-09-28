import { Navbar, Container, Button } from 'react-bootstrap';

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
            
            <Button variant="outline-dark" onClick={handleLogoutClick} >Logout</Button>
        </Container>      
    </Navbar>
    </>
  );
};

export default NavBar;


// import { Link } from "react-router-dom"

// export default function Navigation(user, onLogout){
//   function handleLogOut(){
//     fetch("logout", {
//       method: "DELETE", 
//     }).then(() => onLogout());
//   }
//     return(<>
//         <Navbar bg="dark" variant="dark">
//           <Container>
//           <Navbar.Brand href="/">Cocoyam</Navbar.Brand>
//           <Nav className="me-auto">
//             <h1>{user.username}</h1>
//             <Nav.Link href="all_restaurants">All Restaurants</Nav.Link>
//             <Nav.Link href="top_restaurants">Top Resturants</Nav.Link>
//             <Nav.Link href="/logout" onLogout={()=> handleLogOut}>Log out</Nav.Link>
//             <Nav.Link href="/">Home</Nav.Link>
//           </Nav>
//           </Container>
//         </Navbar>
//       </>)
// }