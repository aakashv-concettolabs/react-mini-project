import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartproducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productid) => {
    dispatch(remove(productid));
  };
  return (
    <>
      <h3 className="flex justify-center my-4 text-2xl">Cart</h3>
      <div className="grid grid-cols-4 gap-8 ">
        {cartproducts.map((product) => (
          <div className="bg-white p-5 text-center rounded-xl" key={product.id}>
            <img className="h-28 mx-auto" src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button
              className="outline-none bg-[#764abc] px-3 py-2 text-white rounded-md font-bold cursor-pointer transition-all ease-in-out"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
