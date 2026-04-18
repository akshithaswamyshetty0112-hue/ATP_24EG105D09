import { useLocation } from "react-router"

function Employee() {
    //read state received in navigation
    const {state}=useLocation();
  return (
    <div className="p-16 text-left text-3xl bg-red-50 rounded-2xl shadow-2xl">
        <ul className="list-none">
        <li>Name:{state.name}</li>
        <li>Email:{state.email}</li>
        <li>Mobile:{state.mobile}</li>
        <li>Designation:{state.designation}</li>
        <li>Company Name:{state.companyName}</li>
        </ul>
    </div>
  )
}

export default Employee