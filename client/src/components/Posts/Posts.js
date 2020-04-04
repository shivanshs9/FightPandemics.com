import React from "react";

import { Post } from "./Post";

export const Posts = () => {
  const fakePosts = [
    {
      name: "Lily Luke",
      city: "Manchester",
      country: "UK",
      needs: ["Medical Supplies"],
      postTitle: "Disinfecting clorax wipes needed",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio qui amet quis ut ratione, cumque quibusdam consectetur consequuntur sint voluptas deleniti temporibus molestias a dolor. Fuga asperiores possimus quis quae.",
    },
    {
      name: "Lily Luke",
      city: "Manchester",
      country: "UK",
      needs: ["Medical Supplies"],
      postTitle: "Disinfecting clorax wipes needed",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio qui amet quis ut ratione, cumque quibusdam consectetur consequuntur sint voluptas deleniti temporibus molestias a dolor. Fuga asperiores possimus quis quae.",
    },
  ];

  return (
    <div className="posts">
      {fakePosts.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
    </div>
  );
};
