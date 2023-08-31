import './styles/main.css';
import { Navbar } from './components/navBar/Navbar';
import { Footer } from './components/footer/Footer';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Contacts } from './pages/Contacts';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/projects'} element={<Projects />} />
          <Route path={'/contacts'} element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
