import Home from "./Pages/Home";
import News from "./Pages/News";
import QR from "./Pages/QR";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="news" element= {<News/>}/>
        <Route path='qr' element = {<QR/>}/>
      </Routes>
    </Router>
  )
}

export default App;
