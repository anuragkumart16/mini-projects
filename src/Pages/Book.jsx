import { useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import './css/book.css'
import Loading from "../components/Loading/Loading"



function Book() {
  const url = 'https://gutendex.com/books/'
  const [data,setdata] = useState(null)
  const [triggered,setTriggered] = useState(false)

  async function fetchBookData(){
    setTriggered(true)
    const response = await fetch(url)
    const item = await response.json()
    console.log(item)
    const length = item.results.length
    const index = Math.floor(Math.random() * length + 1)
    setdata(item.results[index])
    console.log(data)
  }
  return (
    <>
    <Navbar/>
    <button onClick={fetchBookData} className="qr-button">Fetch</button>
    <div className="book-holder">
    {
      triggered && (data ? <p>{data.title}</p> : <Loading/>)
    }
    </div>  
    </>
    
  )
}

export default Book
