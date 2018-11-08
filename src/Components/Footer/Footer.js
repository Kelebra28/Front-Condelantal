import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";
import './styles/footer.css'

class FooterPage extends React.Component {
render() {
return (
<Footer color="red accent-4" className="futer font-small pt-1 mt-4">
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6" className='text'>
      <h5 className="title">Con Delantal</h5>
      <p>
        Empresa mexicana ficticia codeada en Dev.f apoco no carnal.
      </p>
      </Col>
      <Col md="6" className='footer d-flex justify-content-end align-items-center'>
      <ul class="footer_list">
        <li><a href="">Contacto</a></li>
        <li><a href="">Ayuda</a></li>
        <li><a href="">Acerca de Nosotros</a></li>
      </ul>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-1">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="https://www.xvideos.com"> putoElQueLoLea.com </a>
    </Container>
  </div>
</Footer>
);
}
}

export default FooterPage;