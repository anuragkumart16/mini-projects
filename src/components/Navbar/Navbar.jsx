import { Link,useNavigate } from "react-router-dom"

import './navbar.css'
export default function Navbar(){
    const navigate = useNavigate()
    function navi(){
        navigate('/')
    }
    return(
        
        <>
        <header>
            <nav>
                <div className="nav-logo-holder" onClick={navi}>
                    <p className="pacifico">MiniProjects</p>
                    <p className="calm " style={{alignSelf: 'flex-end', marginTop:'10px',marginLeft:'5px'}}>by Anurag</p>
                </div>
                <ul className="nav-side-menu">
                    <li><Link to={'/'} className="un-underline">Home</Link></li>
                    <li><Link to={'/qr'} className="un-underline">QR Generator</Link></li>
                    <li><Link to={'/book'} className="un-underline">Book Recommendation</Link></li>
                    <li><Link to={'/notes'} className="un-underline">Notes</Link></li>
                    <li><Link to='/auth' className="un-underline">Sign In</Link></li>
                    <li><a href="https://portfolio-mu-seven-48.vercel.app/" className="un-underline">Portfolio</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}