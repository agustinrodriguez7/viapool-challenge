import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'

const Header = ({ logo, width, height, href, children }) =>
    <Row>
        <Col xs={{ span: 12 }}>
            <Navbar bg="light" variant="dark">
                <Navbar.Brand href={href}>
                    <img
                        alt=""
                        src={logo}
                        width={width || 30}
                        height={height || 30}
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
            </Navbar>
            {children}
        </Col>
    </Row >

export default Header