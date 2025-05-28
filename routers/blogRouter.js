const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res) => {
    res.send(`Lista completa del blog`)
})

router.get(`/:id`, (req, res) => {
    const id = req.params.id;
    res.send(`Elemento ${id}`);
})

router.post(`/`, (req, res) => {
    res.send(`Elemento aggiunto`);
})

router.put(`/:id`, (req, res) => {
    const id = req.params.id;
    res.send(`Elemento ${id} aggiornato`);
})

router.patch(`/:id`, (req, res) => {
    const id = req.params.id;
    res.send(`Elemento ${id} parzialmente aggiornato`);
})

router.delete(`/:id`, (req, res) => {
    const id = req.params.id;
    res.send(`Elemento ${id} eliminato`);
})


module.exports = router;