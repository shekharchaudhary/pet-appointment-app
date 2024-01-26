import React from "react";

import "./styles.scss";

export const Form = ({ onSubmit }) => {
  const [values, setValues] = React.useState({
    name: "",
    owner: "",
    info: ""
  });

  const handleChangeName = (e) => {
    setValues({ ...values, name: e.target.value || "" });
  };
  const handleChangeOwner = (e) => {
    setValues({ ...values, owner: e.target.value || "" });
  };
  const handleChangeInfo = (e) => {
    setValues({ ...values, info: e.target.value || "" });
  };

  const hanleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: values.name,
      owner: values.owner,
      info: values.info
    });
    setValues("");
  };
  return (
    <div>
      <form className="formContainer" onSubmit={hanleSubmit}>
        <input
          className="inputContainer"
          type="text"
          name="name"
          placeholder="Enter Name ..."
          value={values.name || ""}
          onChange={handleChangeName}
          required
        />
        <input
          className="inputContainer"
          type="text"
          name="owner"
          placeholder="Enter Owner ..."
          value={values.owner || ""}
          onChange={handleChangeOwner}
          required
        />
        <input
          className="inputContainer"
          type="text"
          name="info"
          placeholder="Enter Description ..."
          value={values.info || ""}
          onChange={handleChangeInfo}
          required
        />
        <button className="button" type="submit">
          ADD APPOINTMENT
        </button>
      </form>
    </div>
  );
};
