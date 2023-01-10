import { BiCalendar } from "react-icons/bi";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AddAppointment from "./pages/AddAppointment";
import { AppointmentInfo } from "./pages/AppointmentInfo";
import Search from "./pages/Search";
import "./App.css"
import { useState, useEffect, useCallback } from "react";
import {
  DeleteAptmnt,
  GetAppointments,
  SaveAppointment,
} from "./appointment/helper/appointmentApi";
import { CustomToast } from "./pages/CustomToast";



export default function App({ UserName }) {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  }
  const [appointmentList, setAppointmentList] = useState([]);
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("patientName");
  const [orderBy, setOrderBy] = useState("asc");

  let filteredAppointmentList = appointmentList
    .filter((item) => {
      return (
        item.patientName.toLowerCase().includes(query.toLowerCase()) ||
        item.DoctorName.toLowerCase().includes(query.toLowerCase()) ||
        item.Description.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });

  const fetchData = useCallback(() => {
    GetAppointments().then((data) => {
      if (data.error) {
        setAppointmentList([]);
        CustomToast(false, data.error);
      } else {
        setAppointmentList(data);
        CustomToast(true, data.msg);
      }
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  /// Other methods

  const deleteAppointment = async (appointmentId) => {
    await DeleteAptmnt(appointmentId).then((data) => {
      if (data.error) {
        CustomToast(false, data.error);
      } else {
        fetchData();
        CustomToast(true, data.msg);
      }
    });
  };

  const saveApt = async (myAppointment) => {
    return await SaveAppointment(myAppointment).then((data) => {
      if (data.error) {
        CustomToast(false, data.msg);
        return false;
        // setAppointmentList([]);
      } else {
        console.log(data.msg);
        CustomToast(true, data.msg);
        fetchData();
        return true;
      }
    });
  };

  const onQueryChange = (myQuery) => {
    setQuery(myQuery);
  };

  /// Main UI
  return (
    <>
      <div className="mx-4">
        <ToastContainer autoClose={2000} limit={3} />
     <h1 className="mainheading">
          <button id="mybtn" className="btn btn-warning" onClick={() => logout()}>logout </button>

          Your Doctor Appointments
        </h1>

        {/* <button id ="mybtn" className="btn btn-warning"onClick={()=>logout()}>logout </button> */}
        <AddAppointment
          onSendAppointment={(myAppointment) => saveApt(myAppointment)}


        />



        <Search
          query={query}
          onQueryChange={onQueryChange}
          
        />

        <div className="mytable">
          {filteredAppointmentList.length > 0
            ? filteredAppointmentList.map((appointment) => (
              <AppointmentInfo
                key={appointment._id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))
            : <div className="notfound">Oops! No data found</div>}
        </div>
      </div>
    </>
  );
}
