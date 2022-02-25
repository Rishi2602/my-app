import React from 'react';
import './App.css';
import { Outlet, Link } from "react-router-dom";


const Nav = () => {
return(
  <div id='layout'>
      <nav className='nav2'>
        <ul>
          <li> 
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/weather">OpenWeather</Link>
          </li>
          <li>
            <Link to="/todo">Todo App</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
</div>
)
}

export default Nav;


