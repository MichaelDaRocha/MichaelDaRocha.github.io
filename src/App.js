import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Resume from './components/resume';
import Footer from './components/footer';

export default function App() {
    return (
        <div className="app">
            <Header />
            <main className="app-content">
                <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}