import About from "./componentsPractice/Frontend/about";
import AddProductComponent from "./componentsPractice/Frontend/addProductComponent";
import EditProductComponent from "./componentsPractice/Frontend/editProductComponent";
import Home from "./componentsPractice/Frontend/home";
import LoginComponent from "./componentsPractice/Frontend/loginComponent";
import NavbarComponent from "./componentsPractice/Frontend/navbarComponent";
import ProductView from "./componentsPractice/Frontend/productView";
import RegisterComponent from "./componentsPractice/Frontend/registerComponent";
import SearchResultsPage from "./componentsPractice/Frontend/searchResultComponent";
import AnotherParentComponent from "./componentsPractice/anotherParentComponent";
import ParentComponent from "./componentsPractice/parentComponent";
import { AdminRoute } from "./config/protectedRoutes";
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
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/addProduct" element={
          <AdminRoute>
        <AddProductComponent />
        </AdminRoute>
        
        } />
        <Route path="/viewProduct" element={<ProductView />} />
        <Route path="/editProduct/:id" element={<EditProductComponent />} />
        <Route path="/search-product/:search" element={<SearchResultsPage />} />

        {/* <Route path="/" element={<ParentComponent />} />
        <Route path="/parent" element={<AnotherParentComponent />} /> */}
      </Routes>

      {/* <FooterComponent /> */}
    </Router>
  );
}

export default App;
