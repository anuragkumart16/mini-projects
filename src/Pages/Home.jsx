import { Link } from "react-router-dom"
function Home(){
    return (
        <div>
            <Link to='/qr'>Qr Generator</Link>
            <Link to='/book'>Book Recommendation</Link>
        </div>
    )
}
export default Home