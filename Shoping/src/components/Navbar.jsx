import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const select = useSelector((state) => state.cart);
  return (
    <main className="flex items-center justify-between text-white bg-slate-600">
      <span className="text-2xl m-5 flex-3">REDUX STORE</span>
      <div>
        <Link className="m-5" to="/">
          Home
        </Link>
        <Link to="/cart" className="m-5">
          Cart
        </Link>
      </div>
      <span className=" m-5">Cart Items: {select.length}</span>
    </main>
  );
};

export default Navbar;
