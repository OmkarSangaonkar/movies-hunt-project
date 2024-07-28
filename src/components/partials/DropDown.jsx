/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";

const DropDown = ({ title, options, func }) => {
  return (
    <div className="select">
      <select onChange={func} name="format" defaultValue="0" id="format">
        <option value="0" disabled>
          {title}
        </option>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
