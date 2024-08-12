import "./App.css"
import ShowCards from "./Cards/ShowCards";
import Navbar from "./Navbar/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowCards />,
  },
  {
    path: "/admin",
    element: <div>This is admin</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
