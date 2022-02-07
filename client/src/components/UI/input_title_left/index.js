import React from "react";
import PropTypes from "prop-types";
import "./style.css";

/**
 * @author
 * @function InputTitleLeft
 **/

const InputTitleLeft = (props) => {
  return (
    <div>
      <div className="input-title-left">
        <div className="title">{props.title}</div>
        <div className="input">
          <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            onKeyUp={props.onChange}
          />
        </div>
      </div>
    </div>
  );
};

InputTitleLeft.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  //onKeyUp: PropTypes.func,
};

export default InputTitleLeft;
