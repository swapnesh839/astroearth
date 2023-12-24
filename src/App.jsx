import Navbar from "./component/Navbar"
import Home from "./component/Home"
import About from "./component/About"
import Services from "./component/Services"
import Tutorial from "./component/Tutorial"
import Tools from "./component/Tools"
import Blog from "./component/Blog"
import ContactUs from "./component/ContactUs"
import Footer from "./component/Footer"
import { BrowserRouter,Route,Routes } from "react-router-dom"
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Services" element={<Services/>}></Route>
      <Route path="/Tutorial" element={<Tutorial/>}></Route>
      <Route path="/Tools" element={<Tools/>}></Route>
      <Route path="/Blog" element={<Blog/>}></Route>
      <Route path="/ContactUs" element={<ContactUs/>}></Route>
      <Route path="/*" element={"not Found"}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
