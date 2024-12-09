"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(PlayerName, Position, GoalScored, Assists, Yellowcards, RedCards) {
        if (GoalScored === void 0) { GoalScored = 0; }
        if (Assists === void 0) { Assists = 0; }
        if (Yellowcards === void 0) { Yellowcards = 0; }
        if (RedCards === void 0) { RedCards = 0; }
        this.PlayerName = PlayerName;
        this.Position = Position;
        this.GoalScored = GoalScored;
        this.Assists = Assists;
        this.Yellowcards = Yellowcards;
        this.RedCards = RedCards;
    }
    Player.prototype.scoreGoal = function () {
        this.GoalScored++;
    };
    Player.prototype.makeAssist = function () {
        this.Assists++;
    };
    Player.prototype.receiveYellowCard = function () {
        this.Yellowcards++;
    };
    Player.prototype.receiveRedCard = function () {
        this.RedCards++;
    };
    return Player;
}());
exports.Player = Player;
