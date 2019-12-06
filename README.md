# UCF Dollar Menu
https://ucfdollarmenu.herokuapp.com/

> Map is created from Leaflet since Google Maps have changed their API ( No longer free )

> For reference https://react-leaflet.js.org/docs/en/intro

# TODO
- [ ] Verify database models hold the information we need

- [ ] Find suitable API

- [ ] Either take data from API or manually populate the database ourselves

- [x] ~~Read restaurants from DB into data reducer (into an array)~~

- [x] ~~Map restaurants to markers on map~~ 

- [x] ~~Load the menu from the DB~~

- [x] ~~Use modals or something else to display menu when a location is selected~~

- [ ] Make the UI for the menu look pretty - reactstrap has some nice components that we can use, like the cards/carousel/list group  https://reactstrap.github.io/components/card/

     
# Install dependencies for server
npm install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

Server runs on http://localhost:5000 and client on http://localhost:3000
