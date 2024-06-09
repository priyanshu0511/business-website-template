import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Work from "./components/Work";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/home/Navbar";

function App() {
  return (
    <>
      {/*<Home />*/}
      {/*<About />*/}
      {/*<Work />*/}
      {/*<Team />*/}
      {/*<Blog />*/}
      {/*<Contact />*/}
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
