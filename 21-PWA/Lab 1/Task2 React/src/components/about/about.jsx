export default function About() {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="text-muted">
          Discover who we are and what makes our products unique.
        </p>
      </div>

      <div className="row mt-5 text-center">
        <div className="col-md-4">
          <div className="p-4 border rounded shadow-sm h-100">
            <h4>✨ Quality</h4>
            <p className="text-muted">
              Premium materials and craftsmanship in every product.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded shadow-sm h-100">
            <h4>🌍 Sustainability</h4>
            <p className="text-muted">
              Eco-friendly packaging and responsible sourcing.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-4 border rounded shadow-sm h-100">
            <h4>❤️ Customer First</h4>
            <p className="text-muted">
              Dedicated to delivering happiness through our accessories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
