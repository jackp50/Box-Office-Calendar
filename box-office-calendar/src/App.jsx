import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/Home"
import About from "./pages/About"
import Trending from "./pages/Trending"


function App() {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/about" element = {<About />}/>
        {/* <Route path = "/trending" element = {<Trending />}/> */}
      </Routes>
    </BrowserRouter>

  )
  

}

export default App
