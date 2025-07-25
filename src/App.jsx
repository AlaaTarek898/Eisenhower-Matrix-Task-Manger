

import './App.css'
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout'
import { createBrowserRouter, createHashRouter } from "react-router";
import Login from './pages/Login/Login';
import ToDo from './pages/Todo/ToDo';
import { RouterProvider } from 'react-router';

function App() {
const router = createHashRouter([
  {path: "/",element: <Layout /> , children:[
    {index: true,element:<Home/> },
      {path:"home" , element: <Home/>},
       {path:"todo" , element: <ToDo/>},
      {path:"login" , element: <Login/>},
    ]
  },
]);

  return (
    <>
     <RouterProvider router={router}/>
  </>
  )
}

export default App
