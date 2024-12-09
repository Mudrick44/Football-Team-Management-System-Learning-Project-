"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
var Team = /** @class */ (function () {
    function Team(TeamName, Players) {
        this.TeamName = TeamName;
        this.Players = Players;
    }
    // Add player to the team
    Team.prototype.addPlayer = function (Player) {
        // Check if the player already exists in the team (by name, case-insensitive)
        if (this.Players.some(function (p) { return p.PlayerName.toLowerCase() === Player.PlayerName.toLowerCase(); })) {
            console.log("".concat(Player.PlayerName, " is already in the team."));
        }
        else {
            this.Players.push(Player);
        }
    };
    // Remove player by name
    Team.prototype.removePlayer = function (PlayerName) {
        this.Players = this.Players.filter(function (p) { return p.PlayerName.toLowerCase() !== PlayerName.toLowerCase(); });
    };
    // Get player stats
    Team.prototype.getPlayerStats = function (PlayerName) {
        var Player = this.Players.find(function (p) { return p.PlayerName.toLowerCase() === PlayerName.toLowerCase(); });
        if (Player) {
            return "Stats for ".concat(Player.PlayerName, ":\n        Goals: ").concat(Player.GoalScored, ", \n        Assists: ").concat(Player.Assists, ", \n        Yellow Cards: ").concat(Player.Yellowcards, ", \n        Red Cards: ").concat(Player.RedCards);
        }
        else {
            return "The player ".concat(PlayerName, " was not found in the team!");
        }
    };
    // List all players in the team
    Team.prototype.listAllPlayers = function () {
        return this.Players.map(function (player) { return player.PlayerName; }).join(", ");
    };
    // Get total goals scored by all players
    Team.prototype.totalGoalsScored = function () {
        return this.Players.reduce(function (total, player) { return total + player.GoalScored; }, 0);
    };
    return Team;
}());
exports.Team = Team;
