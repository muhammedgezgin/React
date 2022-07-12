import logo from '../styles/images/logo.svg';


const Navbar = () => {
    return (
        <div id="navbar">
            <img src={logo} />
            <h1>Travel Journal</h1>
        </div>
    )
}

export default Navbar;