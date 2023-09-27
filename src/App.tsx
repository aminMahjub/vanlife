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
import Details from "./pages/host/hostVansDetails/Details.js";
import Pricing from "./pages/host/hostVansDetails/Pricing.js";
import Photos from "./pages/host/hostVansDetails/Photos.js";

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
            <Route element={<Dashboard />} index />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<ListedVans />} />
            <Route path="vans/:id" element={<ListedVansDetail />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
