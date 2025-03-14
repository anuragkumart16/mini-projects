import { useState ,useRef} from "react";
import Heading from "../components/Heading/Heading";
import Navbar from "../components/Navbar/Navbar";
import "./css/qr.css";
import { QRCodeCanvas } from "qrcode.react";
export default function QR() {
    const [text,setText] = useState('')
    const [showQR,setShowQR] = useState(false)
    const qrRef = useRef(null)
    const downloadQR = () => {
        const canvas = qrRef.current.querySelector("canvas");
        if (canvas) {
          const url = canvas.toDataURL("image/png"); // Convert to image URL
          const link = document.createElement("a");
          link.href = url;
          link.download = "qrcode.png"; // File name
          link.click();
        }
      };
  return (
    <>
      <Navbar />
      <Heading headingName={"QR Generator"} />

      <div className="qr-mobile-holder"
        
      >
        <textarea
          name=""
          id="myTextArea"
          style={{
            color: "#fdfbe3",
            fontSize: "1rem",
            height: "15vh",
            width: "20vw",
            padding: "1rem",
            border: "1px solid #fdfbe3",
            backgroundColor: "#141414",
            borderRadius: "8px",
            marginRight: "2rem",
          }}
          onChange={(e)=>setText(e.target.value)}
          placeholder="Enter your text"
        ></textarea>
        <button className="qr-button" onClick={()=>setShowQR(!showQR)}> Create QR</button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: 'column'
        }}
      >
          {showQR&&<div className="qr-holder" ref={qrRef}><QRCodeCanvas
            value={text}
            size={200} // Size of the QR code (in pixels)
            bgColor="#ffffff" // Background color
            fgColor="#000000" // Foreground (QR code) color
            level="H" // Error correction level ('L', 'M', 'Q', 'H')
            className="qr-canvas"
          /></div>}
          {showQR && (
          <button className="qr-button" onClick={downloadQR} style={{ marginTop: "1rem" }}>
            Download QR
          </button>
        )}
      </div>
    </>
  );
}
