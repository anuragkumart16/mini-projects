import { Link } from "react-router-dom"
import './navbar.css'
export default function Navbar(){
    function navigate(){
        window.open( 'https://portfolio-mu-seven-48.vercel.app/','__blank')
    }
    return(
        
        <>
        <header>
            <nav>
                <div className="nav-logo-holder" onClick={navigate}>
                    <p className="pacifico">MiniProjects</p>
                    <p className="calm " style={{alignSelf: 'flex-end', marginTop:'10px',marginLeft:'5px'}}>by Anurag</p>
                </div>
                <ul className="nav-side-menu">
                    <li><Link to={'/'} className="un-underline">Home</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}