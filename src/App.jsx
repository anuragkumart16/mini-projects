import Home from "./Pages/Home";
import Book from "./Pages/Book";
import QR from "./Pages/QR";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='qr' element = {<QR/>}/>
        <Route path='book' element = {<Book/>}/>
      </Routes>
    </Router>
  )
}

export default App;
