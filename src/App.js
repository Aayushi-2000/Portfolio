import logo from "./logo.svg";
import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "./components/common/route";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(routes));

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
