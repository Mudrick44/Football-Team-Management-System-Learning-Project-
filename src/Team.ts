import { Player } from "./Player";

export class Team {
  constructor(public TeamName: string, public Players: Player[]) {}

  // Add player to the team
  addPlayer(Player: Player): void {
    // Check if the player already exists in the team (by name, case-insensitive)
    if (this.Players.some(p => p.PlayerName.toLowerCase() === Player.PlayerName.toLowerCase())) {
      console.log(`${Player.PlayerName} is already in the team.`);
    } else {
      this.Players.push(Player);
    }
  }

  // Remove player by name
  removePlayer(PlayerName: string): void {
    this.Players = this.Players.filter(p => p.PlayerName.toLowerCase() !== PlayerName.toLowerCase());
  }

  // Get player stats
  getPlayerStats(PlayerName: string): string {
    const Player = this.Players.find(p => p.PlayerName.toLowerCase() === PlayerName.toLowerCase());
    if (Player) {
      return `Stats for ${Player.PlayerName}:
        Goals: ${Player.GoalScored}, 
        Assists: ${Player.Assists}, 
        Yellow Cards recieved: ${Player.Yellowcards}, 
        Red Cards: ${Player.RedCards}`;
    } else {
      return `The player ${PlayerName} was not found in the team!`;
    }
  }

  // List all players in the team
  listAllPlayers(): string {
    return this.Players.map(player => player.PlayerName).join(", ");
  }

  // Get total goals scored by all players
  totalGoalsScored(): number {
    return this.Players.reduce((total, player) => total + player.GoalScored, 0);
  }
}

