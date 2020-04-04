import React from "react";
import styled from "styled-components";
import { Card, WingBlank, WhiteSpace } from "antd-mobile";

export const Post = ({ post }) => {
  const { name, city, country, needs, postTitle, content } = post;

  const headerStyles = {
    fontSize: "12px",
  };

  const postTitleStyles = {
    fontWeight: "bold",
  };

  const bodyStyles = {
    padding: "5px 15px",
  };

  const contentStyles = {
    color: "black",
    fontSize: "11px",
  };

  return (
    <div class="post-box">
      <WhiteSpace size="lg" />
      <Card>
        <Card.Header
          title={name}
          style={headerStyles}
          thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
        />
        <Card.Header style={postTitleStyles} title={postTitle} />
        <Card.Body style={bodyStyles}>
          <div style={contentStyles}>{content}</div>
        </Card.Body>
      </Card>
      <WhiteSpace size="lg" />
    </div>
  );
};
