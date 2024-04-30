import churchLogo from "../../assets/images/11 HOM-LOGO.jpg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={churchLogo} className="churchLogo" />
      <i className="bx bx-menu-alt-right menuBt"></i>
    </nav>
  );
};

export default Navbar;
