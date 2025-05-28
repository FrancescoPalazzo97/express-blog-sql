const express = require(`express`);
const app = express();
const port = 3000;

const blogRouter = require(`./routers/blogRouter`);

app.use('/blog', blogRouter);

app.get(`/`, (req, res) => {
    res.send(`Benvenuto`);
})

app.listen(port, () => {
    console.log(`Il server è in ascolto`);
})