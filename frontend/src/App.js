// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AddShoePage from "./pages/AddShoePage/AddShoePage";
import ShoePage from "./pages/ShoePages/ShoePages";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addshoe" element={<PrivateRoute><AddShoePage /></PrivateRoute>} />
        <Route path="/" element={<ShoePage />} />
        <Route path="/detail/:shoeId" element={<ShoeDetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
