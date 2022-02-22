const express = require('express');
const notesRouter = express.Router();
const { getAllNotes } = require('../controllers/notesController');
const {
	getFavs,
	postFavs,
	favNote,
} = require('../controllers/favoritesController');

notesRouter.route('/notes').get(getAllNotes);

// favorites
notesRouter.route('/favorites').get(getFavs).patch(favNote);

module.exports = notesRouter;
