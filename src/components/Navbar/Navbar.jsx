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
                    <li><Link to={'/qr'} className="un-underline">QR Generator</Link></li>
                    <li><Link to={'/book'} className="un-underline">Book Recommendation</Link></li>
                    <li><a href="https://portfolio-mu-seven-48.vercel.app/" className="un-underline">Portfolio</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}