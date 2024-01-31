import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import FitbitIcon from "@mui/icons-material/Fitbit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";
import Kitchenitems from "../KitchenWare";
import Caritems from "../CarAccessories";
import Houseitems from "../HouseWare";


const items = [
	{ id:1, label: "KitchenWare", link: "/KitchenWare", data: Kitchenitems},
	{ id:2, label: "Car Accessories", link: "/CarAccessories", data: Caritems},
	{ id:3, label: "HouseWare", link: "/HouseWare", data: Houseitems},
	{ id:4, label: "HouseWare", link: "/HouseWare",data: Houseitems },
	{ id:5, label: "HouseWare", link: "/HouseWare",data: Houseitems },
	{ id:6, label: "HouseWare", link: "/HouseWare",data: Houseitems },
	{ id:7, label: "HouseWare", link: "/HouseWare",data: Houseitems },
	{ id:8, label: "HouseWare", link: "/HouseWare",data: Houseitems },
	{ id:9,label: "HouseWare", link: "/HouseWare",data: Houseitems },
	{ id:10,label: "HouseWare", link: "/HouseWare",data: Houseitems },
];
const notifications = ["Notification 1"];
const settings = ["Admin"];
const Navbar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component={Link}
						to="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							whiteSpace: "normal",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
							fontSize: "2em",
						}}
					>
						{/* Logo part */}
						{/* VALAM VARIETY SHOP */}
						<IconButton sx={{ color: "white" }}>
							{" "}
							<FitbitIcon sx={{ fontSize: "3em" }} />{" "}
						</IconButton>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{items.map((item) => (
								<MenuItem
									key={item.label}
									component={Link}
									to={{
										pathname: item.link,
									   // Pass the data object in the state
									  }}
									onClick={handleCloseNavMenu}
								>
									<Typography textAlign="center">{item.label}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<Typography
						variant="h5"
						component={Link}
						to="/"
						noWrap
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							whiteSpace: "normal",
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
					<IconButton sx={{ color: "white" }}>
							{" "}
							<FitbitIcon sx={{ fontSize: "1em" }} />{" "}
						</IconButton>
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
							flexWrap: "wrap",
						}}
					>
						{items.map((item) => (
							<Button
								key={item.label}
								component={Link}
								to={item.link}
								onClick={handleCloseNavMenu}
								sx={{ color: "white", display: "block" }}
							>
								{item.label}
							</Button>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>

						{/* notifications css left */}
						{/* <Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								{notifications.length > 0 ? (
									<Badge
										badgeContent={[]}
										color="error"
									>
										<NotificationsIcon
											sx={{ color: "white", fontSize: "2em" }}
										/>
									</Badge>
								) : (
									<NotificationsIcon sx={{ color: "white", fontSize: "2em" }} />
								)}
							</IconButton>
						</Tooltip> */}
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
