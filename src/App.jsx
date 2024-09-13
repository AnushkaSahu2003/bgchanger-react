import { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive")

  return (
<div className='w-full h-screen duration-200'
style={{backgroundColor:color}}>
<div className='fixed flex flex-wrap justify-center bottom-12 inser-x-0 px-2'>
  <div className='flex flex-wraap justify-center gap-3 shadow-lg px-4 bg-white py-2 rounded-xl'>
    <button onClick={() => setColor("red")} className='outline-none px-4 rounded-full text-white shadow-lg'
    style={{backgroundColor:"red"}}>Red</button>
    <button onClick={() => setColor("blue")} className='outline-none px-4 rounded-full text-white shadow-lg'
    style={{backgroundColor:"blue"}}>Blue</button>
    <button onClick={() => setColor("green")} className='outline-none px-4 rounded-full text-white shadow-lg'
    style={{backgroundColor:"green"}}>Green</button>
    <button onClick={() => setColor("black")} className='outline-none px-4 rounded-full text-white shadow-lg'
    style={{backgroundColor:"black"}}>black</button>
    <button onClick={() => setColor("purple")} className='outline-none px-4 rounded-full text-white shadow-lg'
    style={{backgroundColor:"purple"}}>purple</button>

    </div>
</div>
</div>
  )
}

export default App
