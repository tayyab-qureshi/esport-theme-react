import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import { Routes, Route , HashRouter } from 'react-router-dom';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Home from './Screen/Home';
import News from './Screen/News';
import Videos from './Screen/Videos';
import SpecialDeals from './Screen/SpecialDeals';
import Shop from './Screen/Shop';

class App extends React.Component {
  render() {
    return (

      <div>
        <Nav />
        <Menu />
        <Routes basename="/esport-theme-react">
          <Route path='/' element={<Home/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/videos' element={<Videos/>} />
          <Route path='/specialdeals' element={<SpecialDeals/>} />
          <Route path='/shop' element={<Shop  />} />
          
        </Routes>
        <Footer />
      </div>
    )
  }
}

export default App;
