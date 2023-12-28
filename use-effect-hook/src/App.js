// import logo from './logo.svg';
// import { useState  from 'react/cjs/react.production.min';
import React, { useEffect, useState } from 'react';
import './App.css';



function App() {
  // const[num, setNum] = useState(0);
  const[num, setNum] = useState(0);
  const[nums, setNums] = useState(0);

  // useEffect hook this hook run always and each time when render method gets call
  // useEffect (()=>{
  //   alert("hii")
  // },); 
  
  // if we give a empty arry it run only once
  // useEffect (()=>{
  //   alert("hii")
  // },[]); 
  
  // if we pass any spefic variable in array than it call when this variable will update 
  useEffect (()=>{
    alert("hii")
  },[num]); 
  
 
  return (
    <>
    <button onClick={() => {
      setNum(num+1)
    }}>Click me {num}</button>
    <button onClick={() => {
      setNums(nums+1)
    }}>Click me {nums}</button>
    </>
    
  );
}

export default App;
