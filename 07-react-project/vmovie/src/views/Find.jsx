import React, { useState, useEffect } from "react";
import FindBanner from "components/FindBanner";
import FindSection from "components/FindSection";

export default function Find() {
  const [index, setIndex] = useState(null);

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
    <div className="find">
      <FindBanner items={index.banner.list} />
      <FindSection data={index.today} />
      <FindSection data={index.hot} />
      <FindSection data={index.album} />
      <FindSection data={index.posts} />
    </div>
  ) : null;
}
