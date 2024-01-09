import { Outlet } from "react-router-dom"
import Gnb from "./Gnb"


const Layout = () => {
    return (
      <div>
        <Gnb />
        
        <Outlet />
      </div>
    )
  }

  export default Layout