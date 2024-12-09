import { Player } from "./Player";
import { Team } from "./Team";

// Create some players
const player1 = new Player("Lionel Messi", "Forward");
const player2 = new Player("Cristiano Ronaldo", "Forward");

// Create a team and add players
const team = new Team("FC Dream", [player1, player2]);

// Add more players
const player3 = new Player("Neymar", "Forward");
team.addPlayer(player3);

// Player actions
player1.scoreGoal();
player2.makeAssist();
player2.receiveYellowCard();

// Get stats of added players
console.log(team.getPlayerStats("Lionel Messi"));
console.log(team.getPlayerStats("Cristiano Ronaldo"));
console.log(team.getPlayerStats("Neymar"));

// Remove a player
team.removePlayer("Cristiano Ronaldo");

// List all players
console.log(team.listAllPlayers());

// Get total goals scored by the team
console.log(`Total Goals Scored by the Team: ${team.totalGoalsScored()}`);

  
  