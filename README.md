
#  UCF Dollar Menu TODO

> https://ucfdollarmenu.herokuapp.com/

- [ ] Add any missing locations to database

- [ ] Add Search functionality

- [ ] Implement Swagger

- [x] ~~Verify database models hold the information we need~~

- [x] ~~Either take data from API or manually populate the database ourselves~~

- [x] ~~Read restaurants from DB into data reducer (into an array)~~

- [x] ~~Map restaurants to markers on map~~ 

- [x] ~~Load the menu from the DB~~

- [x] ~~Use modals or something else to display menu when a location is selected~~

- [x] ~~Make the UI for the menu look pretty - reactstrap has some nice components that we can use, like the cards/carousel/list group~~

# Mobile App

1. Clone the repo if you havnt already
2. Install yarn [here](https://yarnpkg.com/lang/en/docs/install/#windows-stable)
3. Install expo:
```bash
yarn add -g expo-cli
```
4. Install the Expo app on your phone 
5. Start the app
```bash
yarn start
```

A terminal window should pop up as well as a tab in your browser. Scan the QR code with your phone. 
If you have an android device some parts of the app might look weird, sorry

     
# Install dependencies for server
npm install

> Map is created from Leaflet since Google Maps have changed their API ( No longer free )

> For reference https://react-leaflet.js.org/docs/en/intro

# Run the client & server with concurrently
npm run dev

# Run the Express server only
npm run server

# Run the React client only
npm run client

Server runs on http://localhost:5000 and client on http://localhost:3000
