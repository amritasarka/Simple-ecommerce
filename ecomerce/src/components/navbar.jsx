import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { HeartStraight } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    // <div className="navbar">
    // {/* <label className="Logo">Vikings</label> */}
    //   <div className="links">
    //     <Link to="/"> Shop </Link>
    //     {/* <Link to="/contact"> Contact </Link> */}
    //     <Link to="/sign-up">Signup</Link>
    //     <Link to="/cart">
    //       <ShoppingCart size={32} />
    //       </Link>
    //       <Link to="/wishlist"><HeartStraight size={32} /></Link>

    //   </div>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">Vikings</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon navv"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/"> Shop </Link>
          </li>
          <li class="nav-item">
            <Link to="/sign-up">Signup</Link>
          </li>
          <li class="nav-item">
            <Link to="/cart">
              <ShoppingCart size={32} /></Link></li>
          <li><Link to="/wishlist"><HeartStraight size={32} /></Link>
          </li>


        </ul>
      </div>
    </nav>

  );
};
