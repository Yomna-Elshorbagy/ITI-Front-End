import React, { useEffect, useState } from "react";
import ProductsCard from "./components/ProductsCard.jsx";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }
  useEffect (() => {
    getProducts();
  }, []);
  return <>
    
    <div className="container">
        <div className="row">
            {products.map((product)=>(
                <ProductsCard product = {product}/>
            ))}
        </div>
    </div>
  </>;
}
