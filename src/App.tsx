import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import VansDetail from "./pages/VanDetail.js";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import "./server.js";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VansDetail />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
