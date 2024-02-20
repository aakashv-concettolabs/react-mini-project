import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <h2 className="text-3xl m-4">Store using Redux toolkit</h2>
      <section>
        <h3 className="flex justify-center my-4 text-2xl">Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
