import AnotherParentComponent from "./componentsPractice/anotherParentComponent";
import ParentComponent from "./componentsPractice/parentComponent";
import "./index.css";
import {  BrowserRouter as Router , Routes,Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <NavbarComponent /> */}

      <Routes>
        <Route path="/" element={<ParentComponent />} />
        {/* <Route path="/parent" element={<AnotherParentComponent />} /> */}
      </Routes>

      {/* <FooterComponent /> */}
    </Router>



  );
}

export default App;
 