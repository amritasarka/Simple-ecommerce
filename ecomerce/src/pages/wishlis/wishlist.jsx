import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { WishlistItem } from "./wishlist-item";
import { useNavigate } from "react-router-dom";


export const Wishlist= () => {
  const {wishlistItems, getTotalWishlistAmount, checkout } = useContext(ShopContext);
  

  const totalAmount = getTotalWishlistAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your wishlist Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (wishlistItems[product.id] !== 0) {
            return <WishlistItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Wishlist is Empty</h1>
      )}
    </div>
  );
};