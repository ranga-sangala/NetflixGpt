import React from 'react'
import Login from './Login'
import {RouterProvider, createBrowserRouter,} from 'react-router-dom'
import Browser from './Browser'


const Body = () => {

    const appLayOut = createBrowserRouter([
        {
        path:'/',
        element:<Login/>
    }
,
{
    path:'/browse',
    element:<Browser/>
}
])
  return (
    <div>
      
      <RouterProvider router={appLayOut}/>
    </div>
  )
}

export default Body
