import React from "react";
import "./AppointmentList.css";

const AppointmentList = ({ appointments, onEdit, onDelete }) => {
  if (appointments.length === 0) {
    return <p className="text-center text-muted">No appointments found.</p>;
  }

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered shadow-sm">
        <thead className="table-primary">
          <tr>
            <th>Patient Name</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <td>{a.name}</td>
              <td>{a.doctor}</td>
              <td>{a.date}</td>
              <td>{a.time}</td>
              <td>
                <button
                  className="btn btn-sm btn-outline-primary me-2 "
                  onClick={() => onEdit(a)}
                >
                  Edit
                </button>

                
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onDelete(a.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
