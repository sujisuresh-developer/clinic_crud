import React, { useState, useEffect } from "react";
import AppointmentForm from "../components/AppointmentForm";
import "./BookAppointment.css";
import {
  addAppointmentAPI,
  getAllAppointmentsAPI,
  updateAppointmentAPI,
} from "../services/AllApi";

function BookAppointment() {
  const [appointments, setAppointments] = useState([]);
  const [editData, setEditData] = useState(null);

  // Fetch all appointments from JSON Server on mount
  useEffect(() => {
    fetchAppointments();
  }, []);

  // Function to load all appointments
  const fetchAppointments = async () => {
    try {
      const response = await getAllAppointmentsAPI();
      setAppointments(response);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  // Add or update appointment
  const handleAdd = async (appointment) => {
    try {
      if (editData) {
        // Update existing appointment
        await updateAppointmentAPI(editData.id, appointment);
        setEditData(null);
      } else {
        // Add new appointment
        await addAppointmentAPI(appointment);
      }
      // Refresh list
      fetchAppointments();
    } catch (error) {
      console.error("Error saving appointment:", error);
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
