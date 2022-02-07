import React from "react";
import "./style.css";
/**
 * @author
 * @function SelectBox
 **/

export const SelectBox = (props) => {
  return (
    <div className="selectbox">
      <div className="title">{props.title}</div>
      <select
        value={props.value}
        onChange={props.onChange}
        onMouseUp={props.onChange}
      >
        <option></option>
        {props.list.map((option) => {
          if (props.type === "VehicleSelect") {
            return (
              <option key={option._id} value={option._id}>
                BS:{option.quality} - SG:{option.totalSeat}
              </option>
            );
          } else {
            return (
              <option key={option._id} value={option.name}>
                {option.name}
              </option>
            );
          }
        })}
      </select>
    </div>
  );
};
