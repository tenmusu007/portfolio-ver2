import React from "react";
import { StyledFooter } from "./styles/Footer.styled";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useLinkContext } from "../useContext/linkContext";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const Footer = () => {
	const { link, setLink } = useLinkContext();
	return (
		<StyledFooter>
			<p onClick={() => setLink({ loop: !link.loop })}>
				<AnchorLink href='#home'>
					<KeyboardDoubleArrowUpIcon color='black' className='arrow' />
				</AnchorLink>
			</p>
		</StyledFooter>
	);
};

export default Footer;
