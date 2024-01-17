import { Grid } from "@mui/material";
import { Navbar } from "./Components";
import MediaCard from "./Components/Cards";
const cardData = [
	{ title: "Card 1", content: "Content for Card 1" },
	{ title: "Card 2", content: "Content for Card 2" },
	{ title: "Card 3", content: "Content for Card 3" },
	{ title: "Card 4", content: "Content for Card 4" },
	// Add more data as needed
];
const App = () => {
	return (
		<>
			<Navbar />
			<Grid container>
				{cardData.map((card, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<MediaCard />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default App;
