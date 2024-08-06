import { useState } from 'react'
import './App.css'

function App() {
   
  let [counter,setCounter]= useState(15)

  //   let counter =15 ;  
  const addValue=() =>{
    setCounter(++counter);
  }
  const subtractValue=() =>{
    setCounter(--counter);
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >Chai aur React</h1>
      <br />
      <h2 className='bg-yellow-300 text-black font-bold'>Counter value :{counter} </h2>
      <br />
      <button onClick={addValue} className='bg-black text-white'>Increase value</button>
      <br />  <br />
      <button onClick={subtractValue} className='bg-black text-white'>Decrease value</button>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://img.freepik.com/free-photo/multi-colored-butterfly-flies-vibrant-nature-beauty-generated-by-ai_188544-19743.jpg?t=st=1717160364~exp=1717163964~hmac=945ca00beec91b52d11a647762328ece5655ab84d672cb825c0c7b85a7c879b5&w=740" alt="" width="384" height="512" />
          <div className="pt-6 text-center space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">
                Sarah Dayan
              </div>
              <div className="text-slate-700 dark:text-slate-500">
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
      </figure>
    </>
  )
}

export default App
