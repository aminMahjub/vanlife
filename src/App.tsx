import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Vans, { loader as vansLoader } from "./pages/vans/Vans";
import VansDetail from "./pages/vans/VanDetail.js";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout.js";
import Dashboard from "./pages/host/Dashboard.js";
import Income from "./pages/host/Income.js";
import Reviews from "./pages/host/Reviews.js";
import ListedVans from "./pages/host/ListedVans.js";
import ListedVansDetail from "./pages/host/ListedVansDetail.js";
import Details from "./pages/host/hostVansDetails/Details.js";
import Pricing from "./pages/host/hostVansDetails/Pricing.js";
import Photos from "./pages/host/hostVansDetails/Photos.js";
import NotFound from "./pages/NotFound.js";
import ErrorPromt from "./components/ErrorPromt.js";
import Login from "./pages/auth/Login.js";

import "./server.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<ErrorPromt />} />
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

      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
