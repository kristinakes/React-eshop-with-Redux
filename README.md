# Getting Started with react-eshop-app
This app is build with local json server for development purposes. 
Redux store is used to manage product update and cart actions.

Images and icons used in this project are stored in assets folder for development only.
When using form to update/add products the title is locked for editing (as this is used to link proper image by title in assets folder when displaying).

For CSS using Tailwind CSS.

## Available Scripts

In the project directory, you can run:

### To start the project
#### `npm install` 
#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### To start development server for data fetch
#### `npx json-server ./src/data/products.json --port 8000`
This will start json-server to fetch data from product.db file and update products list, productDetails page

#### If using different json-server port
The server endpoints needs to be updated in src/utils/apiConfig.jsx file

### To run test files
#### `npm test` There are few snapshot test writen for main components

## To make the Google map work
Update the API key in utils folder and then uncomment map section in Contacts.jsx file
