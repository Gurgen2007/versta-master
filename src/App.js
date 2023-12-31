import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import New from './components/New/new';
import { Model } from './components/model/model';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setShow } from './store/index';
function App() {
  const isShow = useSelector((state) => state.index.show)

 // const [isShow, setIsShow] = useState("none")
  const dispatch = useDispatch()
  const Handler=()=>{
    if (!isShow) { 
      dispatch(setShow({show:true}))
    } else{ 
      dispatch(setShow({show:false}))
    }
  }
  return (
    <div className="App">
      <div className='bg'>
        <Header />
        <Model/>
        
        <div className='navigation_bar_box'>
          <div className='nav_title_box'>
            {/* <p>Deals</p> */}
            <sub>Deals ✰</sub>
          </div>
          <div className='createBtn_box'> 
            <button className='createBtn' onClick={()=>{Handler()}}>CREATE ˅</button>
          </div>
          <div className='general_box'>
            <p>General <span className='general_span'>10</span>˅</p>
          </div>
          <div className='search_box'>
            <div className='Deals_box'><p>Deals in Progress </p>  <span> x</span></div>
            <input className='search' placeholder='search'></input>
          </div>
          <div className='settings_box'>
            <div className='settings'></div>
          </div>
        </div>
        <div className='nav_bar2_box'>
          <div className='nav_bar2'><p className='pipelines'>Pipeline</p><p>List</p><p>Activities</p><p>Calendar</p></div>
          <div className='nav_bar3'></div>
        </div>
        <div className='main_cont'>
          <New />
          <New />
          <New />
        </div>
      </div>
      
    </div>
  );
}

export default App;
