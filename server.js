const express = require('express');
const routes = require('./routes');
const sequelize = require("./config/connection")
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() =>
{
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
//the launch point of the application. connection everything to the port
//in addition, force: false means that when we sync to sequalize and the database, we aren't overwriting anything that is already written (like seed data)
