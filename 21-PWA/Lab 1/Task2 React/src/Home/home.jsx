import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
   <>
    <div className="container my-5">
      <div className="row justify-content-center">
        {/* Contact Form */}
        <div className="col-lg-7 mb-1">
          <div className="card border-0 shadow-lg rounded-4 h-100">
            <div className="card-body p-4">
              <h3 className="card-title mb-4 text-contact fw-bold">
                Contact Us
              </h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder="Enter subject"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="subscribe"
                  />
                  <label htmlFor="subscribe" className="form-check-label">
                    Subscribe Us
                  </label>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-lg-5">
          <div className="card border-0 shadow-lg rounded-4 h-100 bg-light">
            <div className="card-body p-4">
              <h4 className="text-success fw-bold pb-3">Get in Touch</h4>
              <p className="text-muted pb-4">
                We'd love to hear from you! Reach out to us via phone, email, or
                visit our office.
              </p>

              <div className="pb-3 d-flex align-items-center">
                <FaPhoneAlt className="me-3 text-success" />
                <span className="fw-semibold">+20 123 456 789</span>
              </div>

              <div className="pb-3 d-flex align-items-center">
                <FaEnvelope className="me-3 text-success" />
                <span className="fw-semibold">support@myshop.com</span>
              </div>

              <div className="d-flex align-items-start">
                <FaMapMarkerAlt className="me-3 text-success mt-1" />
                <span className="fw-semibold">
                  18 Adelhameed shoman Street,Nasr city,  Cairo, Egypt
                </span>
              </div>

              <div className="pt-4">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110573.12429287145!2d31.1313028!3d30.0444196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840d91f53f2d1%3A0x1c54f9b89e0ee0b5!2sCairo!5e0!3m2!1sen!2seg!4v1694000000000!5m2!1sen!2seg"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
}
