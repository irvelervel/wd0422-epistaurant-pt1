// Home will be the component hosting the main features of the homepage
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import menu from '../data/menu.json'

const Home = () => (
  <Container>
    <Row className="justify-content-center mt-3">
      {/* this is the same thing as writing <div className="col col-xs-12 col-md-6"> */}
      <Col xs={12} md={6} className="text-center">
        <h1>Welcome to Epistaurant!</h1>
        <h3>Check out our amazing pastas!</h3>
        <Carousel>
          {menu.map((pasta) => (
            <Carousel.Item key={pasta.id}>
              <img
                className="d-block w-100"
                src={pasta.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{pasta.name}</h3>
                <p>{pasta.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </Row>
  </Container>
)

export default Home
