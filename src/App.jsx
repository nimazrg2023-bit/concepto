
import Layout from "./components/partial";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import SearchPage from "./Pages/search";
import HomePage from "./Pages/search1";
import Home from "./Pages/Home/inedex";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/search" replace />} />
        <Route path="/search1" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Layout>
  )
}