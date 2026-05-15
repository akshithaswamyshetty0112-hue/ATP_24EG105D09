
import './App.css'
import NavBar from './components/NavBar'
import UsersList from './components/UsersList'
import Footer from './components/Footer'
import Counter from './components/Counter'
import { useState } from 'react'
import Test from './components/Test'
import APIDemo from './components/APIDemo'
import FormDemo from './components/FormDemo'
import Assignment from './components/Assignment'

function App(){
  //state
  console.log("App rendered")
  //return a react element
  return (
    <div>
      <NavBar />
    {/*<UsersList />
      <Footer />*/}
     {/* <Counter/>
     <Test/>
     <APIDemo/>
      <FormDemo/>*/}
      <div className='M-16 min-h-screen'>
      <Assignment/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;