export class Player {
    constructor(
      public PlayerName: string,
      public Position: string,
      public GoalScored: number = 0,
      public Assists: number = 0,
      public Yellowcards: number = 0,
      public RedCards: number = 0
    ) {}
  
    scoreGoal(): void {
      this.GoalScored++;
    }
  
    makeAssist(): void {
      this.Assists++;
    }
  
    receiveYellowCard(): void {
      this.Yellowcards++;
    }
  
    receiveRedCard(): void {
      this.RedCards++;
    }
  }
  