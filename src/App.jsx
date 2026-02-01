import "./App.css";
import { Blogs } from "./components/blog/blogs";
import { BlogDetails } from "./components/blogDetails/blogDetails";
import { Home } from "./components/home/home";
import { Layout } from "./components/layout/layout";
import { NotFound } from "./components/notFound/notFound";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const createdBrowserRouter = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogDetails", element: <BlogDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={createdBrowserRouter} />;
}

export default App;
