import About from "./componentsPractice/Frontend/about";
import Home from "./componentsPractice/Frontend/home";
import NavbarComponent from "./componentsPractice/Frontend/navbarComponent";
import RegisterComponent from "./componentsPractice/Frontend/registerComponent";
import AnotherParentComponent from "./componentsPractice/anotherParentComponent";
import ParentComponent from "./componentsPractice/parentComponent";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<RegisterComponent />} />

        {/* <Route path="/" element={<ParentComponent />} />
        <Route path="/parent" element={<AnotherParentComponent />} /> */}
      </Routes>

      {/* <FooterComponent /> */}
    </Router>
  );
}

export default App;
