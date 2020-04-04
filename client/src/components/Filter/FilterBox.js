import React from "react";
import { Flex } from "antd-mobile";
import { FilterOption } from "./FilterOption";

export const FilterBox = () => {
  const labels = ["Location", "Provider", "Type", "Looking for"];
  return (
    <Flex wrap="wrap">
      {labels.map((label) => (
        <FilterOption label={label} />
      ))}
    </Flex>
  );
};
