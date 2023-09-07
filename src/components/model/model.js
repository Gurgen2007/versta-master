import style from "./model.css"

export const Model=({isShow, setIsShow})=>{
    
    return(
        <div className="prductBox" style={{display:isShow}}>
            <div className="inputBox">
                <input placeholder="name"/>
                <input placeholder="description"/>
                <input placeholder="user_id"/>
                <input placeholder="status_id"/>
            </div>
        </div>
    )
}