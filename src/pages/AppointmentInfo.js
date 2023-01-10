import React from "react";
import "../app.css"
import DeleteIcon from "@mui/icons-material/Delete";



export const AppointmentInfo = ({ appointment, deleteAppointment }) => {
  return (
    
    <div style={{ margin: 10
      ,display: "flex", flexWrap: "wrap", textAlign: "center", justifyContent: "center" }} >
      <table>
        
        <tr>
          <th>Patient Name</th>
          <th>Doctor Name</th>
          <th>Description</th>
          <th>Appointment Date & Time</th>
          <th>Delete </th>
        </tr>
        <tbody>
        <tr>
          <td>{appointment.patientName}</td>
          <td>{appointment.DoctorName}</td>
          <td>{appointment.Description}</td>
          <td>{appointment.Date} </td>
          <td><button
        type="button"
        className="btn btn-warning btn btn-sm"
       
        onClick={() => deleteAppointment(appointment._id)}
      >
        <DeleteIcon  />
      </button>
      </td>
        </tr>
        </tbody>
      </table>

     
    </div>
  );
};
