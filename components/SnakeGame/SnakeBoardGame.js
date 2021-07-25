import Square from './Square';
import React, { useState, useEffect } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';

class SnakeBoardGame extends React.Component {
  constructor(props) {
    super(props);
    this.handlegameMode = this.handlegameMode.bind(this);
  }

  handlegameMode(event) {
    console.log(this.props.gameMode);
    return this.props.gameMode;
  }

  componentDidMount() {
    let score = 0;
    let ints = 1;
    let squares = [];
    let direction = 1;
    let gameActive = false;
    let appleIndex = 0;
    let velocityInit = 100;
    let velocity = velocityInit;
    let timerId;
    let gameMode = this.props.gameMode;
    let currentSnake = [2, 1, 0];
    let width = this.props.width;
    let height = this.props.height;
    let setscore = this.props.setscore;
    let setintents = this.props.setintents;
    let setmaxscore = this.props.setmaxscore;
    let maxscore = this.props.maxscore;
    let handlegameMode = this.handlegameMode;
    //const BoardRender = board.map((item, key) => (
    //  <Square key={key} widthsquare={widthsquare} type={item} />
    //));

    function createStartScreen() {
      //Create overlay
      const overlay = document.createElement('div');
      overlay.setAttribute('id', 'gamesnake-overlay');
      overlay.classList.add(
        'opacity-80',
        'absolute',
        'bg-customblack',
        'w-full',
        'h-full'
      );

      grid.appendChild(overlay);

      const startbutton = document.createElement('a');
      startbutton.setAttribute('id', 'gamesnake-startbutton');
      startbutton.href = '#';
      startbutton.classList.add(
        'px-6',
        'py-2',
        'bg-secondary',
        'text-customwhite',
        'font-sans',
        'uppercase',
        'absolute'
      );

      startbutton.style.left = '50%';
      startbutton.style.top = '50%';
      startbutton.style.transform = 'translate(-50%, -50%)';
      startbutton.innerHTML = 'Start';

      grid.appendChild(startbutton);

      startbutton.addEventListener('click', () => {
        startGame();
      });
    }

    function deleteStartScreen() {
      //quit overlay and buttton
      var startbutton = document.getElementById('gamesnake-startbutton');
      var overlay = document.getElementById('gamesnake-overlay');

      startbutton.remove();
      overlay.remove();
    }

    function createGrid(width, height, widthsquare) {
      //create elements
      for (let i = 0; i < width * height; i++) {
        const square = document.createElement('div'); //<div></div>

        //put in our grid
        grid.appendChild(square);
        square.classList.add('border-2'); //<div class="square"></div>
        square.classList.add('bg-boardbg');
        square.style.height = widthsquare + 'px';
        square.style.width = widthsquare + 'px'; //<div class="square" style="width: 15px; height:15px"></div>
        //add styling to theses elementes

        //create array of squares
        squares.push(square);
      }

      createStartScreen();
    }

    function calculateNewHead() {
      var head = currentSnake[0];
      var newHead = head;

      if (gameMode == 'jail') {
        newHead = head + direction;
      }

      if (gameMode == 'unlimited') {
        var choque = 0;
        //top
        if (head + direction < 0 && direction === -width) {
          newHead = width * (height - 1) + head;
          choque = 1;
        }

        //bottom
        if (head + direction > squares.length && direction === width) {
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
      }

      return newHead;
    }

    function generateApple() {
      do {
        //generate random number
        appleIndex = Math.floor(Math.random() * squares.length);
      } while (squares[appleIndex].classList.contains('bg-primary'));
      squares[appleIndex].classList.remove('bg-boardbg');
      squares[appleIndex].classList.add('bg-apple');
    }

    function checkApples() {
      //Deal with apple contact
      var isApple = false;
      if (squares[currentSnake[0]].classList.contains('bg-apple')) {
        //remove the class of apple
        squares[currentSnake[0]].classList.remove('bg-apple');
        //grow our snake by adding class of snake to it
        squares[currentSnake[0]].classList.add('bg-primary');
        //generate new apple
        generateApple();
        //add one to the score
        //increaseScore();
        score = score + 1;
        setscore(score);
        isApple = true;
      }
      return isApple;
    }

    function checkWalls() {
      var head = currentSnake[0];

      if (gameMode == 'jail') {
        //Check walls
        if (
          //bottom
          (head + width > width * height && direction === width) ||
          //top
          (head - width < 0 && direction === -width) ||
          //right
          (head % width === width - 1 && direction === 1) ||
          //left
          (head % width === 0 && direction === -1) ||
          squares[currentSnake[0] + direction].classList.contains('snake')
        ) {
          return false;
        } else {
          return true;
        }
      }

      if (gameMode == 'unlimited') {
        //Check snake
        if (head + direction < 0) {
          head = width * (height - 1) + head;
        } else {
          head = head + direction;
        }
        return true;
      }
    }

    function finishGame() {
      gameActive = false;
      if (score > maxscore) {
        maxscore = score;
        setmaxscore(score);
      }
      setintents(ints++);
      clearInterval(timerId);
      createStartScreen();
    }

    function checkAutoDestroy(newHead) {
      var ok = true;
      if (squares[newHead].classList.contains('bg-primary')) {
        ok = false;
      }
      return ok;
    }

    function move() {
      var newHead = calculateNewHead();

      var ok = checkWalls();

      if (ok) {
        ok = checkAutoDestroy(newHead);
      }

      if (!ok) {
        finishGame();
        return;
      }

      var isApple = checkApples();
      if (!isApple) {
        //remove last element from our snake
        var tail = currentSnake.pop();

        //remove styling from last element if there is not an apple
        squares[tail].classList.remove('bg-primary');
        squares[tail].classList.add('bg-boardbg');
      }

      //add new element
      currentSnake.unshift(newHead);

      squares[newHead].classList.add('bg-primary');
      squares[newHead].classList.remove('bg-boardbg');
    }

    function control(e) {
      //39 is right
      //38 is up
      //37 is left
      //40 is down

      switch (e.keyCode) {
        case 37:
          //left
          if (direction != 1) {
            direction = -1;
          }
          break;
        case 38:
          //up
          if (direction != width) {
            direction = -width;
          }
          break;
        case 39:
          //right
          if (direction != -1) {
            direction = 1;
          }
          break;
        case 40:
          //down
          if (direction != -width) {
            direction = width;
          }
          break;

        case 27:
          finishGame();
          break;

        default:
      }
    }

    function startGame() {
      direction = 1;

      score = 0;
      setscore(score);

      gameActive = true;

      deleteStartScreen();

      gameMode = handlegameMode();

      squares.map((square) => {
        square.classList.remove('bg-primary');
        square.classList.remove('bg-apple');
        square.classList.add('bg-boardbg');
      });
      currentSnake = [2, 1, 0];

      currentSnake.forEach((index) => {
        squares[index].classList.remove('bg-boardbg');
        squares[index].classList.add('bg-primary');
      });

      generateApple();

      document.addEventListener('keydown', control);

      timerId = setInterval(move, velocity);
    }

    var grid = document.getElementById('gridSnake');
    createGrid(this.props.width, this.props.height, this.props.widthsquare);

    currentSnake.forEach((index) => {
      squares[index].classList.remove('bg-boardbg');
      squares[index].classList.add('bg-primary');
    });

    addEventListener('keydown', (e) => {
      if (e.code === 'Space' && gameActive === false) {
        startGame();
      }
    });
  }

  render() {
    return (
      <div className=' w-full'>
        <div
          id='gridSnake'
          className='gridSnake flex flex-wrap bg-secondary mx-auto relative'
          style={{
            width: this.props.width * this.props.widthsquare + 'px',
            height: this.props.height * this.props.widthsquare + 'px',
          }}
        ></div>
      </div>
    );
  }
}
export default SnakeBoardGame;
