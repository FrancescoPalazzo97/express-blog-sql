const connection = require(`../data/db`)

const index = (req, res) => {
    const sql = `SELECT * FROM posts`
    connection.query(sql, (err, results) => {
        if (err) {
            return res.serverStatus(500).json({ error: `Database query failed` });
        }
        res.json(results)
    })
}

const show = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = `
    SELECT * 
    fROM posts
    WHERE posts.id = ?
    `
    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.serverStatus(500).json({ error: `Database query failed` });
        }
        res.json(results)
    })
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