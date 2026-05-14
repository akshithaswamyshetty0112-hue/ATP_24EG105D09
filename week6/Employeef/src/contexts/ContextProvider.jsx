
import { createContext,useState,useEffect } from 'react'
import { useCounterStore } from '../store/CounterStore'

//create context provider object
export const counterContextObj=createContext()
function ContextProvider({children}) {
    //state
 const[counter,setCounter]=useState(0)
 const[counter1,setCounter1]=useState(0)
 const[counter2,setCounter2]=useState(0)
 const newCounter=useCounterStore((state)=>state.newCounter)

 useEffect(()=>{
   setCounter1(newCounter)
 },[newCounter])

 //functions to change state
 const changeCounter=()=>{
    setCounter(counter+1)
 }
 const changeCounter1=()=>{
    setCounter1(counter1+1)
 }
 const changeCounter2=()=>{
    setCounter2(counter2+1)
 }
  return (
  <counterContextObj.Provider value={{counter,counter1,counter2,changeCounter,changeCounter1,changeCounter2}}>
    {children}
  </counterContextObj.Provider>
  )
}

export default ContextProvider