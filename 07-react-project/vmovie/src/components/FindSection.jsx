import React from "react";

import VideoCard from "components/VideoCard";

export default function FindSection({ data }) {
  return (
    <section>
      <h3>{data.selection_title}</h3>
      <ul>
        {data.list.map((item) => (
          <VideoCard key={item.postid} item={item} />
        ))}
      </ul>
    </section>
  );
}
