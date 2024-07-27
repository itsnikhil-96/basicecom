import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='d-flex felx-wrap justify-content-around bg-dark  text-white p-6 fs-6'>
      <div>
        <p className='text-info display-4'></p>
        <p>Developed By : Nikhil</p>
        <p>nikhilpolimetla852@gmail.com</p>
        <p>Contact :9177590577</p>
      </div>
      <div>
      <p className='text-white display-4'></p>
        <Link>Home</Link><br></br>
        <Link to="about">About us</Link><br></br>
        <Link>Terms and Conditions</Link>
       
      </div>
    </div>
  )
}

export default Footer