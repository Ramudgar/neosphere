import AnotherParentComponent from "./componentsPractice/anotherParentComponent";
import ParentComponent from "./componentsPractice/parentComponent";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <NavbarComponent onSearch={handleSearch} /> */}

      <Routes>
        <Route path="/" element={<ParentComponent />} />
        <Route path="/parent" element={<AnotherParentComponent />} />
      </Routes>

      {/* <FooterComponent /> */}
    </Router>
  );
}

export default App;
