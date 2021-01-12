import logo from "./logo.svg";
import "./App.css";
import "./Test.scss";

import { Button, WhiteSpace, NavBar, Icon, Tabs } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'

import { Switch, Route, Link, useLocation } from "react-router-dom";

import Find from "views/Find.jsx";
import Cate from "views/Cate.jsx";
import Me from "views/Me.jsx";

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
  let location = useLocation();
  // console.log(location);
  function currentTabIndex(pathname) {
    switch (pathname) {
      case "/me":
        return 2;
      case "/cate":
        return 1;
      default:
        return 0;
    }
  }
  return (
    <div className="App">
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log("onLeftClick")}
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

      <Switch>
        <Route path="/cate">
          <Cate />
        </Route>
        <Route path="/me">
          <Me />
        </Route>
        <Route path="/">
          <Find />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
