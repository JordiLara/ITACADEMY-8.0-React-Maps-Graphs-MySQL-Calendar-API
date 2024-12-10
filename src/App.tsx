import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RoutesList from "./components/HikingRoutes/index";
import Map from "./components/Map";
import Calendar from "./components/Calendar";
import { RoutesProvider } from "./context/RoutesContext";

const App: React.FC = () => {
  return (
    <RoutesProvider>
      <Router>
        <div className="min-h-screen bg-stone-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/HikingRoutes" element={<RoutesList />} />
              <Route path="/Map" element={<Map />} />
              <Route path="/Calendar" element={<Calendar />} />
            </Routes>
          </main>
        </div>
      </Router>
    </RoutesProvider>
  );
};

export default App;
