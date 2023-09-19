import { useSelector } from 'react-redux'
import style from './main.css'

export default function New() {
    const data = useSelector((state)=> state.index.data)
    return (
        <div className='new_cont'>
            <div className='title_box'><p>New(4)</p></div>
            <div className='price_box'><p>$46</p></div>
            <div className='add_box'><p>+ Quick Deal</p></div>
            <div className='cards_cont'>
                {
                    data.map((item)=>{
                        return ( <div className='card'>
                            <p>Deal #71</p>
                            <p>€413.91</p>
                            <p>{item.name}</p>
                            <p className='dataP'>yesterday 3:46 pm</p>
                            <p className='dataP'>respnsible person</p>
                            <p>{item.desc}</p>
                            {/* <p>{userId}</p> */}
                        </div>)
                    })
                }
               
            </div>
        </div>
    )
}