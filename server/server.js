const express = require('express');
const notesRouter = require('./routes/notesRoutes');
const cors = require('cors');

const server = express();
const port = process.env.PORT || 5000;

const corsOptions = {
	origin: 'http://localhost:3000' || process.env.CORS_ORIGIN,
};

const path = require('path');
server.use(cors(corsOptions));
server.use(express.json());
server.use('/api/v1/', notesRouter);
// server.use(express.urlencoded({ extended: true }));

const start = () => {
	server.listen(port, () => {
		console.log(`server is listening on port ${port}...`);
	});
};

start();
