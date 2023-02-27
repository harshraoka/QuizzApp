import React from 'react'
import { useState } from 'react';
import Questions from '../data/Question'



function Quiz() {
  const [index, setindex] = useState(0);
  const [isEnded, setisEnded] = useState(false);
  const [points, setpoints] = useState(0);
  function NextQuestion() {
    var myCheckbox = document.getElementsByName("myCheckbox");
    Array.prototype.forEach.call(myCheckbox,function(el){
      if(el.checked){
        if(el.id===Questions[index].ans){
          setpoints(points+1);
          
        }
        el.checked=false;
        
      
    }
    });
    if (index < Questions.length - 1) {
      setindex(index + 1);
    }
    else {
      setisEnded(true);
    }
  }

  // function Onlyoneselect(str){
  //   var myCheckbox = document.getElementsByName("myCheckbox");
  //   Array.prototype.forEach.call(myCheckbox,function(el){
  //     if(el.id!=str){
  //     el.checked=false;
  //   }
  //   });
  // }
  return (


    <div>


      <h1>Question Number {index}</h1>
      <h4>{Questions[index].prompt}</h4>
      <h1>Score =  {points}</h1>
      <input type='radio' name='myCheckbox' id='A' />{Questions[index].A}
      <input type='radio' name='myCheckbox'  id='B' />{Questions[index].B}
      <input type='radio' name='myCheckbox'  id='B' />{Questions[index].C}
      <input type='radio' name='myCheckbox'  id='B' />{Questions[index].D}
      

      <button disabled={isEnded} onClick={NextQuestion}>Next Question</button>


    </div>
  )
}

export default Quiz