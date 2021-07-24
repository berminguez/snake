import Head from 'next/head';
import GameModeSelector from '../components/GameModeSelector';
import ScoreDisplay from '../components/ScoreDisplay';
import { useState } from 'react';
import IntentDisplay from '../components/IntentsDisplay';
import MaxScoreDisplay from '../components/MaxScoreDisplay';
import VolumeManager from '../components/VolumeManager';
export default function Home() {
  const [score, setscore] = useState(0);
  const [intents, setintents] = useState(0);
  const [maxscore, setmaxscore] = useState(0);
  const [volume, setvolume] = useState(0);
  return (
    <>
      <Head>
        <title>Snake Game</title>
      </Head>

      <main className='container max-w-4xl m-auto'>
        <div className='grid grid-cols-1 gap-4 '>
          <div className='flex justify-between gap-4 flex-wrap'>
            <GameModeSelector />
            <ScoreDisplay score={score} />
          </div>
          <div>
            <div className='bg-primary h-96 w-full'></div>
          </div>
          <div>
            <div className='flex justify-end gap-4 items-center'>
              <IntentDisplay intents={intents} />
              <MaxScoreDisplay maxscore={maxscore} />
              <VolumeManager volume={volume} setvolume={setvolume} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
