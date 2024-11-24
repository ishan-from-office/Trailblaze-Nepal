import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../src/Components/header/Header'

import Footer from './Components/Footer'
import HomePage from './pages/HomePage'
import DetailSlug from './pages/DetailSlug'
import BlogDetailSlug from './pages/BlogDetailSlug'
import TripListPage from './pages/TripListPage'
import EverestTrek from './Components/everestTrek/EverestTrek'
import TrekBooking from './Components/everestTrek/TrekBooking'
import About from './Components/About'
import Contact from './Components/Conatct'
import SearchResult from './Components/SearchResult'
import Blog from './Components/Blog'
import { HelmetProvider } from 'react-helmet-async'

import axios from 'axios'
window.baseURL = 'https://destination.megabytetech.com/'
window.baseURL = 'https://destination.megabytetech.com/'
axios.defaults.baseURL = 'https://destination.megabytetech.com/'


function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };
  const helmetContext = {};
  return (
    <>
      <BrowserRouter>
        <HelmetProvider context={helmetContext}>
          <ScrollToTop />
          <Header />
          <Routes>

            <Route path="/" element={<HomePage />} />

            <Route path="/:slug" element={<TripListPage />} />
            <Route path="/tour/:id" element={<EverestTrek />} />
            <Route path="/tour/:id/booking" element={<TrekBooking />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/page/:slug" element={<DetailSlug />} />
            <Route path="/blog/:slug" element={<BlogDetailSlug />} />
          </Routes>
          <Footer />
        </HelmetProvider>
      </BrowserRouter>
    </>
  )
}

export default App
