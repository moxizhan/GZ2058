export default function getDayCover() {
    return fetch("http://api.kele8.cn/agent/https://app.vmovier.com/apiv3/DayCover/getDayCover")
    .then(function (response) {
      return response.json();
    })
}
