
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

const AddAppointment = ({ onSendAppointment }) => {
  const clearData = {
    DoctorName: "",
    patientName: "",
    Date: "",
    Time: "",
    Description: "",
  };
  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(clearData);
  const { DoctorName, patientName, Date, Time, Description } = formData;

  async function formDataPublish() {
    const appointmentInfo = {
      DoctorName: formData.DoctorName,
      patientName: formData.patientName,
      Date: formData.Date + " " + formData.Time,
      Description: formData.Description,
    };
    await onSendAppointment(appointmentInfo).then((data) => {
      if (data) {
        setFormData(clearData);
        setToggleForm(!toggleForm);
      }
    });
  }

  const onHandleInputChange = (fieldName) => (event) => {
    event.preventDefault();
    setFormData({ ...formData, [fieldName]: event.target.value });
  };

  return (
    <div>

      <button id="mybtn2" onClick={() => setToggleForm(!toggleForm)}
        className="btn btn-warning">
        <AddIcon /> Add Appointment
      </button>

      {toggleForm && (
        <div
       className="mainwrapper"


        >
          <
         
          >
            <label
              htmlFor="DoctorName"
            // className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Doctor Name
            </label>
            <div
            
            >
              <input
                type="text"
                name="DoctorName"
                id="DoctorName"
                value={DoctorName}
                onChange={onHandleInputChange("DoctorName")}
              className="inputtext"
              />
            </div>
          </>

          <div
          // className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5"
          >
            <label
              htmlFor="patientName"
            // className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Patient Name
            </label>
            <div
            // className="mt-1 sm:mt-0 sm:col-span-2"
            >
              <input
                type="text"
                name="patientName"
                id="patientName"
                value={patientName}
                className="inputtext"
                onChange={onHandleInputChange("patientName")}
              // className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500
              //    sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div
          //  className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5"
          >
            <label
              htmlFor="Date"
            // className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Date
            </label>
            <div
            // className="mt-1 sm:mt-0 sm:col-span-2"
            >
              <input
                type="date"
                name="Date"
                id="Date"
                value={Date}
                className="inputtext"
                onChange={onHandleInputChange("Date")}
              // className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500
              //    sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div
          // className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5"
          >
            <label
              htmlFor="aTime"
            // className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Time
            </label>
            <div
            //  className="mt-1 sm:mt-0 sm:col-span-2"
            >
              <input
                type="time"
                name="Time"
                id="Time"
                value={Time}
                className="inputtext"
                onChange={onHandleInputChange("Time")}
              // className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500
              //    sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div
          //  className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5"
          >
            <label
              htmlFor="Description"
            // className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Description
            </label>
            <div
            //  className="mt-1 sm:mt-0 sm:col-span-2"
            >
              <textarea
                id="Description"
                name="Description"
                rows="3"
                value={Description}
                onChange={onHandleInputChange("Description")}
                className="inputtext"
                
                placeholder="Detailed comments about the condition"
              ></textarea>
            </div>
          </div>

          <div
          // className="pt-5"
          >
            <div
            // className="flex justify-end"
            >
              <button
                type="submit"
                className="btn btn-warning"
                onClick={() => formDataPublish()}

              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAppointment;
