import GameModeSelector from '../GameModeSelector';
import ScoreDisplay from '../ScoreDisplay';
import { useState, useEffect, useCallback } from 'react';
import IntentDisplay from '../IntentsDisplay';
import MaxScoreDisplay from '../MaxScoreDisplay';
import VolumeManager from '../VolumeManager';
import SnakeBoardGame from './SnakeBoardGame';
import Spinner from './Spinner';
import Legend from './legend';

export default function SnakeGame() {
  const [score, setscore] = useState(0);
  const [intents, setintents] = useState(0);
  const [maxscore, setmaxscore] = useState(0);
  const [volume, setvolume] = useState(0);
  const [gameMode, setGameMode] = useState('jail');

  const [width, setwidth] = useState(16);
  const [height, setheight] = useState(16);
  const [widthsquare, setwidthsquare] = useState(20);

  const [isLoaded, setisLoaded] = useState(false);
  useEffect(() => {
    //const width = window.
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    console.log(screenWidth);

    if (screenWidth > 520) {
      setwidth(24);
      setheight(16);
      setwidthsquare(20);
    }

    if (screenWidth > 640) {
      setwidth(30);
      setheight(18);
      setwidthsquare(20);
    }

    if (screenWidth > 768) {
      setwidth(32);
      setheight(16);
      setwidthsquare(28);
    }

    setisLoaded(true);
  }, []);

  return (
    <div className='grid grid-cols-1 gap-4 px-6 md:px-0'>
      <div className='flex justify-between gap-4 flex-wrap'>
        <GameModeSelector gameMode={gameMode} setGameMode={setGameMode} />
        <ScoreDisplay score={score} />
      </div>
      <div>
        {isLoaded ? (
          <SnakeBoardGame
            width={width}
            height={height}
            widthsquare={widthsquare}
            gameMode={gameMode}
            setscore={setscore}
            setintents={setintents}
            maxscore={maxscore}
            setmaxscore={setmaxscore}
          />
        ) : (
          <Spinner />
        )}
      </div>
      <div>
        <div className='flex justify-end gap-4 items-center'>
          <IntentDisplay intents={intents} />
          <MaxScoreDisplay maxscore={maxscore} />
          <VolumeManager volume={volume} setvolume={setvolume} />
        </div>
      </div>

      <div>
        <Legend />
      </div>
    </div>
  );
}
