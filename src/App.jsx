import './App.css'
import qrCode from './assets/frame.png'
function App() {

  return (
    <>
    <div className="qr-container">
      <div className="qr">
        <img src={qrCode} className ="qr-img" alt="QR Code"/>
      </div>
      <div className="qr-message">
        <h2>Improve your front-end skills by building projects</h2>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>

    </>
  )
}

export default App
