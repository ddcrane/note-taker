const router = require('express').Router();
const noteStorage = require('../db/note-storage');

router.get('/notes', (req, res) => {
    noteStorage
      .getNotes()
      .then((notes) => {
        return res.json(notes);
      })
      .catch((err) => res.status(500).json(err));
    });


router.post('/notes', (req, res) => {
    noteStorage
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});


module.exports = router;