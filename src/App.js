import MainNav from './components/MainNav';
import Footer from "./components/Footer";
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import CalendarDatePage from './components/CalendarDatePage';
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
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/calendar/:date" element={<CalendarDatePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
