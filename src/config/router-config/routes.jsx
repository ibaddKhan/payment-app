import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../../screens/home/home'
import About from '../../screens/about/about'
import Contact from '../../screens/contact/contact'

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={< Home />} />
                    <Route path='/products' element={<Contact />} />
                    <Route path='about' element={<About />} />
                </Routes>

            </BrowserRouter>
        </>
    )
}
export default Routers