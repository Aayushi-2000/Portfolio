import { Route } from "react-router-dom";
import Home from "../../pages/home";
import NavBar from "../navBar";
import Layout from "../layout/layout";
import Main from "../../pages/main";
import About from "../../pages/about";
import Contact from "../../pages/contect";

const ArrayRoute = [
  { path: "/", element: <Main /> },
  { path: "/", element: <NavBar /> },
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
];

export const routes = ArrayRoute?.map((i) => (
  <Route element={<Layout />}>
    <Route key={i?.path} path={i?.path} element={i?.element} />
  </Route>
));
