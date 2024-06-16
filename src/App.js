import MainNav from './components/MainNav';
import Footer from "./components/Footer";
import OnBoarding from './components/OnBoarding';
import Dashboard from './components/Dashboard';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <MainNav />
        </header>
        <Routes>
          <Route path="/*" element={<OnBoarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
