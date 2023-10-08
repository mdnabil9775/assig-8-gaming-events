import { NavLink } from "react-router-dom";


const Navbar =()=>{
    return(
        <div className="   ">
            <div className="navbar bg-gray-900  rounded-b-xl ">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Parent</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-4xl ml-10">Gaming Events</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
    <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? "bg-black text-white" : ""
  }
>
  Home
</NavLink>
    </li>
    <li>
    <NavLink
  to="/events"
  className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? "bg-black text-white" : ""
  }
>
  Our Events
</NavLink>
    </li>
    <li>
    <NavLink
  to="/about"
  className={({ isActive, isPending }) =>
    isPending ? "" : isActive ? "bg-black text-white" : ""
  }
>
 About
</NavLink>
    </li>
      
    </ul>
  </div>
  <div className="navbar-end mr-10">
    <a className="btn">Button</a>
  </div>
</div>
        
        </div>
    )
}
export default Navbar;