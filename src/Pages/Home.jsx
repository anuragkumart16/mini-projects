import { useNavigate } from "react-router-dom";
import './css/home.css'
import Navbar from "../components/Navbar/Navbar"


function Home(){
    const navigate = useNavigate()
    const array = [
        {
            source: 'card-img/qr.png',
            title : 'QR Generator',
            desc : 'Creates QR code using given text',
            page :'/qr'
        },
        {
            source: 'card-img/notes.png',
            title : 'Note Taking App',
            desc : 'Lets you save your thoughts in organised way',
            page :'/notes'

        },
        {
            source: 'card-img/book.png',
            title : 'Random Book Suggestions',
            desc : 'Give Random Book Reading Suggestions',
            page :'/book'
        },
        {
            source: 'card-img/signin.png',
            title : 'Typical Authentication Page',
            desc : 'Are you a member? Login else signup!',
            page :'/auth'
        },
        {
            source: 'card-img/expense.png',
            title : 'Expense Tracker',
            desc : 'Track your daily expenses',
            page :'/expense'
        }
    ]
    return (
        <>
        <Navbar/>
        <div className="page-wrrapper">
            {
                array.map((element,index)=>{
                    return(
                        <div className="home-card" key={index} onClick={function () {
                            setTimeout(()=>{
                                navigate(element['page']);
                            },100)
                        }}>
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