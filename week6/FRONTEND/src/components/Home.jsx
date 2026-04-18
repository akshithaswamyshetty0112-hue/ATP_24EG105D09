
import { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import { useCounterStore } from '../store/CounterStore';
import Test from './Test'
function Home() {
  
  const {counter,changeCounter}=useContext(counterContextObj)
  
  //call useCounterStore hook to get state of zustand store
   let newCounter=useCounterStore((state)=>state.newCounter);
 
  let incrementCounter=useCounterStore((state)=>state.incrementCounter)
   console.log("Home")
 return (
     <div className='text-center'> 
           <h1 className='text-4xl'>Counter:{counter}</h1>
      <button onClick={changeCounter} className="bg-amber-300 p-5 mt-5 text-white">change</button>
      <h1 className='text-4xl'>New Counter:{newCounter}</h1>
      <button onClick={incrementCounter} className="bg-amber-300 p-5 mt-5 text-white">change</button>
      <Test/>
     </div>
  )
 }

 export default Home