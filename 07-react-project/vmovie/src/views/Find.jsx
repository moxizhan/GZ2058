import React, { useState, useEffect } from "react";
import FindBanner from "components/FindBanner";
import FindSection from "components/FindSection";

export default function Find() {
  const [index, setIndex] = useState(null);
  const [morePosts, setMorePosts] = useState([]);

  function loadMore() {
    let next_url;
    let lastid;
    // 确定上一页 链接 和 id
    if (morePosts.length) {
      next_url = morePosts[morePosts.length - 1].next_page_url_full;
      lastid = morePosts[morePosts.length - 1].lastid;
    } else {
      next_url = index.posts.next_page_url_full;
      lastid = index.posts.lastid;
    }

    // 查看本地存储
    if (window.localStorage.getItem(lastid)) {
      setMorePosts([
        ...morePosts,
        JSON.parse(window.localStorage.getItem(lastid)),
      ]);
    } else {
      fetch("http://api.kele8.cn/agent/" + next_url)
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          console.log(myJson);
          window.localStorage.setItem(lastid, JSON.stringify(myJson.data));
          setMorePosts([...morePosts, myJson.data]);
        });
    }
  }

  function findScroll(e) {
    console.log(e.target.scrollHeight, e.target.scrollTop, e.target.offsetHeight);
    if (e.target.scrollHeight === e.target.scrollTop +e.target.offsetHeight) {
      console.log('到底了');
      loadMore()
    }
  }

  useEffect(() => {
    //   console.log(banner);
    //   setInterval(() => {
    //     setBanner(Date.now())
    //   }, 1000);

    fetch("http://api.kele8.cn/agent/https://app.vmovier.com/apiv3/index/index")
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setIndex(myJson.data);
      });
  }, []);
  // 第一个参数函数 componentDidMount componentDidUpdate 调用
  // 第二个参数 shouldComponentUpdate

  return index ? (
    <div className="find" onScroll={findScroll} style={{height: 'calc(100vh - 45px)', overflowY: 'scroll'}}>
      <FindBanner items={index.banner.list} />
      <FindSection data={index.today} />
      <FindSection data={index.hot} />
      <FindSection data={index.album} />
      <FindSection data={index.posts} />

      {morePosts.map((posts) => (
        <FindSection key={posts.lastid} data={posts} />
      ))}

      <button onClick={loadMore}>more</button>
    </div>
  ) : null;
}
