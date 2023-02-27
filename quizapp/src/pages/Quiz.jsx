import React from 'react'
import { useState } from 'react';
import Questions from '../data/Question'



function Quiz() {
  const [index, setindex] = useState(0);
  const [isEnded, setisEnded] = useState(false);
  function NextQuestion() {
    if (index < Questions.length - 1) {
      setindex(index + 1);
    }
    else {
      setisEnded(true);
    }
  }
  return (


    <div>


      <h1>Question Number {index}</h1>
      <h4>{Questions[index].prompt}</h4>
      <input type="radio" />{Questions[index].A}
      <input type="radio" />{Questions[index].B}
      <input type="radio" />{Questions[index].C}
      <input type="radio" />{Questions[index].D}
      <button disabled={isEnded} onClick={NextQuestion}>Next Question</button>


    </div>
  )
}

export default Quiz