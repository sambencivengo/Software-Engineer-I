const runningFavs = [];

const getFavs = async (req, res) => {
	try {
		res.status(200).json(runningFavs);
	} catch (error) {
		console.log(error);
	}
};
const postFavs = async (req, res) => {
	try {
		console.log(req.body);

		if (runningFavs.includes(req.body.fav)) {
			res.status(400).json({
				msg: 'This note is already in your favorites',
				notes: runningFavs,
			});
			return;
		}
		runningFavs.push(req.body.fav);

		res.status(202).json(runningFavs);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { getFavs, postFavs };
