import React, { useState, useEffect } from "react";

import VideoCard from 'components/VideoCard'

import { useParams } from "react-router-dom";

export default function Play() {
  let params = useParams();
  console.log(params);

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(
      "http://api.kele8.cn/agent/https://app.vmovier.com/apiv3/post/view?postid=" +
        params.id
    )
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setPost(myJson.data);
      });
  }, [params.id]);

  return post ? (
    <div className="play">
      play {params.id}
      <video controls src={post.content_video[0].progressive[3].url}></video>
      <h3>{post.title}</h3>
      <p>{post.intro}</p>

      {post.relate_video.map(relate=> {
          return (
          <div>
              <h3>{relate.name}</h3>
          <ul>
              {
                  relate.list.map(item=> <VideoCard item={item} />)
              }
          </ul>
          </div>)
      })}
    </div>
  ) : null;
}
