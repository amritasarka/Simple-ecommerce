import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";

import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import Login from "./pages/signup/login_component";
import SignUp from "./pages/signup/signup_component";
import UserDetails from "./pages/signup/userDetail";
import { Cart } from "./pages/cart/cart";
import { Wishlist } from "./pages/wishlis/wishlist";

import { ShopContextProvider } from "./context/shop-context";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
             <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;