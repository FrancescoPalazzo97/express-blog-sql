const connection = require(`../data/db`)

const index = (req, res) => {
    const sql = `
    SELECT * 
    FROM posts
    `
    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: `Database query failed: ${err}` });
        }
        res.json(results)
    })
}

const show = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = `
    SELECT * 
    FROM posts
    WHERE posts.id = ?
    `
    const tagsSql = `
    SELECT tags.*
    FROM tags
    JOIN post_tag
    ON tags.id = post_tag.tag_id
    WHERE post_tag.post_id = ?
    `
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: `Database query failed: ${err}` });

        if (results === 0) return res.status(404).json({ error: `post not found` });

        const post = results[0];

        connection.query(tagsSql, [id], (err, tagResults) => {
            if (err) return res.status(500).json({ error: `Database query failed: ${err}` });

            if (results === 0) return res.status(404).json({ error: `tag not found` });

            post.tags = tagResults;

            res.json(post);
        })
    })
}

const store = (req, res) => {
    res.send(`Elemento aggiunto`);
}

const update = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Elemento ${id} aggiornato`);
}

const modify = (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Elemento ${id} parzialmente aggiornato`);
}

const destroy = (req, res) => {
    const id = parseInt(req.params.id);
    const sql = `
    DELETE 
    FROM posts
    WHERE posts.id = ?
    `
    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: `Database query failed: ${err}` });
        }
        res.sendStatus(204);
    })
}

module.exports = { index, show, store, update, modify, destroy };