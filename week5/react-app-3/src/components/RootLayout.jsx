
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router'
function RootLayout() {
  return (
    <div>
      <Header/>
      {/*placeholder */}
      <div className='min-h-screen mx-16 bg-gray-100'>
           <Outlet/>    
      </div>
      
    </div>
  )
}

export default RootLayout