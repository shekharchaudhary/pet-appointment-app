import React from "react";
import { Appointment } from "./Appointment";
import { Form } from "./form";
import "./styles.scss";

export const AppointmentList = () => {
  const [appointments, setAppointments] = React.useState([]);
  const [showForm, setShowForm] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const inputRef = React.useRef();

  const filteredAppointment =
    appointments &&
    appointments.filter((item) => item.name.toLowerCase().includes(searchTerm));

  const handleShowAppointment = () => {
    setShowForm(!showForm);
  };
  React.useEffect(() => {
    if (appointments.length >= 1) {
      inputRef.current.focus();
    }
  }, [appointments]);

  const addAppointment = (appointment) => {
    if (!appointment.name || /^\s*$/.test(appointment.name)) return;
    if (!appointment.owner || /^\s*$/.test(appointment.owner)) return;
    if (!appointment.info || /^\s*$/.test(appointment.info)) return;

    const newAppointment = [appointment, ...appointments];
    setAppointments(newAppointment);
  };

  const hanleDeleteAppointment = (id) => {
    const deleteAppoint = [...appointments].filter(
      (appointment) => appointment.id !== id
    );
    return setAppointments(deleteAppoint);
  };

  const handleCompleteAppointment = (id) => {
    let completeAppointment = appointments.map((appmnt) => {
      if (appmnt.id === id) {
        appmnt.isComplete = !appmnt.isComplete;
      }
      return appmnt;
    });
    setAppointments(completeAppointment);
  };

  const handleSerchAppointment = () => {
    setSearchTerm(inputRef.current.value);
  };

  return (
    <div>
      {!showForm ? (
        <button className="button" onClick={handleShowAppointment}>
          {" "}
          Add Appointment
        </button>
      ) : (
        <div className="appointmentList">
          <button className="button" onClick={handleShowAppointment}>
            {" "}
            Exit Appointment
          </button>
          {appointments.length >= 1 && (
            <input
              className="searchAppointmentcontainer"
              onChange={() => handleSerchAppointment()}
              placeholder="Search Appointment"
              ref={inputRef}
            />
          )}
        </div>
      )}
      {showForm && <Form onSubmit={addAppointment} />}
      <div>
        <Appointment
          appointments={filteredAppointment}
          removeAppointment={hanleDeleteAppointment}
          completeAppointment={handleCompleteAppointment}
        />
      </div>
    </div>
  );
};
