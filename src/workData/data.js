import link from "../img/linkTree.png";
import link2 from "../img/linkTree2.png";
import BJ from "../img/blackjack.png";
import BJ2 from "../img/blackjackplay.png";
import BJR1 from "../img/blackjackReact.png";
import BJR2 from "../img/bjReactplay.png";
import BJR3 from "../img/bjReactbet.png";
import PF1 from "../img/portfolio.png";
import PF2 from "../img/portfolio.png";
import PF3 from "../img/bjReactbet.png";

const data = [
	{
		title: "Link Tree",
		to: "Link-Tree",
		pic: [link, link2],
		work: "https://main.d299m0b6ietato.amplifyapp.com/",
		repoUrl: "https://github.com/tenmusu007/link-tree-ver1.6",
		desc: "Link Tree is link organized web application",
		desc2:
			"Link Tree is link organized web application. The idea came up when I wanted to see my projects easily because I was always sick of needing to go to the repository page or website I use for deploying. There are two primary functions. One of them is  Search Bar. You can search for any title of your work. The result shows up automatically when you type a letter.",
	},
	{
		title: "Black Jack",
		to: "Black-Jack",
		pic: [BJ, BJ2],
		work: "https://tenmusu007.github.io/bj-var.1.0/",
		repoUrl: "https://github.com/tenmusu007/bj-var.1.0",
		desc: "Black Jack is simple card game.",
		desc2:
			"This is my first work with Java Script. Going through this app, I learned a lot of fundamental Java scripts. Playing the game side is pretty simple. This is almost the same as the honest Black Jack. Unfortunately, the betting money system and a few rules weren't implemented.  ",
	},
	{
		title: "Black Jack - React",
		to: "Black-Jack-React",
		pic: [BJR1, BJR2, BJR3],
		work: "https://main.d35692rvcqwiy8.amplifyapp.com/",
		repoUrl: "https://github.com/tenmusu007/blackjack-react",
		desc: "Black Jack - React has a few more features than.",
		desc2:
			"I was able to create Blackjack more quickly and with additional features than last time. In the previous Blackjack, the card pictures were managed with images, but this time we used the open source Card Api to display them. The data is passed between components, and UseContext, unique to React, is used to give data well.",
	},
	{
		title: "Portfolio",
		to: "Portfolio",
		pic: [PF1, PF2, PF3],
		work: "url",
		repoUrl: "http//url",
		desc: "This is my Portfolio",
	},
];
export default data;
