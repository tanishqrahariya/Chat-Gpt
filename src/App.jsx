import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [question , setquestion] = useState("");
  const [answer, setanswer]=useState("");

  
 async function generateanswer (){
  setanswer("loading");
    const response= await  axios ({
      url:" https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyACrh0BuZ59doTvteTmUCs955v3L-gsuj0",
      method: "POST",
      data:{
        contents:[
          {parts:[{text:question}]},
        ],
      },
    });

      setanswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
  }
  return (
    <>
    <div className='w-full'></div>
      <h1 className='bg-blue-300'>Chat AI</h1>
      <textarea  className=" border rounded w-full" placeholder='Ask anything to me' value={question} onChange={(e)=>setquestion(e.target.value)} cols="30" rows="10"></textarea>
      <button onClick={generateanswer}>Generate Answer</button>
      <pre>{answer
        }</pre>

    </>
  )
}

export default App
