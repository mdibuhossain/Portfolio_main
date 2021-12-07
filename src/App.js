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
import Contact from './Pages/Contact';
import About from './Pages/About';
import Blogs from './Pages/Blogs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavDrawer />}>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
