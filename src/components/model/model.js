import style from "./model.css"
import Select from 'react-select'
import {UserData} from "../fakedata"
import { Status } from "../fakedata"
import { useSelector } from "react-redux"
import { useState } from "react"

export const Model=()=>{
    const [createData, setCreateData] = useState({
        name: "",
        desc:"",
        userId: 0,
        statusId: 0,
    })

    const createClick=()=>{

    }
    const isShow = useSelector((state) => state.index.show)
    const options = [ 
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    let arr = []
    UserData.map(item =>{
        arr.push({label: item.firstName + ' '+ item.lastName, value: item.id})
    })
    console.log(arr);
    
    return(
        <div className="prductBox" style={{display:isShow ? 'block':'none'}}>
            <div className="inputBox">
                <input placeholder="name" onChange={item=>{
                    setCreateData((state) => {
                    return {
                        ...state,
                          name: item.name
                    }
                    })
                }}/>
                <input placeholder="description" nChange={item=>{
                    setCreateData((state) => {
                    return {
                        ...state,
                          name: item.desc
                    }
                    })
                }}/>
                {/* <input placeholder="user_id"/>
                <input placeholder="status_id"/> */}
                <Select options={arr}/>
                
                
                <Select options={Status} />
                <button className='createBtnModel' onClick={()=>{}}>CREATE</button>
            </div>
        </div>
    )
}