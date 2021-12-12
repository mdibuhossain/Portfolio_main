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
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<NavDrawer />}>
            <Route exact path='/' element={<Hero />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/portfolio' element={<Portfolio />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/:id' element={<ProjectDetails />} />
          </Route>
          <Route exact path='/blogs' element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
