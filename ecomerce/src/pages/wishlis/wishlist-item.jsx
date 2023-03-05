import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


export const WishlistItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount,wishlistItems,addToWishlist } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        
      </div>
    </div>
  );
};