import React, { useState } from "react";
import Child from "../Child/Child.jsx";

export default function Parent() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", stock: 5, price: 1234, onSale: true },
    { id: 2, name: "Phone", stock: 10, price: 5678, onSale: true },
    { id: 3, name: "Headset", stock: 3, price: 1111, onSale: true },
    { id: 4, name: "Mouse", stock: 6, price: 5555, onSale: true },
    { id: 5, name: "TV", stock: 2, price: 2222, onSale: true },
    { id: 6, name: "Tablet", stock: 1, price: 3333, onSale: true },
  ]);

  const deleteProduct = (id) => {
    setProducts(products.filter((prod) => prod.id !== id));
  };

  const incrementStock = (id) => {
    setProducts(
      products.map((prod) =>
        prod.id === id ? { ...prod, stock: prod.stock + 1 } : prod
      )
    );
  };

  const updatePrice = (id) => {
    setProducts(
      products.map((prod) =>
        prod.id === id ? { ...prod, price: prod.price + 20 } : prod
      )
    );
  };
  return (
    <>
      <div className="bg-success-subtle text-center m-5 p-4 ">
        <h2>📦 Product List</h2>
        <Child
          products={products}
          onDelete={deleteProduct}
          onIncrement={incrementStock}
          onUpdate={updatePrice}
        />
      </div>
    </>
  );
}
