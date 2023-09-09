import style from "./model.css"
import Select from 'react-select'
import {UserData} from "../fakedata"
import { Status } from "../fakedata"

export const Model=({isShow, setIsShow})=>{
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
        <div className="prductBox" style={{display:isShow}}>
            <div className="inputBox">
                <input placeholder="name"/>
                <input placeholder="description"/>
                {/* <input placeholder="user_id"/>
                <input placeholder="status_id"/> */}
                <Select 
                options={arr}
                />
                <Select options={Status} />
                <button className='createBtn' onClick={()=>{Handler()}}>CREATE</button>
            </div>
        </div>
    )
}