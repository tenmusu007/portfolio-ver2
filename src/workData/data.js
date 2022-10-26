const data = [
	{
		title: "Link Tree [React]",
		tech: [{ icon: "logos:react" }],
		to: "Link-Tree",
		pic: [
			`${process.env.PUBLIC_URL}/img/linkTree.png`,
			`${process.env.PUBLIC_URL}/img/linkTree2.png`,
		],
		work: "https://ver1-6.d299m0b6ietato.amplifyapp.com/",
		repoUrl: "https://github.com/tenmusu007/link-tree-ver1.6",
		desc: "Link Tree is link organized web application",
		desc2:
			"Link Tree is link organized web application. The idea came up when I wanted to see my projects easily because I was always sick of needing to go to the repository page or website I use for deploying. There are two primary functions. One of them is  Search Bar. You can search for any title of my work. The result shows up automatically when you type a letter.",
	},
	// {
	// 	title: "Black Jack [JavaScript]",
	// 	tech: [{ icon: "logos:react" }],
	// 	to: "Black-Jack",
	// 	pic: [
	// 		`${process.env.PUBLIC_URL}/img/blackjack.png`,
	// 		`${process.env.PUBLIC_URL}/img/blackjackplay.png`,
	// 	],
	// 	work: "https://tenmusu007.github.io/bj-var.1.0/",
	// 	repoUrl: "https://github.com/tenmusu007/bj-var.1.0",
	// 	desc: "Black Jack is simple card game.",
	// 	desc2:
	// 		"This is my first work with JavaScript. Going through this app, I learned a lot of fundamental JavaScripts. Playing the game side is pretty simple. This is almost the same as the Black Jack. Unfortunately, the betting money system and a few rules weren't implemented.  ",
	// },
	{
		title: "Black Jack ",
		tech: [{ icon: "logos:react" }],
		to: "Black-Jack-React",
		pic: [
			`${process.env.PUBLIC_URL}/img/blackjackReact.png`,
			`${process.env.PUBLIC_URL}/img/bjReactplay.png`,
			`${process.env.PUBLIC_URL}/img/bjReactbet.png`,
		],
		work: "https://main.d35692rvcqwiy8.amplifyapp.com/",
		repoUrl: "https://github.com/tenmusu007/blackjack-react",
		desc: "Black Jack - React has a few more features than.",
		desc2:
			"This is simple blackjack jack game. User will play CPU. Card data come from free cards API. The data is passed between components by UseContext ",
	},
	{
		title: "ToDoList",
		tech: [
			{ icon: "logos:react" },
			{ icon: "logos:typescript-icon" },
			{ icon: "logos:firebase" },
		],
		to: "TodoList-React-TypeScript",
		pic: [
			`${process.env.PUBLIC_URL}/img/todolist.png`,
			`${process.env.PUBLIC_URL}/img/todolist2.png`,
		],
		work: "https://main.d266d346xt5ypn.amplifyapp.com/",
		repoUrl: "https://github.com/tenmusu007/ToDoList-React-ts/tree/main",
		desc: "Simple To Do List",
		desc2:
			"This app is bulited by React-Typescript and Firebase. There is authentication for user. Each user can save their own TodoList. This app has two main features.  one of them is edit function. Even if user created task by mistake, they can edit the task anytime. Another features is checkbox. If user click the checkbox next to the list, todo list can not be able to edit. ",
	},
	{
		title: "Portfolio",
		tech: [{ icon: "logos:react" }, { icon: "logos:material-ui" }],
		to: "Portfolio",
		pic: [
			`${process.env.PUBLIC_URL}/img/portfolio.png`,
			`${process.env.PUBLIC_URL}/img/portfolio.png`,
			`${process.env.PUBLIC_URL}/img/bjReactbet.png`,
		],
		work: "url",
		repoUrl: "http//url",
		desc: "This is my Portfolio",
		desc2:
			"I'm not good at designing things. I like thinking about creating things, though. This time, I spent time on design than coding. I hope you like it.",
	},
	{
		title: "Doctor Appointment",
		tech: [
			{ icon: "logos:react" },
			{ icon: "logos:firebase" },
			{ icon: "logos:mongodb-icon" },
		],
		to: "Doctor Appointment",
		pic: [
			`${process.env.PUBLIC_URL}/img/doctor.png`,
			`${process.env.PUBLIC_URL}/img/doctor2.png`,
		],
		work: "https://doctor-appointment-dusky.vercel.app/home",
		repoUrl: "http//url",
		desc: "appointment application",
		desc2:
			"This is full stack web application. The purpose of this application is that connecting doctor and patient. Four teammates, including me, created this project. I worked on some components and pages as a front-end engineer.",
	},
	{
		title: "Cookit",
		tech: [
			{ icon: "logos:nextjs-icon" },
			{ icon: "logos:typescript-icon" },
			{ icon: "logos:mongodb-icon" },
		],
		to: "Cookit",
		pic: [
			`${process.env.PUBLIC_URL}/img/cookit.png`,
			`${process.env.PUBLIC_URL}/img/cookit2.png`,
		],
		work: "https://cookit-taupe.vercel.app/",
		repoUrl: "https://github.com/tenmusu007/cook-friends/tree/main",
		desc: "organized cooking recipe application",
		desc2:
			"This useful application is for everyone who wastes time thinking about today's dinner.This web application has 4pages. The fridge page, which is one of the main parts, can remember your fridge's current ingredients with the number and date when you add them. When you go home page, you will able to search any recipe by ingredients. Furthermore, when you choose one of the recipes, but you don't have a few ingredients. You can add those ingredients to the shopping list, so when you go to the supermarket, you don't need to remember the ingredients you need to buy for your dinner, Just open the ShoppingList page. You will see what you need  for tonight. There are many recipes on Coookit because we use Spoonacular API for getting recipes.",
	},
];
export default data