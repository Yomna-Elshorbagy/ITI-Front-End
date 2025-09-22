import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-outline-secondary mb-3">
        Back to Products
      </Link>
      <div className="row">
        <div className="col-md-5 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>

        <div className="col-md-7">
          <h2 className="fw-bold">{product.title}</h2>
          <p className="text-muted">{product.category}</p>
          <h4 className="text-success fw-bold">${product.price}</h4>
          <p>{product.description}</p>
          <p>
            ⭐ <strong>{product.rating.rate}</strong> ({product.rating.count}{" "}
            reviews)
          </p>
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
