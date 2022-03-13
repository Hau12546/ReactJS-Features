import  MeetupList from '../components/meetups/MeetupList.js';

const dummyData = [
	{
		id:0,
		title:'The Great Wall of China at Jinshanling',
		image:'https://cdn.britannica.com/89/179589-138-3EE27C94/Overview-Great-Wall-of-China.jpg?w=800&h=450&c=crop',
		address:'Jinshanling',
		description:'The Great Wall of China (traditional Chinese: 萬里長城; simplified Chinese: 万里长城; pinyin: Wànlǐ Chángchéng) is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC, with selective stretches later joined together by Qin Shi Huang (220–206 BC), the first emperor of China. Little of the Qin wall remains. Later on, many successive dynasties built and maintained multiple stretches of border walls. The best-known sections of the wall were built by the Ming dynasty (1368–1644).',
	},
	{
		id:1,
		title:'Mt. Fuji of winter that seen from Oshino Hakkai.',
		image:'https://upload.wikimedia.org/wikipedia/commons/1/1b/080103_hakkai_fuji.jpg',
		address:'Fuji, Shizuoka',
		description:`Mount Fuji (富士山, Fujisan, located on the island of Honshū, is the highest mountain in Japan, standing 3,776.24 m (12,389.2 ft). It is the second-highest volcano located on an island in Asia (after Mount Kerinci on the island of Sumatra), and seventh-highest peak of an island on Earth.Mount Fuji is an active stratovolcano that last erupted from 1707 to 1708. The mountain is located about 100 km (62 mi) southwest of Tokyo and is visible from there on clear days. Mount Fuji's exceptionally symmetrical cone, which is covered in snow for about five months of the year, is commonly used as a cultural icon of Japan and it is frequently depicted in art and photography, as well as visited by sightseers and climbers.`,
	},

	{
		id:2,
		title:'A collage of Venice: at the top left is the Piazza San Marco, followed by a view of the city, then the Grand Canal and interior of La Fenice, as well as the island of San Giorgio Maggiore.',
		image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Collage_Venezia.jpg/1280px-Collage_Venezia.jpg',
		address:'Veneto',
		description:`Venice has been known as "La Dominante", "La Serenissima", "Queen of the Adriatic", "City of Water", "City of Masks", "City of Bridges", "The Floating City", and "City of Canals". The lagoon and a part of the city are listed as a UNESCO World Heritage Site. Parts of Venice are renowned for the beauty of their settings, their architecture, and artwork.Venice is known for several important artistic movements—especially during the Renaissance period—and has played an important role in the history of instrumental and operatic music, and is the birthplace of Baroque composers Tomaso Albinoni and Antonio Vivaldi.`,
	},
]
const HomePage = (()=>{
	return (<>
		<MeetupList meetups={dummyData}></MeetupList>
	</>)
});

export default HomePage;