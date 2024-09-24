import { Outlet, useNavigate } from "react-router-dom"
import "./quesMng.scss"

export default function QuesMng() {
    const pathName = window.location.pathname.split("/").pop();
    const navigate = useNavigate();
  return (
    <div className="page-container">
        <section className="ques-Box">
            {
                pathName == "list" ? 
                <section className="quesMng-top">
                <button onClick={()=>{navigate("add-new")}}>Add new</button>
                <input type="text" placeholder="Enter your question keywords"/>
            </section> :
                <></>
            }
            
            <section className="quesMng-bottom">
                <Outlet></Outlet>
            </section>
        </section>
    </div>
  )
}
