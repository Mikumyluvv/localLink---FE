import React from 'react'

export default function App() {
   return (
      <React.Fragment>
         <div className="fixed navbar bg-base-100 ">
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </div>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                     <li><a>Item 1</a></li>
                     <li>
                        <a>Parent</a>
                        <ul className="p-2">
                           <li><a>Submenu 1</a></li>
                           <li><a>Submenu 2</a></li>
                        </ul>
                     </li>
                     <li><a>Item 3</a></li>
                  </ul>
               </div>
               <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  <li><a>Item 1</a></li>
                  <li>
                     <details>
                        <summary>Parent</summary>
                        <ul className="p-2">
                           <li><a>Submenu 1</a></li>
                           <li><a>Submenu 2</a></li>
                        </ul>
                     </details>
                  </li>
                  <li><a>Item 3</a></li>
               </ul>
            </div>
            <div className="navbar-end">
               <a className="btn">Button</a>
            </div>
         </div>
         <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <button className="btn btn-primary">Get Started</button>
               </div>
            </div>
         </div>
         <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
               <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                  <button className="btn btn-primary">Get Started</button>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}
