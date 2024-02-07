import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function PageTitle() {
   const location = useLocation();
   const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

   // Mendapatkan nama halaman dari URL
   const pageName = pathSegments.length > 0
      ? pathSegments[pathSegments.length - 1].replace(/-/g, ' ').replace(/\b\w/g, firstLetter => firstLetter.toUpperCase())
      : '';

   // Membuat breadcrumb dari path URL
   let breadcrumbs = [];
   if (pathSegments.length > 0 && pathSegments[0] !== 'dashboard') {
      breadcrumbs.push(
         <li key={0}>
            <Link to="/dashboard">Dashboard</Link>
         </li>
      );
   }

   breadcrumbs = breadcrumbs.concat(
      pathSegments.map((segment, index) => {
         const to = `/${pathSegments.slice(0, index + 1).join('/')}`;
         const displayText = segment.replace(/-/g, ' ').replace(/\b\w/g, firstLetter => firstLetter.toUpperCase());
         return (
            <li key={index + 1}>
               {index < pathSegments.length - 1 ? <Link to={to}>{displayText}</Link> : displayText}
            </li>
         );
      })
   );

   return (
      <React.Fragment>
         <div className="px-3 flex justify-between">
            <h2 className='text-2xl font-bold'>
               {pageName}
            </h2>
            <div className="text-sm breadcrumbs">
               <ul>
                  {breadcrumbs}
               </ul>
            </div>
         </div>
      </React.Fragment>
   );
}
