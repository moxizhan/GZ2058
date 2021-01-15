import "./styles.css";

import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";


// export default function AnimationExample() {
//   return (
//     <Router>
//       <Switch>

//         <Route path="*">
//           <AnimationApp />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

export default function AnimationApp() {
  let location = useLocation();
  console.log(location);

  return (
    <div>
      <ul>
        <Link to="/xxx">Red</Link>
        <Link to="/yyy">Green</Link>
      </ul>

      <div>

        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={3000}>
            <Switch location={location}>
              <Route path="/xxx">
                <XXX />
              </Route>
              <Route path="/yyy">
                <YYY />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

function XXX(params) {
  return <div>XXX</div>;
}
function YYY(params) {
  return <div>YYY</div>;
}
