import { FrontTabs } from "../Components/FrontTabs";
import Caritems from "../CarAccessories";
import { GeneralAlert, Navbar } from "../Components";
import { Typography } from "@mui/material";

const CarAccessories = () => {
	return (
		<>
			<Navbar />
			<GeneralAlert />
			<Typography variant="h4" sx={{ textAlign: "center", py:1 }}>
				Car Accessories
			</Typography>
			<FrontTabs cardData={Caritems} mainIndex={2} />
		</>
	);
};
export default CarAccessories;
