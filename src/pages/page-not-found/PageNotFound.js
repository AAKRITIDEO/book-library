import { Link } from 'react-router-dom';
import './PageNotFound.css';
const PageNotFound = () => {
    return (
      <div className="pnf-header">
      <h1>"Uh oh, this page doesn't exist."</h1>
      <Link to="/">Return to home page...</Link>
      <br/><br/>

      <Link to="/books">Access our book library here...</Link>
      </div>
    )
  }

  export default PageNotFound
