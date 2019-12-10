const express = require('express');
const router = express.Router();
const Menu = require('../../models/Menu');
const Restaurant = require('../../models/Restaurant');

router.post('/getMenu', (req, res) => {
    var query = {};
    query['id'] = req.body.id;
    Menu.find(query)
        .then(menuData => res.json(menuData));
});

router.get('/restaurant', (req, res) => {
    Restaurant.find({})
        .then(restaurantData => res.json(restaurantData));
});

// Create new menuItem
router.post('/menu', (req, res) => 
{
    const { id, name, price, description, isCombo} = req.body;

    const menuItem = new Menu
    ({
        id,
        name,
        price,
        description,
        isCombo
    });

    menuItem.save().then(menuItem => {
        res.json();
    });
});

// Create new location
router.post('/restaurant', (req, res) => 
{
    const {name, lat, long, address, style} = req.body;

    const newRestaurant = new Restaurant
    ({
        name,
        lat,
        long,
        address,
        style
    });

    newRestaurant.save().then(newRestaurant => {
        res.json();
    });
});

module.exports = router;