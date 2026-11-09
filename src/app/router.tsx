import { createBrowserRouter } from "react-router";
import Layout from "./Layout.tsx";
import HomePage from "../features/home/pages/HomePage.tsx";
import ProjectsPage from "../features/projects/pages/ProjectsPage.tsx";
import ProjectDetailPage from "../features/projects/pages/ProjectDetailPage.tsx";
import BlogPage from "../features/blog/pages/BlogPage.tsx";
import BlogDetailPage from "../features/blog/pages/BlogDetailPage.tsx";
import ShopPage from "../features/shop/pages/ShopPage.tsx";
import ProductDetailPage from "../features/shop/pages/ProductDetailPage.tsx";
import AboutPage from "../features/about/pages/AboutPage.tsx";
import AdminLoginPage from "../features/admin/pages/AdminLoginPage.tsx";
import ArticleListPage from "../features/admin/pages/ArticleListPage.tsx";
import ArticleEditPage from "../features/admin/pages/ArticleEditPage.tsx";
import RequireAdmin from "../features/admin/components/RequireAdmin.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "projects/:slug", element: <ProjectDetailPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "blog/:slug", element: <BlogDetailPage /> },
      { path: "shop", element: <ShopPage /> },
      { path: "shop/:slug", element: <ProductDetailPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "admin/login", element: <AdminLoginPage /> },
      {
        path: "admin",
        element: (
          <RequireAdmin>
            <ArticleListPage />
          </RequireAdmin>
        ),
      },
      {
        path: "admin/articles/:slug",
        element: (
          <RequireAdmin>
            <ArticleEditPage />
          </RequireAdmin>
        ),
      },
    ],
  },
]);
