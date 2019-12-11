import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import registerServiceWorker from './registerServiceWorker';

import 'leaflet/dist/leaflet.css'

const routing = (
    <Router>
        <Route exact path="/"><App/></Route>
        <Route path="/swagger"><SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" /></Route>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
