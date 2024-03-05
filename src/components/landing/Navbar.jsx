import { Menuitems } from "./Menuitems";
import logo from "../../assets/landing/logo.svg";

import "./Navbarstyle.css"

/*flex bg-[#E8EFF6] items-center justify-between py-0 pr-40  shadow-lg 
      min-h-20 */
export default function Navbar  ()  {
  return (
    <nav className="navbaritems">
      <img src={logo} alt="logo" className="logo"></img>
      

      <ul className="nav-menu">
        {Menuitems.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


