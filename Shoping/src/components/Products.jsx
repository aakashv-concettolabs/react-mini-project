import React, { useEffect, useState } from "react";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchProduct } from "../store/productSlice";

const Products = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return (
      <h2 className="text-3xl flex justify-center">Loading data please wait</h2>
    );
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong. Try again</h2>;
  }

  return (
    <div className="grid grid-cols-4 gap-8 ">
      {products.map((product) => (
        <div className="bg-white p-5 text-center rounded-xl" key={product.id}>
          <img className="h-28 mx-auto" src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button
            className="outline-none bg-[#764abc] px-3 py-2 text-white rounded-md font-bold cursor-pointer transition-all ease-in-out"
            onClick={() => handleAdd(product)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
