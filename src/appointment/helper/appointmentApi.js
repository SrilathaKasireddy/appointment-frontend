import { API } from "../../backend";

export const GetAppointments = async () => {
  
  try {
    
    const response = await fetch(`${API}/apt`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    // console.log(response.json());
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const SaveAppointment = async (apt) => {
  try {
    const response = await fetch(`${API}/saveApt`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify(apt),
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const DeleteAptmnt = async (id) => {
  try {
    const response = await fetch(`${API}/delete/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
