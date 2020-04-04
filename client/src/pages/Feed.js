import React from "react";
import styled from "styled-components";
import { Flex } from "antd-mobile";

import { FilterBox } from "../components/Filter/FilterBox";

const FeedContainer = styled.div`
  width: 100%;
`;

const Feed = () => {
  return (
    <FeedContainer>
      <FilterBox />
    </FeedContainer>
  );
};

export default Feed;
