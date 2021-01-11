import logo from "./logo.svg";
import "./App.css";
import "./Test.scss";

import { Button, WhiteSpace, NavBar, Icon, Tabs } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css"; // or 'antd-mobile/dist/antd-mobile.less'

import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Find from "components/Find.jsx";
import Cate from "components/Cate.jsx";
import Me from "components/Me.jsx";

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

const tabs = [{ title: "发现" }, { title: "频道" }, { title: "我的" }];

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Find</Link>
        <Link to="/cate">Cate</Link>
        <Link to="/me">Me</Link>

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
            initialPage={1}
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

        <header className="App-header">
          <Button type="warning">warning</Button>
          <WhiteSpace />
          <Button type="warning">warning</Button>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;
