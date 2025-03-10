import './Product.css';
import {useContext} from 'react';
import {userLoginContext} from '../../contexts/userLoginContext'
import { useNavigate } from "react-router-dom";
function Product(props) {

  let productObj=props.productObj;
  let {currentUser}=useContext(userLoginContext)
  
  let navigate = useNavigate();

  async function addProductToCart(productObj){
    //add current user data to productObj
    productObj.username=currentUser.username;
    let res=await fetch(`http://localhost:4000/user-api/add-to-cart/${currentUser.username}`,{
      method:"PUT",
      headers: { "Content-type": "application/json" },
      body:JSON.stringify(productObj)
    })
    let result =await res.json;
    if(result.payload.modifiedCount!=0){
      console.log(result.payload.modifiedCount)
      navigate("/login");
    }  
  }

  return (
    <div className='card text-center h-100 bg-light'>
    <div className="card-body d-flex flex-column justify-content-between">
      <img src={productObj.thumbnail}></img>
      <p className="fs-4 text-secondary">{productObj.title}</p>
      <p className="fs-6 text-danger">{productObj.brand}</p>
      <p className="lead">{productObj.description}</p>
      <p className="fs-3 text-warning">${productObj.price}</p>
      <button className="btn btn-success" onClick={()=>addProductToCart(productObj)}>Add to cart</button>
    </div>

    </div>
  )
}

export default Product