import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const menuItems = ['Dashboard', 'Products', 'Orders', 'Customers', 'Analytics', 'Settings'];

  return (
    <div className="sidebar bg-white shadow-sm border-end p-3">

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="sidebar-title m-0">🛒 Admin Panel</h2>
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="rounded-circle shadow-sm"
          style={{ width: '40px', height: '40px' }}
        />
      </div>

   
      <nav className="sidebar-nav d-flex flex-wrap gap-2">
        {menuItems.map((section) => {
          const path = section === 'Dashboard' ? '/' : `/${section.toLowerCase()}`;
          const isActive =
            location.pathname === path ||
            (location.pathname === '/' && section === 'Dashboard');
          return (
            <Link
              key={section}
              to={path}
              className={`sidebar-link btn btn-sm ${
                isActive ? 'btn-primary text-white' : 'btn-outline-secondary'
              }`}
            >
              {section}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
