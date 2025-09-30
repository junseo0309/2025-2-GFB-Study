/* eslint-disabl */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let post = '역삼 우동 맛집';
  let [글제목, TitleChange] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  //let [글제목1, b] = useState('남자코트 추천');
  //let [글제목2, z] = useState('남자코트 추천');
  //let [글제목3, x] = useState('남자코트 추천')
  //let num = [1,2];

  let [a,c] = [1,2];

  let [따봉,change] = useState(0);
  
  //let a = num[0];
  //let c = num[1];

  function 함수(){
    console.log(1);
  }

  return (
    <div className="App">
      <div className ="black-nav">
     
        <h4>ReactBlog</h4>

        </div>
          <div className= "list">
            
            <h4> { 글제목[0] } <span onClick={()=>{change(따봉+1)}}>👍</span> {따봉} </h4>
            <p>2월 17일 발행</p>
            
          </div>
          <div className= "list">
            <h4> { 글제목[1] }</h4>
            <p>2월 17일 발행</p>
            
          </div>
          <div className= "list">
            <h4> { 글제목[2] }</h4>
            <p>2월 17일 발행</p>
      </div>
    
    </div>
  )
}

export default App
