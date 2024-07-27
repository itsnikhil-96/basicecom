import { useState, useEffect, useContext } from "react";
import { userLoginContext } from "../../contexts/userLoginContext";
import { MdDeleteOutline } from "react-icons/md";
import "./Cart.css";

function Cart() {
  let { currentUser } = useContext(userLoginContext);
  let [cart,setCart]=useState([]);

  async function getUserCart()
  {
    let res=await fetch(`http://localhost:4000/user-api/cart/${currentUser.username}`)
    let data=await res.json();
    setCart(data.payload.products)
  }
useEffect(() => {
  getUserCart()
}, [])

  // Delete product from cart
  async function deleteProduct(productId) {
    try {
      let res = await fetch(`http://localhost:4000/user-api/add-to-cart/${productId}`, {
        method: "DELETE",
      });
  
      if (!res.ok) {
        throw new Error(`Failed to delete product. Status: ${res.status}`);
      }
  
      const productIndex = currentUser.products.findIndex(product => product.id === productId);
  
      if (productIndex !== -1) {
        currentUser.products.splice(productIndex, 1);
      }
  
      getProductsOfUserCart();
    }
     catch (error) {
      console.error("Error deleting product:", error);
    }
  }
  

  

  return (
    <div className="table-container">
      {currentUser.products.length === 0 ? (
        <p className="display-1 text-center text-danger">Cart is empty</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>{cartItem.id}</td>
                <td>{cartItem.title}</td>
                <td>${cartItem.price}</td>
                <td>{cartItem.brand}</td>
                <td>
                  <button
                    className="btn-delete"
                    onClick={() => deleteProduct(cartItem.id)}
                  >
                    <MdDeleteOutline className="text-danger fs-3" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Cart;
