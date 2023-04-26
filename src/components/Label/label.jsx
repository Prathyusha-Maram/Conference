import "../Label/Label.css"

export const Label = ({value})=>{
    return(
        <>
            <label className="label">{value}</label>
        </>
    )
}