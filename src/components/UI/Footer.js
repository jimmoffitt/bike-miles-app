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
			<FooterLink href="https://github.com/jimmoffitt/bike-miles-app" target='_blank'>Project code</FooterLink>
			<FooterLink href="https://github.com/jimmoffitt/bike-miles-app/blob/main/notes/why.md" target='_blank'>Why</FooterLink>
			<FooterLink href="https://github.com/jimmoffitt/bike-miles-app/blob/main/notes/how.md" target='_blank'>How</FooterLink>
			<FooterLink href="https://github.com/jimmoffitt/bike-miles-app/blob/main/notes/next.md" target='_blank'>Next</FooterLink>
		</Column>
		<Column>
			<Heading>Other projects</Heading>
			<FooterLink href="https://github.com/twitterdev/SnowBotDev" target='_blank'>SnowbotDev</FooterLink>
			<FooterLink href="https://github.com/twitterdev/search-tweets-ruby" target='_blank'>Ruby search client</FooterLink>
			<FooterLink href="https://github.com/twitterdev/search-tweets-python" target='_blank'>Python search client</FooterLink>
		</Column>
		<Column>
			<Heading>Areas of focus</Heading>
			<FooterLink href="#" target='_blank'>Developer Relations</FooterLink>
            <FooterLink href="https://github.com/jimmoffitt/SocialFlood" >Weather warning systems</FooterLink>
            <FooterLink href="#" target='_blank'>Writing</FooterLink>
			<FooterLink href="#" target='_blank'>Coding</FooterLink>
		</Column>
		<Column>
			<Heading>Channels</Heading>
            <FooterLink href="https://github.com/jimmoffitt" target='_blank'>
			<i className="fab fa-github">
				<span style={{ marginLeft: "10px" }}>
				GitHub
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://twitter.com/snowman" target='_blank'>
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/jimmoffitt/" target='_blank'>
			<i className="fab fa-linkedin">
				<span style={{ marginLeft: "10px" }}>
				LinkedIn
				</span>
			</i>
			</FooterLink>
            <FooterLink href="#" target='_blank'>
			<i className="fab fa-mastodon">
				<span style={{ marginLeft: "10px" }}>
				Mastodon (coming soon)
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