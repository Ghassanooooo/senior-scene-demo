
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/features/navbar";
import Home from "./pages/home";

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
    </ThemeProvider>
  );
}

export default App;


