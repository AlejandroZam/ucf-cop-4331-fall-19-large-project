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

router.get('/menu', (req, res) => {
    Menu.find({})
        .then(menuData => res.json(menuData)) 
})

// Create new menuItem
router.post('/menu', (req, res) => 
{
    const { id, name, price, description} = req.body;

    // Menu.findOne({item})
    //     .then(fail => {
    //         if (fail) return res.status(400).json({ msg: 'Menu item already exists'});
    //     });

    const menuItem = new Menu
    ({
        id,
        name,
        price,
        description
    });

    menuItem.save().then(menuItem => {
        // TODO: Determine if anything even needs to be saved
        res.json();
    });
});

// Create new location
router.post('/restaurant', (req, res) => 
{
    const {name, lat, long} = req.body;

    // Restaurant.findOne({location})
    //     .then(fail => {
    //         if (fail) return res.status(400).json({ msg: 'Restaurant already exists'});
    //     });

    const newRestaurant = new Restaurant
    ({
        name,
        lat,
        long
    });

    newRestaurant.save().then(newRestaurant => {
        // TODO: Determine if anything even needs to be saved
        res.json();
    });
});

module.exports = router;