
import nike from "../nike.png";
const Navigation=()=>{
    return(
    <nav className="container">
    <div className="logo">
      <img src={nike} alt="nike" />
    </div>
    <ul>
    <li><a href="#">Home</a></li> 
      <li><a href="#">Location</a></li> 
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>

    <button>Login</button>
  </nav>
    );

};
export default Navigation;