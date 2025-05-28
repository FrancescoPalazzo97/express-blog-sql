const express = require(`express`);
const app = express();
const port = 3000;

const blogRouter = require(`./routers/blogRouter`);

const notFound = require(`./middlewares/notFound.js`);
const errorsHandler = require("./middlewares/errorsHandler.js");

app.use('/blog', blogRouter);

app.get(`/`, (req, res) => {
    res.send(`Benvenuto`);
})

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
    console.log(`Il server è in ascolto`);
})