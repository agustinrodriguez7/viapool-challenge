import { Navbar } from 'react-bootstrap'

const Header = ({ logo, width, height, href, children }) =>
    <>
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
    </>

export default Header