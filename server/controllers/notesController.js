const data = require('../data');

const getAllNotes = async (req, res) => {
	try {
		res.status(200).json({
			data: data,
			numberOfHits: data.length,
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = { getAllNotes };
