import { GODRICK_SOLIDER } from "@/lib/cards";
import { Card, GameState } from "@/lib/types";
import { useState } from "react";

const DEFAULT_DECK: Array<Card> = [
  GODRICK_SOLIDER,
  GODRICK_SOLIDER,
  GODRICK_SOLIDER,
  GODRICK_SOLIDER,
  GODRICK_SOLIDER,
  GODRICK_SOLIDER,
  GODRICK_SOLIDER,
  GODRICK_SOLIDER,
  GODRICK_SOLIDER,
  GODRICK_SOLIDER,
];

const INITIAL_GAME_STATE: GameState = {
  currentTurn: 0,
  players: [
    { id: "1", runes: 0, mana: 0, maxMana: 2, activeMonsters: [], deck: DEFAULT_DECK, hand: [] },
    { id: "1", runes: 0, mana: 0, maxMana: 2, activeMonsters: [], deck: DEFAULT_DECK, hand: [] },
  ],
};

export const Index: React.FC = (): React.JSX.Element => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);
  return (
    <>
      <div className="w-screen h-screen"></div>
    </>
  );
};
