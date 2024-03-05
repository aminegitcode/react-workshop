import "./Herostyle.css"
import studentland from "../../assets/landing/studentland.svg"


export default function Hero () {
  return (
    <div>
      <div className="up">
      <div className="up-text">
        <h1 className="titlee">Elites School E-learning platfrom</h1>
        <h2 className="sub-title">
          "To have another <span>language</span> is to <br></br>  possess a{" "}
          <span>second soul</span>"
        </h2>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur. In duis habitant ac nisi. Id
          odio nec vivamus id gravida. A nisl elit lorem posuere venenatis
          auctor(description 3la platform)
        </p>
        <div >
          <button className="startbutton">Start learning</button>
          
        </div>
      </div>
        <img src={studentland} alt="student" className="student"></img>
      </div>
      <div className="line"></div>
    
    </div>
  );
}


