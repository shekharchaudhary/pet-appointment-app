import "./styles.scss";
import appIcon from "./assets/appointment.png";
import { AppointmentList } from "./AppointmentList";
export default function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={appIcon} alt="" />
        <h1>APPOINTMENT</h1>
      </div>
      <AppointmentList />
    </div>
  );
}
