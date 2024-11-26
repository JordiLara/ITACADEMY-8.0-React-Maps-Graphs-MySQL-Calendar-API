import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
    return (
        <Router>
            <div className="min-h-screen bg-stone-50">
                <Navbar />
                <main className="container mx-auto px-4 py-8">
                    <Routes>
                       
                    </Routes>
                </main>
            </div>
        
        </Router>
    );
}

export default App;