import "./Leftbarstyle.css";
import logo from "../../assets/landing/logo.svg"

export default function Leftbar() {
  return (
    <div>
        <img src={logo} alt="logo" className="logo"></img>
        <div className="buttons">
            <div></div>
        </div>
    </div>
  )
}
