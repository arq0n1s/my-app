import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = ({setCurrentCard, currentCard, cardList, setCreateFormIsActive}) => {

  const handleClickCreateCard = () => {
    setCreateFormIsActive(true);
    setCurrentCard(null);
  }

  return (
    <div> <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Cards Lists</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Cards" id="basic-nav-dropdown">
            
            {cardList.length ? cardList.map((card, id) => {
              return (
                <NavDropdown.Item
                key={id}
                onClick={() => {
                  setCreateFormIsActive(false);
                  setCurrentCard(card)
                }}
                >{card.ownerName}</NavDropdown.Item>
              )
            }) : <p style={{display: "flex", width: '100%', alignItems: 'center', justifyContent: 'center'}}>not a card</p>}
            
            
            <NavDropdown.Divider/>
            <NavDropdown.Item
            onClick={handleClickCreateCard}>
              Creat New Card
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Navbars