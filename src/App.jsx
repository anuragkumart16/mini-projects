import Home from "./Pages/Home";
import Book from "./Pages/Book";
import QR from "./Pages/QR";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notes from "./Pages/Notes";
import Auth from "./Pages/Auth";
import Expense from "./Pages/Expense";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/qr' element = {<QR/>}/>
        <Route path='/book' element = {<Book/>}/>
        <Route path='/notes' element = {<Notes/>}/>
        <Route path='/auth' element = {<Auth/>}/>
        <Route path='/expense' element = {<Expense/>}/>
        <Route path='*' element = {<h1>404 Page Not Found!</h1>}/>
      </Routes>
    </Router>
  )
}

export default App;
