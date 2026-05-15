import {Outlet} from 'react-router'
import { NavLink } from 'react-router'
function Technologies() {
  return (
    <div>Technologies
        <Outlet/>
         <nav className="p-5">
       <ul className="flex justify-end gap-5 text-2xl">
       
       <li>
          <NavLink to="java" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>
            Java
          </NavLink>
        </li>
        <li>
          <NavLink to="nodejs" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>
            Nodejs
          </NavLink>
        </li>
        <li>
          <NavLink to="vue" className={({ isActive }) => (isActive ? "text-blue-700 bg-blue-200 p-3" : "")}>
            Vue
            </NavLink>
            </li>
         
       
        
       </ul>
      </nav>
    </div>
    
  )
}

export default Technologies