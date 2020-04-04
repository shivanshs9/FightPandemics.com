import React from "react";
import styled from "styled-components";

import { FilterBox } from "../components/Filter/FilterBox";
import { Posts } from "../components/Posts/Posts";

const FeedContainer = styled.div`
  width: 100%;
  padding: 20px 0;
`;

const Feed = () => {
  return (
    <FeedContainer>
      <FilterBox />
      <Posts />
    </FeedContainer>
  );
};

export default Feed;
