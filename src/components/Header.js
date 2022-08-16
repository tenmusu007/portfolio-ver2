// import { Typography } from '@mui/material'
import React from "react";
import { StyledHeader } from "./styles/Header.styles";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useMediaQuery } from "@mui/material";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

const drawerWidth = 240;
const navItems = [
	{
		name: "Work",
		to: "#work",
	},
	{
		name: "About me",
		to: "#aboutme",
	},
	{
		name: "Contact",
		to: "#contact",
	},
];

export const Header = (props) => {
	const matches = useMediaQuery("(min-width:600px)");
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container =
		window !== undefined ? () => window().document.body : undefined;
	return (
		<StyledHeader>
			{matches && (
				<div className='headerImg'>
					<p>AT</p>
				</div>
			)}
			{matches ? (
				<div className='headerMenu'>
					<AnchorLink href='#aboutme'>
						<p className='HeaderAboutMe'>About me</p>
					</AnchorLink>
					<AnchorLink href='#work'>
						<p className='HeaderWork'>Work</p>
					</AnchorLink>
					<AnchorLink href='#contact'>
						<p className='HeaderContact'>Contact</p>
					</AnchorLink>
				</div>
			) : (
				<Box sx={{ display: "flex" }}>
					<AppBar component='nav' color='second'>
						<Toolbar>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								edge='start'
								onClick={handleDrawerToggle}
								sx={{ mr: 2, display: { sm: "none" } }}
							>
								<MenuIcon />
							</IconButton>
							<Typography
								variant='h6'
								component='div'
								sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
							>
								AT
							</Typography>
						</Toolbar>
					</AppBar>
					<Box component='nav'>
						<Drawer
							className='menuTxt'
							container={container}
							variant='temporary'
							open={mobileOpen}
							onClose={handleDrawerToggle}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
							sx={{
								display: { xs: "block", sm: "none" },
								"& .MuiDrawer-paper": {
									boxSizing: "border-box",
									width: drawerWidth,
								},
							}}
						>
							<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
								<p className='headerImg'>AT</p>
								<Divider />
								<List>
									{navItems.map((item, index) => (
										<ListItem key={index} disablePadding>
											<ListItemButton
												sx={{
													textAlign: "center",
													fontSize: "15px",
													margin: "15px 0",
													fontFamily: "sans-serif",
												}}
											>
												<p className='menuTxt'>
													<AnchorLink href={`${item.to}`}>
														{item.name}
													</AnchorLink>
												</p>
											</ListItemButton>
										</ListItem>
									))}
								</List>
							</Box>
						</Drawer>
					</Box>
				</Box>
			)}
		</StyledHeader>
	);
};
