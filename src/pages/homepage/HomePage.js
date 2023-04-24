import {Link} from 'react-router-dom'
import './HomePage.css'

 const Home = () => {
  return (
    <div className='homepage'>
      <h1>
        Welcome to Book Library
      </h1>
      <Link to='/books'> <p>Click here to search books...  </p> </Link>

    </div>
  )
}

export default Home