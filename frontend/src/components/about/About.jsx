import React from 'react';
import './About.css'; 
import productlogo from '../../../photos/productspage.png';
import cartpage from '../../../photos/cartpage.png';
function About() {
  return (
    <div className="about-content">
      <h2 className='text-center'>About Us</h2>
      <p className='lead'>
        Welcome to BuyNew, your go-to destination for all your shopping needs! 
        Whether you're looking for the latest gadgets, trendy fashion items, or 
        household essentials, we've got you covered.
      </p>
      <p className='lead'>
        At BuyNew, we pride ourselves on offering a seamless online shopping experience 
        with a wide selection of products.
      </p>
      <p className='highlight'>
        This is the basic product page which will appear when we are login and can add products by clicking add to cart button
      </p>
      <img src={productlogo}></img>
      <p className='highlight mt-5'>
      This is the cart page after adding products to the cart we can delete the products using delete symbol
      </p>
      <img src={cartpage}></img>
      <p className='lead'>
        Our mission is to provide you with the best possible shopping experience, 
        combining convenience, quality, and affordability. With a user-friendly interface 
        and dedicated customer support, we ensure that your shopping journey is smooth 
        from start to finish.
      </p>
      <p className='lead'>
        Explore our diverse range of products, discover new arrivals, and enjoy exclusive 
        deals every day. Whether you're shopping for yourself or finding the perfect gift, 
        BuyNew is here to make your online shopping experience enjoyable and rewarding.
      </p>
      <p className='highlight text-center'> 
        Thank you for choosing BuyNew. Happy shopping!
      </p>
    </div>
  );
}

export default About;
