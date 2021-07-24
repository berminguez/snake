import Square from './Square';
import { useState, useEffect } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';
export default function SnakeGame({
  board,
  currentSnake,
  width,
  height,
  widthsquare,
  setboard,
  setCurrentSnake,
}) {
  let score = 0;
  let maxscore = 0;
  let ints = 0;
  let squares = [];
  let direction = 1;
  let gameActive = 0;
  let appleIndex = 0;
  let velocityInit = 100;
  let velocity = velocityInit;
  let timerId;
  let gameMode = 1;

  const BoardRender = board.map((item, key) => (
    <Square key={key} widthsquare={widthsquare} type={item} />
  ));

  return (
    <div className=' w-full'>
      <div
        className='gridSnake flex flex-wrap bg-secondary mx-auto '
        style={{
          width: width * widthsquare + 'px',
          height: height * widthsquare + 'px',
        }}
      >
        {BoardRender}
      </div>
    </div>
  );
}
