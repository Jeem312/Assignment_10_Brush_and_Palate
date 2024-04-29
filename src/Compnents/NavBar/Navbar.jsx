
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/Provider';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip'
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);

  
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
      }, [theme])

    const handleToggle = e => {
       
        if (e.target.checked) {
          setTheme('dark')
        } else {
          setTheme('light')
        }
        console.log(theme);
      }
    

    const links = <>
    <li className="font-bold text-teal-900 "> <NavLink to="/">Home</NavLink></li>
    <li className="font-bold text-teal-900"> <NavLink to="/allArtCraft">All Art & craft Items</NavLink> </li>
    <li className="font-bold text-teal-900"> <NavLink to="/myArtCraft">My Art&Craft List</NavLink> </li>
    <li className="font-bold text-teal-900" > <NavLink to="/addCraft">Add Craft Item</NavLink> </li>
    
    </>
    return (
        <div className='container mx-auto  border border-b-2 '>
        <div className="navbar rounded-md bg-teal-100">
<div className="navbar-start">
<div className="dropdown">
  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </div>
  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
   {
    links
   }
  </ul>
</div>
<Link to='/'  className=" text-2xl font-bold text-teal-700">Brush & Palate</Link>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">
 {links}
</ul>
</div>
<div className="navbar-end gap-2">
<label className='cursor-pointer grid place-items-center'>
          <input
            type='checkbox'
            onChange={handleToggle}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
        {
                        user?  <div className="dropdown dropdown-end inline-flex">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                        <div>
                          <img src={user?.photoURL || "https://i.postimg.cc/q7V3Q9ZV/user-3177440.png" } />
                          </div>
                        </div>
                        <ul tabIndex={0} className="mt-20 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                          <li>
                            <a className="justify-between">
                            {user?.displayName||'user name not found'}

                             
                            </a>
                          </li>
          
                        </ul>
                        </div>
                        <div className='mt-2 border border-teal-400 btn btn-sm btn-ghost'>
                                     <button
                                        onClick={logOut}
                                        className="btn btn-sm   btn-ghost">Logout</button>

                        </div>
                      </div>
                        
                       
                            :
                            <div>
                            <Link to='/register'> <button className=' px-5 py-2 rounded-2xl bg-teal-400 text-teal-50 '>Register</button></Link>
                            <Link to='/signin'> <button className=' px-5 py-2 rounded-2xl bg-teal-500 text-teal-50'>LogIn</button></Link>
                            </div>
                    }
</div>
</div>
    </div>
    );
};

export default Navbar;