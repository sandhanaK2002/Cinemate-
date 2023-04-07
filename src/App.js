import {AllRoutes} from './routes/AllRoutes';
import {Header , Footer} from './components/index'
import './App.css';


import React from 'react' 

const App = () => {
  return (
    <div>
        <Header/>
        <AllRoutes/>
        <Footer/>
    </div>
  )
}

export default App 