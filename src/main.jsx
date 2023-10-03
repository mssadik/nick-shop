import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CheckOut from './pages/CheckOut/CheckOut';
import PrivateRoute from './routs/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/checkOut",
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      }
    ]

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
