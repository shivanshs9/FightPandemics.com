import React from "react";
import { Icon, Tag } from "antd-mobile";
import { SELAGO, ROYAL_BLUE } from "../../constants/colors";

export const FilterOption = ({ label }) => {
  const optionStyles = {
    backgroundColor: SELAGO,
    color: ROYAL_BLUE,
    fontSize: "10px",
    fontWeight: "bold",
    height: "100%",
    padding: "0 10px",
    marginTop: "7px",
    marginRight: "7px",
  };

  const textStyles = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <Tag style={optionStyles}>
      <div style={textStyles}>
        <span style={{ marginRight: "3px" }}>{label}</span>
        <Icon type="down" size="xxs" />
      </div>
    </Tag>
  );
};
