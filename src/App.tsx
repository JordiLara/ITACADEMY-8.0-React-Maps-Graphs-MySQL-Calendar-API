import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { RoutesProvider } from "./context/RoutesContext";
import { EventsProvider } from "./context/EventContext";

const App: React.FC = () => {
  return (
    <RoutesProvider>
      <EventsProvider>
        <Router>
          <div className="min-h-screen bg-stone-50">
            <Navbar />
            <main className="container mx-auto px-4 py-8">             
                <AppRoutes />
            </main>
          </div>
        </Router>
      </EventsProvider>
    </RoutesProvider>
  );
};

export default App;
