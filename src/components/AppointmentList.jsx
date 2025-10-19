import React from "react";
import "./AppointmentList.css";

const AppointmentList = ({ appointments, onEdit, onDelete }) => {
  if (appointments.length === 0) {
    return <p className="text-center text-muted mt-4">No appointments found.</p>;
  }

  return (
    <div className="row">
      {appointments.map((a) => (
        <div key={a.id} className="col-md-4 col-sm-6 mb-4">
          <div className="card shadow-lg border-0 h-100 appointment-card">
            <div className="card-body">
              <h5 className="card-title text-primary mb-3">{a.name}</h5>
              <p className="card-text mb-1">
                <strong>Doctor:</strong> {a.doctor}
              </p>
              <p className="card-text mb-1">
                <strong>Date:</strong> {a.date}
              </p>
              <p className="card-text mb-3">
                <strong>Time:</strong> {a.time}
              </p>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => onEdit(a)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => onDelete(a.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
