"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = require("../src/Player");
var Team_1 = require("../src/Team");
// Create some players
var player1 = new Player_1.Player("Lionel Messi", "Forward");
var player2 = new Player_1.Player("Cristiano Ronaldo", "Forward");
// Create a team and add players
var team = new Team_1.Team("FC Dream", [player1, player2]);
// Add more players
var player3 = new Player_1.Player("Neymar", "Forward");
team.addPlayer(player3);
// Player actions
player1.scoreGoal();
player2.makeAssist();
player2.receiveYellowCard();
// Get stats
// Remove a player
team.removePlayer("Cristiano Ronaldo");
// List all players
console.log(team.listAllPlayers());
// Get total goals scored by the team
console.log("Total Goals Scored by the Team: ".concat(team.totalGoalsScored()));
