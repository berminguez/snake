import { useState, useEffect } from 'react';
import GameModeItem from './GameModeItem';
export default function GameModeSelector({ gameMode, setGameMode }) {
  const modeItems = [
    {
      id: 1,
      name: 'Jail',
      slug: 'jail',
    },
    {
      id: 2,
      name: 'Unlimited',
      slug: 'unlimited',
    },
  ];

  if (gameMode === 'jail') {
    var selected = 'text-primary';
  }

  const GameModeItemsList = modeItems.map((item) => (
    <li key={item.id}>
      <GameModeItem item={item} gameMode={gameMode} setGameMode={setGameMode} />
    </li>
  ));
  return (
    <div>
      <span className='font-sans font-light uppercase text-xs text-customwhite'>
        Select game mode:
      </span>
      <div>
        <ul className='flex gap-2'>{GameModeItemsList}</ul>
      </div>
    </div>
  );
}
