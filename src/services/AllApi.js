import commonApi from "./commonApi";
import commonAPI from "./commonApi";
import BASEURL from "./serverURL";

/* =====================================================
 Appointment API Services
===================================================== */

//  Add new appointment (POST)
export const addAppointmentAPI = async (reqBody) => {
  return await commonApi("POST", `${BASEURL}/appointments`, reqBody);
};

//  Get all appointments (GET)
export const getAllAppointmentsAPI = async () => {
  return await commonApi("GET", `${BASEURL}/appointments`, "");
};

// Get a specific appointment by ID (GET)
export const getAppointmentAPI = async (id) => {
  return await commonApi("GET", `${BASEURL}/appointments/${id}`, "");
};

//  Update an appointment (PUT)
export const updateAppointmentAPI = async (id, reqBody) => {
  return await commonApi("PUT", `${BASEURL}/appointments/${id}`, reqBody);
};

//  Delete an appointment (DELETE)
export const deleteAppointmentAPI = async (id) => {
  return await commonApi("DELETE", `${BASEURL}/appointments/${id}`, {});
};