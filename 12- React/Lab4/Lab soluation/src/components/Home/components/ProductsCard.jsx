import React from "react";
import { Link } from "react-router";

export default function ProductsCard({ product }) {
  const {id, title, image, description, price, rating } = product;

  return (
    <div className="col-md-3 mb-4">
      <Link
        to={`/products/${id}`}
        className="text-decoration-none text-dark"
      >
      <div className="card h-100 shadow-sm border-0">
        <img
          src={image}
          className="card-img-top p-3"
          alt={title}
          style={{ height: "200px", objectFit: "contain" }}
        />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title fw-bold text-truncate">{title}</h6>

          <p className="card-text text-muted small flex-grow-1">
            {description.length > 80
              ? description.substring(0, 80) + "..."
              : description}
          </p>

          <div className="d-flex justify-content-between align-items-center mt-auto">
            <span className="fw-bold text-success"> ${price} </span>
            <span className="text-warning">⭐ {rating.rate}</span>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
