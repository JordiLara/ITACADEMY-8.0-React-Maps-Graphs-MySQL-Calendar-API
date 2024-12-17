import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import RoutesList from "../components/HikingRoutes/RoutesList";
import Map from "../components/Map";
import Calendar from "../components/Calendar";
import RouteCharts from "../components/Charts";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/HikingRoutes" element={<RoutesList />} />
      <Route path="/Map" element={<Map />} />
      <Route path="/Calendar" element={<Calendar />} />
      <Route path="/Charts" element={<RouteCharts />} />
    </Routes>
  );
};

export default AppRoutes;
