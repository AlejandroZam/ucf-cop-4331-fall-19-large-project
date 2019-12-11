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
            "title":"UCF Dollar Menu API",
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
                            "headers": {
                                "Access-Control-Allow-Origin": {
                                    "type": "string"
                                }
                            },
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
                        },
                    }
                },
            "post": {
                "tags": [
                    "Restaurants"
                ],
                "summary": "Creates a restaurant",
                "description": "Creates a restaurant",
                "schema" :{
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
                    
                },
                "operationId": "newRestaurants",
                "produces": [
                    "application/json"
                ],
                "consumes": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "description": "Id of restaurant",
                        "required": true,
                        "type": "string",
                        "schema": {
                            "properties": {
                                "name": {
                                    "type" : "string"
                                },
                                "lat": {
                                    "type" : "string"
                                },
                                "long": {
                                    "type" : "string"
                                },
                                "address": {
                                    "type" : "string"
                                },
                                "style": {
                                    "type" : "string"
                                },
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Restaurant Created",
                    },
                    "400": {
                        "description": "Error creating restaurant"
                    },
                }
            },
        },
        "/api/data/getMenu": {
            "post": {
                "tags": [
                    "Menus"
                ],
                "summary": "Finds a the menu of a specific restaurant in the system",
                "description": "This endpoint finds the menu of a specific restaurant from the system",
                "operationId": " findMenu",
                "produces": [
                    "application/json"
                ],
                "consumes": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "body",
                        "in": "body",
                        "description": "Id of restaurant",
                        "required": true,
                        "type": "string",
                        "schema": {
                            "properties": {
                                "id": {
                                    "type" : "string"
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "headers": {
                            "Access-Control-Allow-Origin": {
                                "type": "string"
                            }
                        },
                        "description": "successful operation",
                        "schema": {
                        
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
                    },
                    "400": {
                        "description": "Error retrieving restaurant information"
                    },
                }
            },
    }
}
}
}


const routing = (
    <Router>
        <Route exact path="/" component={App}/>
        <Route path="/map"><App/></Route>
        <Route exact path="/swagger"><SwaggerUI spec={swag} /></Route>
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