import React from "react";
import "./CustomTag.css";

const CustomTags = ({ text, value }: any) => {
  return (
    <div className="inte-custom__tag">
      <span className="inte-custom__tagText">{text}</span>
      <span className="inte-custom__tagValue">{value}</span>
    </div>
  );
};
export default CustomTags;
