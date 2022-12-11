import React from "react"
import Entrar from "./pages/Entrar"
import Home from "./pages/Home"

import { createBrowserRouter } from "react-router-dom"
import ProdutoId from './pages/ProdutoId/index';

/*
function App() {
  return (
    <Home/>
    )
  }
  export default App
  */
  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/produto/:id",
      element:<ProdutoId/>
    },
    {
      path:"/entrar",
      element:<Entrar/>
    }
  ])
  
  export {router}
  
