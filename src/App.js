import './App.css';
import ResponsiveDrawer from './components/ResponsiveDrawer';
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ResponsiveDrawer />}>
            <Route path='/' element={<Hero />} />
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
