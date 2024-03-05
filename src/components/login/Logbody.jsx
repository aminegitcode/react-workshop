
import "./Logbodystyle.css";
import logo_login from "../../assets/landing/logo_login.svg";
import eye from "../../assets/login/eye.svg"
import info from "../../assets/login/info.svg";


export default function Logbody (){
    return(
        <div className="bodyy">
         <h1 className="title">Elites School E-learning platfrom</h1>
        <img src={logo_login} alt="logoo" className="logoo"></img>

        <div className="log-in">
            <p className="log-text">Log in to your account</p> 
            <div className="log-in-inputs">
                <div className="emaild">
                    <label >Email</label>
                    <input type="email" className="email" placeholder="Elitesstudent@gmail.com"></input>
                    <img src={info} className="info"></img>
                </div>
                <div className="passwordd">
                    <label >Password</label>
                    <input type="password" className="password" placeholder="Your password"></input>
                    <img src={eye} className="eye"></img>
                </div>
                
                <div className="user-typed">
                    <label>Sign in as</label>
                    <select name="user-type" className="user-type" >
                        <option></option>
                        <option value="Admin" className="admin">Admin</option>
                        <option value="Student" className="student">Student</option>
                        <option value="Teacher" className="teacher">Teacher</option>
                    </select>
                </div>
                <button className="button-sign-in">Sign in</button>
            </div>
        </div>
        </div>
        
    );
}