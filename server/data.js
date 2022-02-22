const data = [
	{
		id: 1,
		title: 'Grocery List',
		favorite: false,
		list: true,
		content: [
			'Pick up a whole chicken for my famous chicken recipe',
			'get shrimp for my famous shrimp and cherry tomato pasta',
			'a couple tins of anchovies for the sauce',
			'bananas for banana bread',
			'some Lagunitas IPA',
			'garlic',
			'beef chuck for my beef stew',
		],
	},
	{
		id: 2,
		title: 'Job Hunt / Programming Work',
		favorite: false,
		list: true,
		content: [
			'Work on Pantheon Labs Project and submit it ASAP!!!',
			'continue implementing auth into the destop variant of the bike GPS app',
			'add more functionality to the React Native side of the bike GPS app',
			'algo practice',
		],
	},
	{
		id: 3,
		title: 'Birds Spotted Recently',
		favorite: false,
		list: true,
		content: [
			' Blue Jay',
			'Winter Wren',
			'House Finch',
			'Wood Duck',
			'Ruby-Crowned Kinglet',
			'Osprey',
			'Merlin',
		],
	},
	{
		id: 4,
		title: 'Bike Thoughts',
		favorite: false,
		list: false,
		content:
			'Gotta keep training over hilly terrain as much as possible. Start riding with extra gear and weight on the bike so that you can prepare to ride 100 miles from NYC to Philadelphia.',
	},
	{
		id: 5,
		title: 'List of wines to buy...',
		favorite: false,
		list: true,
		content: [
			'Hahn Pinot Noir',
			'The Fableist',
			'Molly Duker Shiraz: The Boxer',
			'Ask Jim about that bottle from the other night',
			'maybe get on board with this whole "natural wine" thing, go out and buy one',
		],
	},
	{
		id: 6,
		title: 'Dear Spencer & Ryan,',
		favorite: false,
		list: false,
		content:
			"Thank you so much for giving me a chance to interview today. I had a great time working under your direction and really enjoyed talking with you both. I have finished adding the favorite feature you asked for, and decided to go with a slightly different approach than I had initially planned during our meeting. I added a boolean property to each 'note' in the database so it could be easily toggled with a PATCH request and then filtered on the frontend with a single GET endpoint. This is how I would do it if the feature was intended from the project's genisis. I also read more of the Chakra docs and decided to set up my favorites container as a 'Tab' component, it felt like a much more natural way of organizing the data. Thank you again for taking the time to work and speak with me, I look forward to hearing from you soon.",
	},
	{
		id: 7,
		title: 'Who is Sam Bencivengo?',
		favorite: false,
		list: false,
		content:
			"...and why did I build this simulation of my notes app? I wanted to whip up something clean, impressive and practical that would tell you about who I am. So who am I? I am a birdwatcher, cyclist, cook and developer. That's about as concise as I can put it. Each note should be a little slice of something I enjoy doing or consumning, from cooking big dinners, heading to the park to go birdwatching or just riding my bike. I hope you enjoy this application as much as I enjoyed building it and I am looking forward to hearing from you!",
	},
];
module.exports = data;
