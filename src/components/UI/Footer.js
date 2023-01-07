import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	{/* <h3 style={{ color: "green",
				textAlign: "center",
				marginTop: "-20px",
             }}>
		 "(about this project)"
	</h3> */}
	<Container>
		<Row>
		<Column>
			<Heading>About project</Heading>
			<FooterLink href="#">Why</FooterLink>
			<FooterLink href="#">How</FooterLink>
			<FooterLink href="#">Next</FooterLink>
		</Column>
		<Column>
			<Heading>Areas of focus</Heading>
			<FooterLink href="#">Developer Relations</FooterLink>
            <FooterLink href="#">Weather warning systems</FooterLink>
            <FooterLink href="#">Writing</FooterLink>
			<FooterLink href="#">Coding</FooterLink>
		</Column>
		<Column>
			<Heading>Other projects</Heading>
			<FooterLink href="#">SnowbotDev</FooterLink>
			<FooterLink href="#">Ruby search client</FooterLink>
			<FooterLink href="#">Python search client</FooterLink>
		</Column>
		<Column>
			<Heading>Channels</Heading>
            <FooterLink href="#">
			<i className="fab fa-github">
				<span style={{ marginLeft: "10px" }}>
				GitHub
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
            <FooterLink href="#">
			<i className="fab fa-linkedin">
				<span style={{ marginLeft: "10px" }}>
				LinkedIn
				</span>
			</i>
			</FooterLink>
            <FooterLink href="#">
			<i className="fab fa-mastodon">
				<span style={{ marginLeft: "10px" }}>
				Mastodon
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;