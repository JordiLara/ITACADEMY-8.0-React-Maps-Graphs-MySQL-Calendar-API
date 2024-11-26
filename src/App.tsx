import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';


function App() {
    return (
        <Router>
            <div className="min-h-screen bg-stone-50">
                <Navbar />
                <main className="container mx-auto px-4 py-8">
                    <Routes>
                       <Route path="/" element={<Home />} />
                    </Routes>
                </main>
            </div>
        
        </Router>
    );
}

export default App;