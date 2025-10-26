  /* eslint-disabl */

  import { useState } from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'

 import React from 'react';

  function App() {
    
    let post = '역삼 우동 맛집';
    let [글제목, TitleChange] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
    //let [글제목1, b] = useState('남자코트 추천');
    //let [글제목2, z] = useState('남자코트 추천');
    //let [글제목3, x] = useState('남자코트 추천')
    //let num = [1,2];
    let [a,c] = [1,2];

    let [따봉,change] = useState([0,0,0]);
    let[modal, setModal] = useState(false);
    let[title,setTitle] = useState(0);
    let[input,inputChange] = useState('');
    
    [1,2,3].map(function(){

    })

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

          <button onClick={()=>{
            let sorted = [...글제목].sort();
            TitleChange(sorted);
          }}>가나다순정렬</button>

          <button onClick={()=>{
            let copy = [...글제목];
            copy[0] = '여자코트 추천';
            TitleChange(copy);
            }}>글수정</button>
            {/* <div className= "list">
              
              <h4> { 글제목[0] } <span onClick={()=>{change(따봉+1)}}>👍</span> {따봉} </h4>
              <p>2월 17일 발행</p>
              
            </div>
            <div className= "list">
              <h4> { 글제목[1] }</h4>
              <p>2월 17일 발행</p>
              
            </div>
            <div className= "list">
              <h4 onClick={()=> setModal(true)}> { 글제목[2] }</h4>
              <p>2월 17일 발행</p>
        </div> */}

        {
          글제목.map(function(a,i){
            return (<div className= "list" key={i}>
              <h4 onClick={()=> {setModal(true); setTitle(i)}}> { a }
              <span onClick={(e)=>{
                e.stopPropagation();
                let b = [...따봉];
                b[i] += 1;
                change(b);}}>👍</span> {따봉[i]} </h4>
                <button onClick={()=>{
                  let copy = [...글제목.slice(0,i),...글제목.slice(i+1)];
                  TitleChange(copy);
                  let copy2 = [...따봉.slice(0,i),...따봉.slice(i+1)];
                  change(copy2);
                }}>글삭제</button>
              <p>2월 17일 발행</p>
              
            </div>)
          })
        }

        <input onChange={(e)=>{
          inputChange(e.target.value)
          }}/>
          <button onClick={(e)=> {
            e.stopPropagation();
            let copy = [input,...글제목];
            TitleChange(copy);
            let copy2 = [0,...따봉];
            change(copy2);
          }}> 글작성</button>
        {
          modal == true ? <Modal 글제목 ={글제목} TitleChange = {TitleChange}
            title = {title}
          /> : null
          }
          {/* <Modal2/> */}
      
      </div>
    );
  }

  function Modal(props){

    return (
    <div className='modal'>
            <h4>{props.글제목[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={()=>{
            let copy = [...props.글제목];
            copy[0] = '여자코트 추천';
            props.TitleChange(copy);
            }}>글수정</button>
        </div>
    )
  }

  class Modal2 extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        name : 'kim',
        age : 20,
      };
    }
    render(){
      return(
        <div>안녕, {this.state.name}
          <button onClick={()=>{
            this.setState({age : 21});
          }}>버튼</button>
        </div>

      );
    }
  }


  export default App
