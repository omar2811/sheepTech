import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import img from '../../img/fondo-de-pantalla-inspirado-en-estas-dos-palabras-upscaled.png'

function containerCust({ elemento }:any) {
  return (
    <div className="bg">
    <Container>
    <Row>
      <Col>    <h1 className='text'>Hola</h1>
    <h2 className="front">Somos</h2>
    <h2  className="front">los visionarios</h2>
    <h2  className="front">detrás de algunas de las</h2>
    <h2 className="front">marcas más innovadoras del mundo</h2></Col>
    </Row>
  </Container>
  </div>
  );
}

export default containerCust;
