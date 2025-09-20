import React from "react";

export default function Child({ products, onDelete, onIncrement, onUpdate }) {
  //   const { id, name, stock, price, onSale } = products;

  return (
    <div className="p-4" style={{ backgroundColor: "#fdfdfd" }}>
      <h3 className="mb-4 text-center" style={{ color: "#6c5ce7" }}>
        🌸 Product Cards
      </h3>
      <div className="row">
        {products.map(({ id, name, stock, price, onSale }) => (
          <div key={id} className="col-md-4 mb-4">
            <div
              className="card shadow-sm border-0 h-100"
              style={{
                backgroundColor: "#f9f5ff",
                borderRadius: "15px",
              }}
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <h5
                  className="card-title mb-3"
                  style={{ color: "#4834d4", fontWeight: "600" }}
                >
                  {name}
                </h5>
                <p
                  className="card-text"
                  style={{ color: "#6c5ce7", fontSize: "1rem" }}
                >
                  Stock: <b>{stock}</b>
                </p>
                <p
                  className="card-text"
                  style={{ color: "#6c5ce7", fontSize: "1rem" }}
                >
                  price: <b>{price}</b>
                </p>
                <p
                  className="card-text"
                  style={{ color: "#6c5ce7", fontSize: "1rem" }}
                >
                  onSale: <b>{onSale}</b>
                </p>
                <div className="mt-auto">
                  <button
                    className="btn btn-outline-danger w-100 mb-2"
                    onClick={() => onDelete(id)}
                  >
                    ❌ Delete
                  </button>
                  <button
                    className="btn btn-outline-success w-100 mb-2"
                    onClick={() => onIncrement(id)}
                  >
                    ➕ Increment Stock
                  </button>
                  <button
                    className="btn btn-outline-success w-100"
                    onClick={() => onUpdate(id)}
                  >
                    ➕ Increment Price
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
