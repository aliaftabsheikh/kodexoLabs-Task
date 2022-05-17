import React from 'react';
import Navbar from 'components/Navbar/Navbar';
import Home from 'components/Pages/Home/Home';
import Card from 'components/Card/Card';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      {/* <Card/> */}
    </div>
  )
}

export default App