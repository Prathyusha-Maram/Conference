import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
    const Navbar = () => {
        return (
            <>
            <Nav>
                <NavMenu>
                <NavLink to="/accept" activeStyle>
                    Accept
                </NavLink>
                <NavLink to="/committee" activeStyle>
                    Committee
                </NavLink>
                <NavLink to="/home" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/login" activeStyle>
                    Login
                </NavLink>
                <NavLink to="/register" activeStyle>
                    Register
                </NavLink>
                <NavLink to="/submission" activeStyle>
                    Submission
                </NavLink>
                </NavMenu>
            </Nav>
            </>
        );
        };
        
        export default Navbar;