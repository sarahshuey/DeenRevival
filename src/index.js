import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import BaseLayout from'./components/BaseLayout';
import AboutUs from'./components/AboutUs';
import ContactUs from'./components/ContactUs';
import OurServices from'./components/OurServices';
import Testimonials from'./components/Testimonials';



ReactDOM.render(
<BrowserRouter>
   <BaseLayout>
     <Switch>
       <Route exact path="/" component={App} />
       <Route path="/ContactUs" component={ContactUs} />
       <Route path="/AboutUs" component={AboutUs} />
       <Route path="/OurServices" component={OurServices} />
       <Route path="/Testimonials" component={Testimonials}/>
     </Switch>
   </BaseLayout>
 </BrowserRouter>


,document.getElementById('root'));
registerServiceWorker();
