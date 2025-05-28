const index = (req, res) => {
    res.send(`Lista completa del blog`)
}

const show = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Elemento ${id}`);
}

const store = (req, res) => {
    res.send(`Elemento aggiunto`);
}

const update = (req, res) => {
    let id = parseInt(req.params.id);
    res.send(`Elemento ${id} aggiornato`);
}

const modify = (req, res) => {
    let id = parseInt(req.params.id);
    res.send(`Elemento ${id} parzialmente aggiornato`);
}

const destroy = (req, res) => {
    let id = parseInt(req.params.id);
    res.send(`Elemento ${id} eliminato`);
}

module.exports = { index, show, store, update, modify, destroy };