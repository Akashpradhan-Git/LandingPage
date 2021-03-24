import './App.css';
import Header from './components/Header'
import Body from './components/body/Body'
import Footer from './components/footer'

import img from './image/pana.png'
import img2 from './image/pana2.png'
import icon1 from './image/product-description 1.png'
import icon2 from './image/tech.png'
import icon3 from './image/verified.png'


import cus1 from './image/logo2.png'
import cus2 from './image/logo3.png'
import cus3 from './image/logo4.png'
import cus4 from './image/logo5.png'
import cus5 from './image/logo6.png'
import cus6 from './image/logo7.png'
import logo from './image/Group 1317.png'


function App() {
  return (
    <>
      <Header/>
      <Body image={img} image2={img2} icon1={icon1} icon2={icon2} icon3={icon3}/>
      <Footer logo={logo} icon1={cus1} icon2={cus2} icon3={cus3} icon4={cus4} icon5={cus5} icon6={cus6}/>
    </>
  );
}

export default App;
