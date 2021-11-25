import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';






import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Head from './Components/Head';




import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';

import Home from './Components/Home';
import Clients from './Components/Clients';
import About from './Components/About';
import Counts from './Components/Counts';
import Service from './Components/Service';
import CTA from './Components/CTA';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';



ReactDOM.render(
  <React.StrictMode>
    
    <Router>
        <Switch>

          <Route>
              <Head/>
              <Home/>
             
              <Clients/>
              <About/>
              <Counts/>
              <Service/>
              <CTA/>
              <Portfolio/>
              <Contact/>
           
              <Footer/>
          </Route>
          

          

          

        </Switch> 
    </Router>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
