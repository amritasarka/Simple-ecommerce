import React, { useContext} from "react";
import { ShopContext } from "../../context/shop-context";




export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const { addToWishlist, wishlistItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];
  const wishlistItemCount = wishlistItems[id];
 

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p className="productname">
          <b>{productName}</b>
        </p>
        <p className="prices"> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      
      <button className="addToWishlistBttn" onClick={() => addToWishlist(id)}>
        Add To Wishlist 
      </button>
    </div>
  );
};