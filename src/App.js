import './App.css';
import NavDrawer from './components/NavDrawer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Blogs from './Pages/Blogs';
import ProjectDetails from './components/ProjectDetails';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path='/' element={<NavDrawer />}>
            {/* <Route path='/' element={<Hero />} />
            <Route path='/#top' element={<Hero />} />
            <Route path='/#about' element={<About />} />
            <Route path='/#portfolio' element={<Portfolio />} /> */}
            {/* <Route path='/#contact' element={<Contact />} />
            <Route path='/#blogs' element={<Blogs />} /> */}
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='/:id' element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
