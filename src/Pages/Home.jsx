import { Link } from "react-router-dom"
import './css/home.css'
import Navbar from "../components/Navbar/Navbar"
function Home(){
    return (
        // <div className="homeHolder">
        //     <Link to='/qr'>Qr Generator</Link>
        //     <Link to='/book'>Book Recommendation</Link>
        //     <Link to='/notes'>Notes</Link>
        // </div>
        <Navbar/>
    )
}
export default Home