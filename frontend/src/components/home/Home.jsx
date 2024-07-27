import "./Home.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-content">
      <div className="text-center">
        <h1>Welcome to BuyNew webpage</h1>
        <p className="lead">
          This a basic web page to show up my skills in front-end development 
          and in this project i have used many concepts like 
          </p>
          </div>
          <ul className="list">
            <li>User login and registration</li>
            <li>User logout and changing/updating user details</li>
            <li>Storing user details in Local API</li>
            <li>Adding products to cart and displaying them</li>
            <li>Deleting products from cart </li>
            <li>Storing data about products added to cart for every user in local API</li>
            <li>Form validations</li>
          </ul>
        
        <p className="lead">
         If you don't have a account in this webpage go to register link and register<br></br><Link to="register">Register</Link>
        </p>
        <p className="lead">
          After that u will be directed to Login Page.After Login verifiation u will be directed to products Page
          in which u can add products to your cart.<br></br>
         In carts page u can delete or view ur products.
        </p>
     <p className="lead">
      If already registered go to login page.<br></br><Link to="login">Login</Link>
     </p>
    </div>
  );
}

export default Home;
