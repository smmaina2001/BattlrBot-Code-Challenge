# BattlrBot-Code-Challenge
Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army! This is our app:

botbattlr image

Here's the scenario: a galactic overlord has hired you, a galactic web developer, to develop a galactic web app that will allow them to browse through a list of robots, view a robot's details, and, enlist a bot into their army.

Live Link
Db.json file - 
For the app - [ ]
Technology Used
ReactJs
Json Server - fetch db.json data
Vercel
VsCode
Instructions
For this project, you’ll be building out a React application that displays a list of available bots, among other features. Try your best to find the right places to insert code into the established code base.

Project Setup
Once you have the plan in place for the application you want to build take the following steps:

Create a new project folder.
Create a new GitHub repository.
Please make sure you regularly commit to the repository.
In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.
Run this command to get the backend started: json-server --watch db.json
Test your server by visiting this route in the browser: http://localhost:8001/bots
Core Deliverables
As a user,I should be able to:

See profiles of all bots rendered in BotCollection.
Add an individual bot to my army by clicking on it. The selected bot should render in the YourBotArmy component. The bot can be enlisted only once. The bot does not disappear from the BotCollection.
Release a bot from my army by clicking on it. The bot disappears from the YourBotArmy component.
Discharge a bot from their service forever, by clicking the red button marked "x", which would delete the bot both from the backend and from the YourBotArmy on the frontend.
Endpoints for Core Deliverables
GET /bots


DELETE /bots/:id


{}

Advanced Deliverables
Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I should be able to:

Choose if I want to enlist a bot into my army or just see their data. Clicking on the card should instead display a show view (BotSpecs) for that bot, which should replace BotsCollection. BotSpecs should have two buttons: one to go back to the list view and another to enlist that bot. Your app could look like the following:
botbattlr image
