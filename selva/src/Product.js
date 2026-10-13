// import React from 'react'
// import './Product.css'


// const Product = ({ productObj }) => {


//     return (
//         <div style={{ display: "flex" }}>
//             {productObj.map((item) => (
//                 <>
//                     <div className="containerCard">
//                     <img src={shoe} className="imageShoe" />
//                     <img src={slipper} className="imageShoe"/>
//                     <img src={socks} className="imageShoe"/>
//                     <h3 className="headingShoe">{item.name}</h3>
//                     <div className="priceContainerShoe"> <h4 className="priceShoe">${item.price}</h4> &nbsp;
//                     <strike className="strikeShoe">${item.strikePrice}</strike></div>
//                     <button className="buttonShoe"> BUY NOW</button>

//                     </div>
//                 </>
//             ))}
//         </div>
//     )
// }

// export default Product;


import React from 'react';
import './Product.css';
import shoe from './shoe.jpeg'
import slipper from './slipper.webp'
import socks from './socks.webp'
import crocks from './crocks.jpg'
import heel from './heel.webp'
import roller from './roller.jpg'

function Product({ productObj }) {
  if (!productObj || productObj.length === 0) {
    return <p style={{ padding: '20px', textAlign: 'center' }}>No products available</p>;
  }
    const imageMap = {
    'shoe.jpeg': shoe,
    'slipper.webp': slipper,
    'socks.webp': socks,
    'crocks.jpg':crocks,
    'heel.webp':heel,
    'roller.jpg':roller
  };

  const calculateDiscount = (price, strikePrice) => {
    const p = parseFloat(price);
    const sp = parseFloat(strikePrice);
    if (sp > p) {
      return Math.round(((sp - p) / sp) * 100);
    }
    return 0;
  };

  return (
    <div className="meesho-products-grid">
      {productObj.map((item, index) => {
        const productImage = imageMap[item.image];
        const discountPercentage = calculateDiscount(item.price, item.strikePrice);
        return (
          <div className="meesho-card" key={index}>
            <div className="image-container">
              <img src={productImage} alt={item.name} className="product-image" />
            </div>

            <div className="details-container">
              <h3 className="product-title" title={item.name}>
                {item.name}
              </h3>

              <div className="price-row">
                <span className="discount-price">₹{item.price}</span>
                <span className="actual-price">₹{item.strikePrice}</span>
                {discountPercentage > 0 && (
                  <span className="discount-percent">{discountPercentage}% off</span>
                )}
              </div>

              <div className="delivery-tag">
                <span>Free Delivery</span>
              </div>

              <div className="rating-row">
                <span className="rating-badge">
                  4.1 <span className="star">★</span>
                </span>
                <span className="reviews-text">{(index + 1) * 125} Reviews</span>
              </div>
            </div>

            <button className="buy-now-btn">BUY NOW</button>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
