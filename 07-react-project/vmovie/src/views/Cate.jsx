import React, { useState, useEffect } from "react";

export default function Cate() {
  const [cates, setCates] = useState([]);
  useEffect(() => {
    const catesLocal = JSON.parse(window.localStorage.getItem("cates"));

    if (catesLocal && catesLocal.expire > Date.now()) {
      setCates(catesLocal.data);
    } else {
      fetch(
        "http://api.kele8.cn/agent/https://app.vmovier.com/apiv3/cate/getList"
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          setCates(myJson.data);
          window.localStorage.setItem(
            "cates",
            JSON.stringify({
              expire: Date.now() + 1 * 60 * 60 * 1000,
              data: myJson.data,
            })
          );
        });
    }
  }, []);

  return (
    <ul className="cate" style={{ display: "flex", "flexWrap": "wrap" }}>
      {cates.map((cate, index) => {
        return (
          <li key={index} style={{ "flexBasis": "50%" }}>
            <img src={cate.icon} alt="" />
          </li>
        );
      })}
    </ul>
  );
}
