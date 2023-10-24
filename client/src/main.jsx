import React from 'react';
import ReactDOM from 'react-dom';
import './main.css'; // our custom CSS
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// IMPORT PAGES
import Home from './pages/Home';
import Heroes from './pages/Heroes';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import App from './App.jsx';


import Login from './pages/Login';
import SignupForm from './pages/Signup';
import EmergencyForm from './components/EmergencyForm/EmergencyForm';



// ======= IMPORT CSS PACKAGES
import 'bootstrap/dist/css/bootstrap.min.css'; // bootsrap v5

// ======= IMPORT JS PACKAGES
import 'bootstrap/dist/js/bootstrap.min.js';

// deprecated 
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <SignupForm />
      }, {
        path: '/profile',
        element: <Profile />
      }, {
        path: '/heroes',
        element: <Heroes />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root'))
.render(<RouterProvider router={router} />
)
