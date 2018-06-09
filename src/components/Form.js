import React from "react";
import "./Form.css";
import Palette from "./Palette";

const Form = ({
  value,
  textColor,
  onChange,
  onCreate,
  onKeyPress,
  onSelectColor
}) => {
  const style = {
    color: textColor
  };
  return (
    <div className="form">
      <input
        style={style}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <div className="create-button" onClick={onCreate}>
        추가
      </div>
      <Palette onSelectColor={onSelectColor} />
    </div>
  );
};

export default Form;
