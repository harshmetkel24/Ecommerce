import { Container, Grid } from "@mui/material";
import MediaCard from "./Cards";

type TProps = {
	mainIndex:number;
    cardData: any[];
};
export const FrontTabs = ({mainIndex,cardData}:TProps) => {
	return (
		<>
			<Container sx={{ margin: "1em auto" }}>
				<Grid container spacing={2} sx={{ marginBottom: "1em" }}>
					{cardData.map((card, index) => (
						<Grid item xs={12} sm={6} md={3} key={index}>
							<MediaCard mainIndex={mainIndex} id={card.id} title={card.title} content={card.content} price={card.price}/>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};
