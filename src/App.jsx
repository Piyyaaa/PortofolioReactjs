import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail"; // pastikan path-nya sesuai
import Home from "./Home"; // Halaman utama kamu
// import komponen lain jika ada

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        {/* tambahkan route lain jika perlu */}
      </Routes>
    </Router>
  );
}

export default App;
