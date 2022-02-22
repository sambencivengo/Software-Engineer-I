const runningFavs = [];
const data = require('../data');

const getFavs = async (req, res) => {
	try {
		res.status(200).json(runningFavs);
	} catch (error) {
		
		console.log(error);
	}
};

const favNote = async (req, res) => {
	try {
		const index = data.findIndex((note) => note.id === req.body.note.id);
		if (data[index].favorite === true) {
			const note = data[index];
			note.favorite = false;
		} else {
			data[index].favorite = true;
		}

		res.status(200).json(data);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { getFavs, favNote };
