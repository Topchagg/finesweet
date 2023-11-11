import {Routes, Route} from 'react-router-dom'

import Layout from './pages/layout'
import HomePage from './pages/homePage'

import './styles/variabalse.css'

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
  )
}

export default App
