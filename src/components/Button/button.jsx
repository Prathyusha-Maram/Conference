import "../Button/button.css"
import {Link} from "react-router-dom"

const GreenButton = ({title,width,path})=>{
    return(
        <>
        <div>
           <Link to={path}> <button className="greenBtn" style={{width:{width}?width:"350px"}}><Link to={path} className="greenBtnLink">{title}</Link></button></Link>
        </div>
        </>
    )
}
export default GreenButton