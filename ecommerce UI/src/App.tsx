import { CssBaseline } from "@mui/material";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import KitchenWare from "./Pages/KitchenWare";
import CarAccessories from "./Pages/CarAccessories";
import HouseWare from "./Pages/HouseWare";

const App = () => {
	return (
		<>
			<CssBaseline />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/KitchenWare" element={<KitchenWare />} />
					<Route path="/CarAccessories" element={<CarAccessories />} />
					<Route path="/HouseWare" element={<HouseWare />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
