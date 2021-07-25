import GameModeSelector from '../GameModeSelector';
import ScoreDisplay from '../ScoreDisplay';
import { useState, useEffect, useCallback } from 'react';
import IntentDisplay from '../IntentsDisplay';
import MaxScoreDisplay from '../MaxScoreDisplay';
import VolumeManager from '../VolumeManager';
import SnakeBoardGame from './SnakeBoardGame';

export default function SnakeGame() {
  const [score, setscore] = useState(0);
  const [intents, setintents] = useState(0);
  const [maxscore, setmaxscore] = useState(0);
  const [volume, setvolume] = useState(0);
  const [gameMode, setGameMode] = useState('jail');

  return (
    <div className='grid grid-cols-1 gap-4 '>
      <div className='flex justify-between gap-4 flex-wrap'>
        <GameModeSelector gameMode={gameMode} setGameMode={setGameMode} />
        <ScoreDisplay score={score} />
      </div>
      <div>
        <SnakeBoardGame
          width={32}
          height={16}
          widthsquare={28}
          gameMode={gameMode}
          setscore={setscore}
          setintents={setintents}
          maxscore={maxscore}
          setmaxscore={setmaxscore}
        />
      </div>
      <div>
        <div className='flex justify-end gap-4 items-center'>
          <IntentDisplay intents={intents} />
          <MaxScoreDisplay maxscore={maxscore} />
          <VolumeManager volume={volume} setvolume={setvolume} />
        </div>
      </div>
    </div>
  );
}
