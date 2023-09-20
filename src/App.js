import ParentComponent from "./componentsPractice/parentComponent";
import "./index.css";
import { Route, BrowserRouter as Router , Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <NavbarComponent onSearch={handleSearch} /> */}

      <Routes>
        <Route path="/parent" element={< ParentComponent/>} />
        
        </Routes>

      {/* <FooterComponent /> */}
    </Router>
  );
}

export default App;
