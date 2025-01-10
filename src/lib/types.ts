export interface Card {
  id: string;
  type: "monster" | "spell" | "rune";
  title: string;
  imgUrl: string;
  activationCost?: number;
  castingCost?: number;
  attack?: number;
  health?: number;
  effect?: string;
}

export interface Player {
  id: string;
  runes: number;
  mana: number;
  maxMana: number;
  hand: Array<Card>;
  deck: Array<Card>;
  activeMonsters: Array<Card>;
}

export interface GameState {
  currentTurn: number;
  players: [Player, Player];
}
