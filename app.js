const express = require('express');
const medalRoutes = require('./routes/medalRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const fansRoutes = require('./routes/fansRoutes');
const mongoose = require('mongoose');

const app = express();

const dbURL = "mongodb+srv://jay:jay123@cluster0.vb3gn.mongodb.net/database1";

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/medals', medalRoutes);

app.use('/schedule', scheduleRoutes);

app.use('/fans', fansRoutes);

// 404 route
app.use((req, res) => {
    res.status(404).send("<h1>Error 404: Page not found</h1>");
});