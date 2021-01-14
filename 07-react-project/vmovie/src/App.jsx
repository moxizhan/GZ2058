import "./App.scss";
import "./Test.scss";
import { useState } from "react";

import { NavBar, Icon, Tabs } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'

import { Switch, Route, Link, useLocation } from "react-router-dom";

import Find from "views/Find.jsx";
import Cate from "views/Cate.jsx";
import Me from "views/Me.jsx";
import Play from "views/Play.jsx";
import Test from "views/Test.jsx";

import getDayCover from "api/getDayCover";

// function RouteWithSubRoutes(route) {
//   return (
//     <Route
//       path={route.path}
//       render={(props) => (
//         // pass the sub-routes down to keep nesting
//         <route.component {...props} routes={route.routes} />
//       )}
//     />
//   );
// }

const tabs = [
  { title: <Link to="/">发现</Link> },
  { title: <Link to="/cate">分类</Link> },
  { title: <Link to="/me">我的</Link> },
];

function App() {
  const [dayCover, setDayCover] = useState(null);
  const [showDayCover, setShowDayCover] = useState(true);
  let location = useLocation();
  // console.log(location);
  function currentTabIndex(pathname) {
    switch (pathname) {
      case "/me":
        return 2;
      case "/cate":
        return 1;
      case "/":
        return 0;
      default:
        return false;
    }
  }

  function onLeftClick() {
    // 抽离api请求
    // console.log(getDayCover());

    if (!dayCover) {
      getDayCover().then((res) => {
        // console.log(res);
        setDayCover(res.data);
      });
    }
    setShowDayCover(true);
  }
  return (
    <div className="App">
      {currentTabIndex(location.pathname) !== false && (
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={onLeftClick}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: "16px" }} />,
          ]}
        >
          <Tabs
            tabs={tabs}
            initialPage={currentTabIndex(location.pathname)}
            onChange={(tab, index) => {
              console.log("onChange", index, tab);
            }}
          ></Tabs>
        </NavBar>
      )}

      <Switch>
        <Route path="/cate">
          <Cate />
        </Route>
        <Route path="/me">
          <Me />
        </Route>

        <Route path="/play/:id">
          <Play />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/">
          <Find />
        </Route>
      </Switch>

      {dayCover && showDayCover && (
        <div
          className="daycover"
          style={{ background: 'url("' + dayCover.image_blurred + '")' }}
          onClick={() => setShowDayCover(false)}
        >
          <div className="main">
            <img src={dayCover.image} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
