import MainNav from './components/MainNav';
import Footer from "./components/Footer";
import OnBoarding from './components/OnBoarding';
import {BrowserRouter as Router} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <MainNav />
        </header>
        <Routes>
          <Route path="/*" element={<OnBoarding />} />
          {/* <Route path="/shopOnline" element={<ShopOnline />} />
          <Route path="/contact" element={<ShopOnline />} />
          <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/:productID" element={<ProductPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
