import { Navbar as BootstrapNavbar } from 'react-bootstrap'

const Header = ({ text, logo, width, height, href, children }) =>
    <>
        <BootstrapNavbar bg="light" variant="dark">
            <BootstrapNavbar.Brand href={href}>
                <img
                    alt=""
                    src={logo}
                    width={width || 30}
                    height={height || 30}
                    className="d-inline-block align-top"
                />
                {text}
            </BootstrapNavbar.Brand>
        </BootstrapNavbar>
        {children}
    </>

export default Header