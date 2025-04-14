import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Blog from "../components/pages/Blog";
import Full from "../components/pages/FullBlog";
import Career from "../components/pages/Career";
import Event from "../components/pages/Event";
import Sitemap from "../components/pages/SitemapLayout";
import NotFound from "../components/NotFound";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Event" element={<Event />} />
        <Route exact path="/Blog/:id" element={<Full />} />
        <Route path="/Sitemap" element={<Sitemap />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
