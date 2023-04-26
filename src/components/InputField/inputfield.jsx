import "../InputField/inputField.css"

export const InputField = ({type,placeholder,label,width})=>{
    return(
        <>
        <input type={type} placeholder={placeholder} className="inputBox" style={{width:{width}?width:"350px"}}/>
        </>
    )
}