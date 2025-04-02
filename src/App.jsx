// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  MenuOutlined,
  HomeOutlined,
  UploadOutlined,
  FolderOutlined,
  LoginOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import UploadScreen from './UploadScreen';
import AnalysisFilesScreen from './AnalysisFilesScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);
  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem("access_token"));

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("username");
    setLoggedIn(false);
    window.location.href = '/login';
  };

  const onLogin = () => {
    setLoggedIn(true);
  };

  const isLoggedIn = !!localStorage.getItem("access_token");

  const navLinks = loggedIn ? [
    { to: '/', icon: <HomeOutlined />, label: 'Home' },
    { to: '/upload', icon: <UploadOutlined />, label: 'Upload' },
    { to: '/analysis-files', icon: <FolderOutlined />, label: 'Analysis' },
    { to: '/logout', icon: <LogoutOutlined />, label: 'Logout', action: handleLogout, className: "bg-red-300 text-white hover:bg-red-400" }
  ] : [
    { to: '/login', icon: <LoginOutlined />, label: 'Login' },
    { to: '/signup', icon: <UserOutlined />, label: 'Sign Up' }
  ];

  return (
    <Router>
      <div className="flex h-screen bg-gray-100 text-gray-900 relative">
        {/* Sidebar */}
        <div
          className={`fixed md:static z-40 w-64 h-full bg-white border-r border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
        >
          <div className="p-6 text-2xl font-bold border-b border-gray-100">My App</div>
          <nav className="p-4 flex flex-col gap-4">
            {navLinks.map(({ to, icon, label, action, className }) => (
              action ? (
                <button
                  key={label}
                  onClick={action}
                  className={`flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-blue-50 transition ${className || ''}`}
                >
                  {icon}
                  {label}
                </button>
              ) : (
                <Link
                  key={to}
                  to={to}
                  className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-blue-50 transition"
                >
                  {icon}
                  {label}
                </Link>
              )
            ))}
          </nav>
        </div>

        {/* Toggle Button — Always visible in top-left corner */}
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="fixed top-4 left-4 z-50 bg-white border border-gray-300 rounded-md p-2 shadow-md"
        >
          <MenuOutlined />
        </button>

        {/* Dark overlay on mobile when sidebar is open */}
        {isMobile && sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          />
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col transition-all duration-300">
          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
            <Routes>
              <Route path="/" element={loggedIn ? <HomeScreen /> : <LoginScreen onLogin={onLogin} />} />
              <Route path="/upload" element={loggedIn ? <UploadScreen /> : <LoginScreen onLogin={onLogin} />} />
              <Route path="/analysis-files" element={loggedIn ? <AnalysisFilesScreen /> : <LoginScreen onLogin={onLogin} />} />
              <Route path="/login" element={<LoginScreen onLogin={onLogin} />} />
              <Route path="/signup" element={<SignUpScreen />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
