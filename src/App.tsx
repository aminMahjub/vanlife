import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/vans/Vans";
import VansDetail from "./pages/vans/VanDetail.js";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout.js";
import Dashboard from "./pages/host/Dashboard.js";
import Income from "./pages/host/Income.js";
import Reviews from "./pages/host/Reviews.js";
import ListedVans from "./pages/host/ListedVans.js";
import ListedVansDetail from "./pages/host/ListedVansDetail.js";

import "./server.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route path="host" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
