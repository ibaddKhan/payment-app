import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/home/home'
import About from '../../screens/about/about'
import Contact from '../../screens/contact/contact'
import Faq from '../../screens/faq/faq'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={< Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/frequentlyAsked' element={<Faq />} />
                </Routes>
                <Footer />

            </BrowserRouter>
        </>
    )
}
export default Routers