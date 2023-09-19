import style from "./model.css"
import Select from 'react-select'
import {UserData} from "../fakedata"
import { Status } from "../fakedata"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { setData } from "../../store"

export const Model=()=>{
    const dispatch = useDispatch()
    const [createData, setCreateData] = useState({
        name: "",
        desc:"",
        userId: 0,
        statusId: 0,
    })
    const createClick=()=>{
        dispatch(setData({data:createData}))
    
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
                <input placeholder="name" onChange={(event)=>{
                    setCreateData((state) => {
                    return {
                        ...state,
                        name: event.target.value
                    }
                    })
                }}/>
                <input placeholder="description" onChange={(event)=>{
                    setCreateData((state) => {
                    return {
                        ...state,
                        desc: event.target.value
                    }
                    })
                }}/>
                {/* <input placeholder="user_id"/>
                <input placeholder="status_id"/> */}
                <Select options={arr} onChange={(item)=>{
                     setCreateData((state) => {
                    return {
                        ...state,
                        userId: item.value }
                    })
                   
                }} />
                
                
                <Select options={Status} onChange={(item)=>{
                   setCreateData((state) => {
                            return {
                                ...state,
                                statusId: item.value 
                            }   
                   })
                 }} />
                <button className='createBtnModel' onClick={()=>{createClick()}}>CREATE</button>
            </div>
        </div>
    )
}