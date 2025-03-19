
import './css/home.css'
import Navbar from "../components/Navbar/Navbar"


function Home(){
    const array = [
        {
            source: 'card-img/qr.png',
            title : 'QR Generator',
            desc : 'Creates QR code using given text'
        },
        {
            source: 'card-img/notes.png',
            title : 'Note Taking App',
            desc : 'Lets you save your thoughts in organised way'
        },
        {
            source: 'card-img/book.png',
            title : 'Random Book Suggestions',
            desc : 'Give Random Book Reading Suggestions'
        },
        {
            source: 'card-img/signin.png',
            title : 'Typical Authentication Page',
            desc : 'Are you a member? Login else signup!'
        }
    ]
    return (
        <>
        <Navbar/>
        <div className="page-wrrapper">
            {
                array.map((element,index)=>{
                    return(
                        <div className="home-card" key={index}>
                <img src={element.source} alt="" className="home-card-image" />
                <h3 className="home-card-heading
                ">{element.title}</h3>
                <p className="home-card-desc">
                    {element.desc}
                </p>
            </div>
                    )
                })
            }
        </div>
        </>
        
    )
}
export default Home