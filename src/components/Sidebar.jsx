import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const sidebarData = [
   { label: 'Dashboard', path: '/dashboard', submenu: false },
   { label: 'Data Kependudukan', path: '/data-kependudukan', submenu: false },
   {
      label: 'Layanan Surat',
      path: '/layanan-surat',
      submenu: true,
      subitems: [
         { label: 'Surat Masuk', path: '/surat-masuk', submenu: false },
         { label: 'Surat Keluar', path: '/surat-keluar', submenu: false },
      ],
   },
];

export default function Sidebar() {
   const location = useLocation();

   const isLinkActive = (path) => {
      return location.pathname === path;
   };

   return (
      <React.Fragment>
         <ul className="menu p-4 w-80 min-h-full bg-base-100 text-base-content space-y-2 text-lg">
            {/* Logo */}
            <Link to={'/dashboard'} className='w-auto h-12 flex items-center justify-center text-3xl text-neutral font-bold mb-4'>
               Locale Link
            </Link>
            {/* Sidebar content here */}
            {sidebarData.map((item, index) => (
               <li key={index}>
                  {item.submenu ? (
                     <details open>
                        <summary>{item.label}</summary>
                        <ul className="p-2 space-y-2">
                           {item.subitems.map((subitem, subindex) => (
                              <li key={subindex}>
                                 <Link to={`${item.path}${subitem.path}`} className={isLinkActive(`${item.path}${subitem.path}`) ? 'active font-bold' : ''}>{subitem.label}</Link>
                              </li>
                           ))}
                        </ul>
                     </details>
                  ) : (
                     <Link to={item.path} className={isLinkActive(item.path) ? 'active font-bold' : ''}>{item.label}</Link>
                  )}
               </li>
            ))}
         </ul>
      </React.Fragment>
   );
}
