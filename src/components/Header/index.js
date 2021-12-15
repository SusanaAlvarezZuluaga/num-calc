import logo from '../../assets/logo.png';
import name from '../../assets/name.png';
function Header() {
  return (
    <div className="header">
      <div className="logo-holder">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="name-holder">
        <img src={name} className="name" alt="name" />
      </div>
    </div>
  );
}
export default Header;
