import React from "react";
import styled from "styled-components";
import { Flex } from "antd-mobile";
import { FilterOption } from "./FilterOption";
import { DARK_GRAY } from "../../constants/colors";

export const FilterBox = () => {
  const labels = ["Location", "Provider", "Type", "Looking for"];
  const titleStyles = { color: DARK_GRAY, fontWeight: "normal", margin: "0" };
  return (
    <div className="filter-box">
      <h6 style={titleStyles}>Filter By</h6>
      <Flex wrap="wrap">
        {labels.map((label, idx) => (
          <FilterOption key={idx} label={label} />
        ))}
      </Flex>
    </div>
  );
};
