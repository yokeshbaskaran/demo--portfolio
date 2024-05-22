import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { navList } from "../data/data.js";
import ProjectsItem from "./pages/ProjectsItem.jsx";

const App = () => {
  return (
    <>
      <section className="px-5 py-3 md:p-5 sm:w-full md:w-[80%] mx-auto">
        <Router>
          <Header />
          <Contents />
          <Footer />
        </Router>
      </section>
    </>
  );
};

export default App;

export const Header = () => {
  return (
    <div>
      <header className="h-[5vh]">
        <nav className="w-full flex justify-between items-center">
          <h2>
            <Link to="/">DemoApp</Link>
          </h2>
          <ul className="hidden w-1/4 sm:flex justify-between">
            {navList &&
              navList.map((nav, index) => (
                <li key={index} className="hover:text-[#0ab1ff]">
                  <Link to={nav.navLink}>{nav.navName}</Link>
                </li>
              ))}
          </ul>
          <button className="block sm:hidden">=</button>
        </nav>
      </header>
    </div>
  );
};

export const Contents = () => {
  return (
    <div className="min-h-[85vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectsItem />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<p>ERROR: 404 | Page Not found!</p>} />
      </Routes>
    </div>
  );
};

export const Footer = () => {
  return <div className="h-[5vh]">No CopyRights reserved!</div>;
};
