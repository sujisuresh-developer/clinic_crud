import React, { useState, useEffect } from "react";
import AppointmentForm from "../components/AppointmentForm";
import "./BookAppointment.css";

function BookAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const handleAdd = (appointment) => {
    if (editData) {
      const updated = appointments.map((a) =>
        a.id === editData.id ? appointment : a
      );
      setAppointments(updated);
      setEditData(null);
    } else {
      setAppointments([...appointments, { ...appointment, id: Date.now() }]);
    }
  };

  return (
    <div className="book-appointment-page">
      <div className="container py-5">
        <h2 className="text-center text-primary mb-4">Book Your Appointment</h2>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg p-4">
              <AppointmentForm onAdd={handleAdd} editData={editData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAppointment;
