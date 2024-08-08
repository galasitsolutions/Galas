import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Blog from "../components/pages/Blog";
import Career from "../components/pages/Career";
import Event from "../components/pages/Event";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
