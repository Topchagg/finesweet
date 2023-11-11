import {Outlet} from 'react-router-dom'

import HeaderLayout from "../sections/headerLayout"
import FooterLayout from "../sections/footerLayout"

function Layout(){
    return (
       <>
       <HeaderLayout/>
        <Outlet/>
        <FooterLayout/>
       </>
    )
}

export default Layout