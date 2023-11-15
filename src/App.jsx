
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/examples/navbar";
import Home from "./pages/home";
import Footer from "./components/examples/footer";
import "./App.css";
import { ThemeProvider } from "./context/theme-context";
function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="min-h-[92vh]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;


