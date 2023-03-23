import {Route, Routes} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Error404 from './pages/Error404'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    )

}

export default Router