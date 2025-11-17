import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Pages/Layout';
import Homepages from './Pages/Homepages';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Ourservices from './Pages/Ourservices';
import Aboutus from './Pages/Aboutus';
import Tesimonials from './Pages/Tesimonials';
import Aos from 'aos';
import Details from './Component/Details';


function App() {
  Aos.init({
    once: true
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Tesimonials />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/ourservices" element={<Ourservices />} />
          <Route path="/blogdetails" element={<Details/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;
