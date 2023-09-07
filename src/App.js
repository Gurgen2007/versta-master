import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import New from './components/New/new';
import { Model } from './components/model/model';
import { useState } from 'react';

function App() {
  const [isShow, setIsShow] = useState("none")
  const Handler=()=>{
    if (isShow == "none") { 
      setIsShow("block")
    } else{
      setIsShow("none")
    }
  }
  return (
    <div className="App">
      <div className='bg'>
        <Header />
        <Model isShow={isShow} setIsShow={setIsShow}/>
        
        <div className='navigation_bar_box'>
          <div className='nav_title_box'>
            <p>Deals</p>
          </div>
          <div className='createBtn_box'> 
            <button className='createBtn' onClick={()=>{Handler()}}>CREATE</button>
          </div>
          <div className='general_box'>
            <p>General</p>
          </div>
          <div className='search_box'>
            <div className='Deals_box'>Deals in Progress</div>
            <input className='search' placeholder='search'></input>
          </div>
          <div className='settings_box'>
            <div className='settings'></div>
          </div>
        </div>
        <div className='nav_bar2_box'>
          <div className='nav_bar2'></div>
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
