
import { Link } from 'react-router-dom';
import "./nav.css";



const Nav = () => {
    return (
      <>
        <nav>
          <Link to="/">Home</Link>
          
          <Link to="/About">About</Link>
          
        </nav>
 
      
      </>
    )
  }
  
  export default Nav
