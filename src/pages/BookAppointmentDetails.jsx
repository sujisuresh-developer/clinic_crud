import React, { useState, useEffect } from "react";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList"; // Table version
import "./BookAppointment.css";

function BookAppointmentDetails() {
  const [appointments, setAppointments] = useState([]);
  const [editData, setEditData] = useState(null);
  const [filter, setFilter] = useState("");
  const [sortType, setSortType] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // ascending/descending

  // Load appointments from localStorage
  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem("appointments")) || [];
    setAppointments(storedAppointments);
  }, []);

  // Save appointments to localStorage
  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  // Add or update appointment
  const handleAdd = (appointment) => {
    if (editData) {
      const updatedList = appointments.map((a) =>
        a.id === editData.id ? appointment : a
      );
      setAppointments(updatedList);
      setEditData(null);
    } else {
      setAppointments([...appointments, { ...appointment, id: Date.now() }]);
    }
  };

  // Delete appointment
  const handleDelete = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  // Edit appointment
  const handleEdit = (appointment) => {
    setEditData(appointment);
  };

  // Filter appointments by doctor name
  const filteredAppointments = appointments.filter((a) =>
    a.doctor.toLowerCase().includes(filter.toLowerCase())
  );

  // Sort appointments by date or patient name
  const sortedAppointments = [...filteredAppointments].sort((a, b) => {
    let result = 0;
    if (sortType === "date") {
      result = new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    if (sortType === "patient") {
      result = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    }
    return sortOrder === "asc" ? result : -result;
  });

  return (
    <div className="appointment-details-page container py-5">
      <h2 className="text-center text-primary mb-4">Appointment Details</h2>

      {/* Filter + Sort */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-4 col-sm-12 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Filter by doctor name..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <div className="col-md-3 col-sm-12 d-flex">
          <select
            className="form-select me-2"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="date">Date</option>
            <option value="patient">Patient Name</option>
          </select>

         
          
        </div>
      </div>

      {/* Edit Form */}
      {editData && (
        <div className="row justify-content-center mb-4">
          <div className="col-md-6 col-sm-12">
            <h5 className="text-secondary mb-2">Edit Appointment</h5>
            <AppointmentForm onAdd={handleAdd} editData={editData} />
          </div>
        </div>
      )}

      {/* Appointment Table */}
      <AppointmentList
        appointments={sortedAppointments}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default BookAppointmentDetails;
