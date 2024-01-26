import "./styles.scss";

export const Appointment = ({
  appointments,
  removeAppointment,
  completeAppointment,
}) => {
  return appointments.map(({ name, owner, info, isComplete, id }, index) => (
    <div
      className={isComplete ? "complete appointment  " : "appointment"}
      key={index}
    >
      <div
        className="appointmentContainer"
        onClick={() => completeAppointment(id)}
      >
        <h1>{id}</h1>
        <span>Name: {name}</span>
        <span>Owner: {owner}</span>
        <span>Info: {info}</span>
      </div>
      <button className="button" onClick={() => removeAppointment(id)}>
        X
      </button>
    </div>
  ));
};
