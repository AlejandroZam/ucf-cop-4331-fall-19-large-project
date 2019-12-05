# UCF Dollar Menu
https://ucfdollarmenu.herokuapp.com/

> Map is created from Leaflet since Google Maps have changed their API ( No longer free )

> For reference https://react-leaflet.js.org/docs/en/intro

# TODO
- [ ] Verify database models hold the information we need

- [ ] Either take data from API or manually populate the database ourselves

- [ ] Read restaurants from DB into data reducer (into an array)
- [x] ~~Map restaurants to markers on map~~

- [ ] Use modals or something else to display menu when a location is selected

# Install dependencies for server
npm install

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

Server runs on http://localhost:5000 and client on http://localhost:3000
