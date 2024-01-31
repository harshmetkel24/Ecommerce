import React from "react";
import { FrontTabs } from "../Components/FrontTabs";
import Kitchenitems from "../KitchenWare";
import { GeneralAlert, Navbar } from "../Components";
import { Typography } from "@mui/material";

const KitchenWare = () => {
     
	return (
		<>
		<Navbar />
		<GeneralAlert />
		<Typography variant="h4" sx={{textAlign:"center", py:1}}>Kitchen Ware</Typography>
			<FrontTabs cardData={Kitchenitems} mainIndex={1} />
		</>
	)
};

export default KitchenWare;
