import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center text-center" style={{ height: "90vh" }}>
      <h1 className="text-light fw-bold mb-3">Welcome to Our Clinic</h1>
      <p className="text-muted mb-4" style={{ maxWidth: "500px" }}>
        Manage your appointments with ease. Book, view, and update your doctor appointments — all in one place.
      </p>
      <Link to="/book" className="btn btn-lg btn-primary">
        Book Appointment
      </Link>
    </div>
  );
}

export default Home;
