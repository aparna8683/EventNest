We connected server between frontend and backend using express. Express has a function called app we use this to check our Connection is working are not.
We created MongoDb connection for models. We use Schema to create the structure of our model then to use it we create a model then export it using export default.
All the data is stored in data.js which has to be used and then create a index.js file to initialize this data or connect this data with model.
We created index route to see all the venues all the rest ejs template are used in views folder 
the index route is [/venues] we have made this route an anchor tag where we have passed show route in href link as["/venues/<%=venue._id%>"  
