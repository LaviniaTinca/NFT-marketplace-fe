/* eslint-disable react/prop-types */

import "./typeForm.scss";

const TypeForm = ({ type, placeholder, icon }) => {
  return (
    <>
      <div className="type">
        <img src={icon} alt="user icon" />
        <input type={type} placeholder={placeholder} required />
      </div>
    </>
  );
};

export default TypeForm;
