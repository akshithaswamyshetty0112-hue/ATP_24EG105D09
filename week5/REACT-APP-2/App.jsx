
import './App.css'
import NavBar from './components/NavBar'
import UsersList from './components/UsersList'
import Footer from './components/Footer'

function App(){
  //state
  //return a react element
  return (
    <div>
      <NavBar />
      <UsersList />
      <Footer />

    </div>
  );
}

export default App;