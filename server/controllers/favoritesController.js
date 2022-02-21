const runningFavs = [1, 2];

const getFavs = async (req, res) => {
	try {
		res.status(200).json(runningFavs);
	} catch (error) {
		console.log(error);
	}
};
const postFavs = async (req, res) => {
	try {
		res.status(202).json(req.body);
		console.log(req.body);
	} catch (error) {
		console.log(error);
	}
};

module.exports = { getFavs, postFavs };
