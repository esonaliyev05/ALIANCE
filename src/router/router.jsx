import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import ContractProduct from "../pages/ContractProduct";
import ProductAutohim from "../pages/ProductAutohim";
import OwnProduct from "../pages/OwnProduct";
import ProductAgTech from "../pages/ProductAgTech";
import Blog from "../pages/Blog";
import BlogMore from "../components/BlogMore";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },

      {
        path: "contract-product",
        element: <ContractProduct />,
      },
      {
        path: "contract-product/autohim",
        element: <ProductAutohim />,
      },

      {
        path: "own-product",
        element: <OwnProduct />,
      },
      {
        path: "own-product/ag-tech",
        element: <ProductAgTech />,
      },

      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:id", // Dinamik ID orqali alohida blog sahifas
        element: <BlogMore />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "politics",
        element: <PrivacyPolicy />,
      },

    {
      path: "*", // Barcha mos kelmagan yo'llar uchun
      element: <NotFound />, 

    }


    ],
  },
]);

export default router;