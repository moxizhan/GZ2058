import Find from "../components/Find.jsx";
import Cate from "../components/Cate.jsx";
import Me from "../components/Me.jsx";

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
