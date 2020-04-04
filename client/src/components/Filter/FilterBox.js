import React from "react";
import { Flex } from "antd-mobile";
import styled from "styled-components";
import { FilterOption } from "./FilterOption";
import { DARK_GRAY } from "../../constants/colors";

export const FilterBox = () => {
  const labels = ["Location", "Provider", "Type", "Looking for"];
  return (
    <div className="filter-box">
      <h6 style={{ color: DARK_GRAY, fontWeight: "normal", margin: "0" }}>
        Filter By
      </h6>
      <Flex wrap="wrap">
        {labels.map((label, idx) => (
          <FilterOption key={idx} label={label} />
        ))}
      </Flex>
    </div>
  );
};
