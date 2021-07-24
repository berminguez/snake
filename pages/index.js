import Head from 'next/head';
import GameModeSelector from '../components/GameModeSelector';
import ScoreDisplay from '../components/ScoreDisplay';
import { useState, useEffect, useCallback } from 'react';
import IntentDisplay from '../components/IntentsDisplay';
import MaxScoreDisplay from '../components/MaxScoreDisplay';
import VolumeManager from '../components/VolumeManager';
import SnakeGame from '../components/SnakeGame';
export default function Home() {
  const [score, setscore] = useState(0);
  const [intents, setintents] = useState(0);
  const [maxscore, setmaxscore] = useState(0);
  const [volume, setvolume] = useState(0);

  let width = 32;
  let height = 16;
  let widthsquare = 28;
  let initialsnake = [2, 1, 0];
  let gameActive = 0;
  let appleIndex = 0;
  let velocityInit = 100;
  let velocity = velocityInit;
  let timerId;
  let gameMode = 1;

  const initialApple = Math.floor(Math.random() * width * height);
  const [apple, setapple] = useState(initialApple);

  const [board, setboard] = useState(() => {
    let initialboard = Array(width * height).fill(null);
    let initialsnake = [2, 1, 0];

    initialsnake.map((item) => (initialboard[item] = 'snake'));
    return initialboard;
  });

  useEffect(() => {
    var newboard = board;
    newboard[apple] = 'apple';
    setboard(newboard);
  }, [apple]);

  const [currentSnake, setCurrentSnake] = useState(initialsnake);
  const [direction, setdirection] = useState(1);

  const directionHandler = useCallback(
    (event) => {
      if (event.key === 'ArrowDown') {
        setdirection(width);
      }
      if (event.key === 'ArrowLeft') {
        setdirection(-1);
      }
      if (event.key === 'ArrowRight') {
        setdirection(1);
      }
      if (event.key === 'ArrowUp') {
        setdirection(-width);
      }
    },
    [direction]
  );

  const handleNewHead = (head) => {
    var newHead;
    // UNLIMITED MODE
    var choque = 0;
    //top
    if (head + direction < 0 && direction === -width) {
      newHead = width * (height - 1) + head;
      choque = 1;
    }

    //bottom
    if (head + direction > width * height && direction === width) {
      newHead = head % width;
      choque = 1;
    }

    //right
    if (head % width === width - 1 && direction === 1) {
      newHead = head - (width - 1);
      choque = 1;
    }

    //left
    if (head % width === 0 && direction === -1) {
      newHead = head + (width - 1);
      choque = 1;
    }

    if (choque == 0) {
      newHead = head + direction;
    }

    return newHead;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      var newSnake = currentSnake;

      var head = newSnake[0];

      //Check new head
      var newHead = handleNewHead(head);

      //Check if autodestroy

      //Check if there is an apple
      var isApple = false;
      if (newHead === apple) {
        isApple = true;
        setapple(Math.floor(Math.random() * width * height));
      }

      if (!isApple) {
        newSnake.pop();
      }
      newSnake.unshift(newHead);
      setCurrentSnake(newSnake);

      var newboard = Array(width * height).fill(null);
      currentSnake.map((item) => (newboard[item] = 'snake'));

      newboard[apple] = 'apple';

      setboard(newboard);
    }, 100);
    return () => clearInterval(interval);
  }, [direction, apple]);

  useEffect(() => {
    window.addEventListener('keydown', directionHandler);
  }, []);

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
            <SnakeGame
              board={board}
              currentSnake={currentSnake}
              width={width}
              height={height}
              widthsquare={widthsquare}
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
      </main>
    </>
  );
}
