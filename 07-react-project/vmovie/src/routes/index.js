import Find from "../views/Find.jsx";
import Cate from "../views/Cate.jsx";
import Me from "../views/Me.jsx";

const routes = [
  {
    path: "/",
    component: Find,
  },
  {
    path: "/cate",
    component: Cate,
  },
  {
    path: "/me",
    component: Me,
  },
];

export default routes;
