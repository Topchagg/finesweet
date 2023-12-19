import {Routes, Route} from 'react-router-dom'

import Layout from './pages/layout'
import HomePage from './pages/homePage'
import ServicesPage from './pages/servicesPage'
import AboutUsPage from './pages/aboutUsPage'
import ContactPage from './pages/contactPage'
import SingleServicePage from './pages/singleServicePage'

import './styles/variabalse.css'

import { useGetAllServiceQuery } from "../src/redux/fineSweetApi"



function App() {
const {data = [], isLoading } = useGetAllServiceQuery();
    
localStorage.setItem('serviceItems', JSON.stringify(data))  
  
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="services" element={<ServicesPage/>}  />
        <Route path="contact" element={<ContactPage/>} />
        <Route path="about-us" element={<AboutUsPage/>} />
        <Route path="service-page/:slug" element={<SingleServicePage/>}/>
      </Route>
    </Routes>
  )
}

export default App
