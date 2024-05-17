import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { Layout } from "./commons/Layout";
import { RegisterPage } from "./pages/register";
import { TablePage } from "./pages/products";

export const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/products" element={<TablePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Layout>
  );
};
