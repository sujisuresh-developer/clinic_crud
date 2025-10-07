import React, { useState, useEffect } from "react";

function AppointmentForm({ onAdd, editData }) {
  const [formData, setFormData] = useState({
    name: "",
    doctor: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    if (editData) setFormData(editData);
  }, [editData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.doctor || !formData.date || !formData.time) {
      alert("Please fill all fields");
      return;
    }
    onAdd(formData);
    setFormData({ name: "", doctor: "", date: "", time: "" });
  };

  return (
    <form className="p-4 shadow rounded bg-light" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>Patient Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Doctor</label>
        <input
          type="text"
          name="doctor"
          className="form-control"
          value={formData.doctor}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="form-control"
          value={formData.date}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label>Time</label>
        <input
          type="time"
          name="time"
          className="form-control"
          value={formData.time}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        {editData ? "Update Appointment" : "Book Appointment"}
      </button>
    </form>
  );
}

export default AppointmentForm;
