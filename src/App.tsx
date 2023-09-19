import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import About from "./pages/About";
import Home from "./pages/Home";
import Vans from "./pages/Vans";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/vans" element={<Vans />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
