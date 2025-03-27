import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthLayout } from './components/index.js';
import AddPost from './pages/AddPost.jsx';
import Signup from './pages/Signup.jsx';
import EditPost from './pages/EditPost.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Post from './pages/Posts.jsx';
import AllPosts from './pages/AllPosts.jsx';
// import AddPost from './pages/AddPost.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
      path:'/',
      element:<Home/>,
      },
      {
        path:"/login",
        element:(
          <AuthLayout authentication={false}>
            <div><Login /></div>
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <Signup />
            </AuthLayout>
        ),
    },
    {
      path: "/all-posts",
      element: (
          <AuthLayout authentication>
              {" "}
              <AllPosts />
          </AuthLayout>
      ),
  },
  {
       path: "/add-post",
        element: (
             <AuthLayout authentication>
              {" "}
              <AddPost />
             </AuthLayout>
    ),
     },{
       path: "/edit-post/:slug",
       element: (
       <AuthLayout authentication>
              {" "}
              <EditPost />
        </AuthLayout>
     ),
     },
    {
         path: "/post/:slug",
         element: <Post />,
    },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router} />
      </Provider>
  </React.StrictMode>,
)
