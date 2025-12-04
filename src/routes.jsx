import { createBrowserRouter, Outlet } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

export const pages = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about",
    name: "About",
    element: <About />,
  },
  {
    path: "/contact",
    name: "Contact",
    element: <Contact />,
  },
];
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      ...pages.map(page => ({
        path: page.path,
        element: page.element,
      })),
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;