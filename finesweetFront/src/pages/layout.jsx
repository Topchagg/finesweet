import {Outlet} from 'react-router-dom'

import HeaderLayout from "../sections/headerLayout"
import FooterLayout from "../sections/footerLayout"
import NavFooterLayout from '../sections/navFooterLayout'


function Layout(){

    

    return (
       <>
        <HeaderLayout/>
        <Outlet/>
        <FooterLayout/>
        <div className="section black-background">
            <div className="content__container">
                <NavFooterLayout/>
            </div>
        </div>
       </>
    )
}

export default Layout