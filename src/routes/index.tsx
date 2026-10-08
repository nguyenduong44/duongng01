import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout.tsx";
import Home from "../pages/Home.tsx";
import Projects from "../pages/Projects.tsx";
import ProjectDetail from "../pages/ProjectDetail.tsx";
import Blog from "../pages/Blog.tsx";
import BlogDetail from "../pages/BlogDetail.tsx";
import Shop from "../pages/Shop.tsx";
import ProductDetail from "../pages/ProductDetail.tsx";
import About from "../pages/About.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "projects/:slug", element: <ProjectDetail /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogDetail /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:slug", element: <ProductDetail /> },
      { path: "about", element: <About /> },
    ],
  },
]);
