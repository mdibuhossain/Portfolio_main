import './App.css';
import NavDrawer from './components/NavDrawer';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Hero from './Pages/Hero';
import Portfolio from './Pages/Portfolio';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavDrawer />}>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
