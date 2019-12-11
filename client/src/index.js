import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import registerServiceWorker from './registerServiceWorker';

import 'leaflet/dist/leaflet.css'

var swag = 

{
    "swagger":"2.0",
    "info": {
        "title":"API Title",
        "version":"1.0"
    },
    "host": "ucfdollarmenu.herokuapp.com",
    "basePath": "/",
    "schemes": ["https"],
    "tags": [
        {
            "name": "Restaurants",
            "description": "API for retrieving restaurant information"
        },
        {
            "name": "Menus",
            "description": "API for retrieving menu information"
        }
    ],
    "paths": {
        "/api/data/restaurant": {
            "get": {
                "tags": [
                    "Restaurants"
                ],
                "summary": "Get list of restaurants",
                "description": "Returns array of restaurants",
                "operationId": "getRestaurants",
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "successful operation",
                        "schema": {
                        
                            "title": "Restaurants",
                            "required": [ "name", "lat", "long", "address", "style" ],
                            "properties": {
                                "_id": { "type": "string" },    
                                "name": { "type": "string" },
                                "lat": { "type": "string" },
                                "long": { "type": "string" },
                                "address": { "type": "string" },
                                "style": { "type": "string" },
                                "date": { "type": "string", "format": "date-time" },
                            }
                        }
                    },
                    "400": {
                        "description": "Error retrieving restaurant information"
                    }
                }
            }
        }
    }
}


const routing = (
    <Router>
        <Route exact path="/"><App/></Route>
        <Route path="/swagger"><SwaggerUI spec={swag} /></Route>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();

/*{
 

    "title": "Menu",
    "required": [ "name", "price", "description", "isCombo" ],
    "properties": {
        "name": { "type": "string" },
        "price": { "type": "string" },
        "description": { "type": "string" },
        "isCombo": { "type": "string" },
        "date": { "type": "string", "format": "date-time" },
        "_id": { "type": "string" }
    }
} */