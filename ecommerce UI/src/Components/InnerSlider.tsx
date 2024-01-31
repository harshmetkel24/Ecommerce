import { useState } from "react";
import { Typography, Button, Container, Box, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

type TProps = {
	cardData: {
		id: number;
		title: string;
		content: string;
		description: string;
		price: number;
		innerPhotos: string[];
		innerVideo: string;
	};
};
const InnerSlider = ({ cardData }: TProps) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	let items = cardData.innerPhotos;

	const handlePrev = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? items.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === items.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<>
			<Box
				alignItems="center"
				sx={{
					borderRadius: "10px",
					position: "relative",
					backgroundColor: "#eee",
					width: "100%",
				}}
				py={1}
			>
				<Box
					sx={{ position: "absolute", left: 0, top: "50%", translateY: "-50%" }}
				>
					<IconButton
						sx={{ backgroundColor: "white !important" }}
						size="small"
						color="primary"
						edge="start"
						onClick={handlePrev}
					>
						{" "}
						<KeyboardArrowLeft />{" "}
					</IconButton>
				</Box>

				<Box sx={{textAlign:'center'}}>
					<img
						src={items[activeIndex]}
						alt="carousel"
						style={{
							height: "250px",
						}}
					/>
				</Box>
				<Box
					sx={{
						position: "absolute",
						right: 0,
						top: "50%",
						translateY: "-50%",
					}}
				>
					<IconButton
						sx={{ backgroundColor: "white !important" }}
						size="small"
						color="primary"
						edge="end"
						onClick={handleNext}
					>
						<KeyboardArrowRight />
					</IconButton>
				</Box>
			</Box>
		</>
	);
};

export default InnerSlider;
