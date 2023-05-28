<script setup>
import { reactive, ref, onMounted, onUnmounted } from 'vue';

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});

const gameBegin = ref(false);
const gameOver = ref(false);
const winner = ref(false);
const score = ref(0);
const winScore = 10;
const EMPTY_CELL = 0;
const SNAKE_CELL = 1;
const FOOD_CELL = 2;
const boardSizeX = 15;
const boardSizeY = 30;
const board = reactive(Array(boardSizeY)
    .fill(null)
    .map(() => Array(boardSizeX).fill(EMPTY_CELL)));
const foodRemaining = reactive(Array(winScore).fill(true));


let foodX, foodY;
let headX = 7, headY = 25;
let snakeBodies = [[headX, headY]];
let velocityX = 0, velocityY = 0;
let intervalId;
let time = 200;

const handleGameWin = () => {
  console.log('game win');
  winner.value = true;
};

const handleGameOver = () => {
  console.log('game over');
  gameOver.value = true;
};

const updateFoodPosition = () => {
  foodX = Math.floor(Math.random() * boardSizeX);
  foodY = Math.floor(Math.random() * boardSizeY);
};

function drawFood() {
  board[foodY][foodX] = {type: FOOD_CELL, size: 0.5};
}

function drawSnake() {
  snakeBodies.forEach(([y, x], i) => {
    let opacity = (snakeBodies.length - i) / snakeBodies.length;
    if (i === 0) { // head of the snake
      let snakeDirection = '';
      if (velocityX > 0) snakeDirection = 'right';
      else if (velocityX < 0) snakeDirection = 'left';
      else if (velocityY > 0) snakeDirection = 'down';
      else if (velocityY < 0) snakeDirection = 'up';
      board[y][x] = { type: SNAKE_CELL, direction: snakeDirection, opacity: opacity };
    } else {
      board[y][x] = { type: SNAKE_CELL, direction: 'none', opacity: opacity };
    }
  });
}

const snakeStyle = (cell) => {
  if (cell.type === SNAKE_CELL) {
    let borderRadius = '';
    switch (cell.direction) {
      case 'up':
        borderRadius = '50% 50% 0 0';
        break;
      case 'down':
        borderRadius = '0 0 50% 50%';
        break;
      case 'left':
        borderRadius = '50% 0 0 50%';
        break;
      case 'right':
        borderRadius = '0 50% 50% 0';
        break;
      default:
        borderRadius = '0';
    }
    return { 'border-radius': borderRadius, 'opacity': cell.opacity };
  }
  return {};
}

const handleKeydown = (e) => {
  switch (e.key) {
    case 'ArrowUp':
      velocityX = 0;
      velocityY = -1;
      break;
    case 'ArrowDown':
      velocityX = 0;
      velocityY = 1;
      break;
    case 'ArrowLeft':
      velocityX = -1;
      velocityY = 0;
      break;
    case 'ArrowRight':
      velocityX = 1;
      velocityY = 0;
      break;
  }
};

function clearBoard() {
  for (let i = 0; i < boardSizeY; i++) {
    for (let j = 0; j < boardSizeX; j++) {
      board[i][j] = EMPTY_CELL;
    }
  }
}

function checkSnakeCollision() {
  const [headY, headX] = snakeBodies[0];
  for (let i = 1; i < snakeBodies.length; i++) {
    const [bodyY, bodyX] = snakeBodies[i];
    if (headX === bodyX && headY === bodyY) {
      return true;
    }
  }
  return false;
}

const startGame = () => {
  gameBegin.value = true;
  gameOver.value = false;
  headX = 7;
  headY = 25;
  velocityX = 0;
  velocityY = 0;
  score.value = 0;
  snakeBodies = [
    [headY, headX]  // changed here
  ];
  foodRemaining.fill(true);
  updateFoodPosition();
  intervalId = setInterval(initGame, time);
};

const initGame = () => {
  if (!gameBegin.value) return;
  if (gameOver.value) {
    clearInterval(intervalId);
    return;
  }
  if (winner.value) {
    clearInterval(intervalId);
    return;
  }

  headX += velocityX;
  headY += velocityY;

  if (headX === foodX && headY === foodY) {
    updateFoodPosition();
    snakeBodies.push([foodY, foodX]);
    score.value++;
    foodRemaining[score.value - 1] = false;

    if (score.value === winScore) {
      handleGameWin();
      return;
    }
  }


  if (headX < 0 || headX >= boardSizeX || headY < 0 || headY >= boardSizeY || checkSnakeCollision()) {
    handleGameOver();
    return;
  }

  snakeBodies.pop();
  snakeBodies.unshift([headY, headX]);

  clearBoard();
  drawFood();
  drawSnake();
}
</script>


<template>
  <div id="game">
    <div class="wrapper">
      <div class="screw"><span></span><span></span></div>
      <div class="screw"><span></span><span></span></div>
      <div class="screw"><span></span><span></span></div>
      <div class="screw"><span></span><span></span></div>
      <div class="game">
        <div class="game-board">
          <div v-for="(row, y) in board" :key="y" class="row">
            <div v-for="(cell, x) in row" :key="x" class="cell">
              <div v-if="cell && cell.type === FOOD_CELL" class="food"></div>
              <div v-if="cell && cell.type === SNAKE_CELL" class="snake" :style="snakeStyle(cell)"></div>
            </div>
          </div>
        </div>
        <div class="lunch">
          <div v-if="gameOver">
            <h2 class="info">Game Over!</h2>
            <a @click="startGame">start-again</a>
          </div>
          <div v-if="winner">
            <h2 class="info">Well Done!</h2>
            <a @click="startGame">play-again</a>
          </div>
          <div v-if="!gameOver && !winner && !gameBegin">
            <button class="start-game" @click="startGame">start-game</button>
          </div>
        </div>
      </div>

      <div class="informations">
        <div class="commands">
          <div class="instruction">
            <p>// use keyboard</p>
            <p>// arrows to play</p>
          </div>
          <div class="controls">
            <div class="controls-up">
              <img src="/assets/caret-up.svg" alt="">
            </div>
            <div class="controls-left">
              <img src="/assets/caret-left.svg" alt="">
            </div>
            <div class="controls-down">
              <img src="/assets/caret-down.svg" alt="">
            </div>
            <div class="controls-right">
              <img src="/assets/caret-right.svg" alt="">
            </div>
          </div>
          <div>

          </div>
        </div>
        <div class="game-details">
          <p>// food left</p>
          <div class="food-left">
            <div v-for="(food, index) in foodRemaining" :key="index" class="food" :class="{ 'food-eaten': !food }"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="light-green"></div>
    <div class="light-blue"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/variables";
#game{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper{
  z-index: 4;
  position: relative;
  display: flex;
  width: 500px;
  height: 500px;
  padding: 25px;
  background: linear-gradient(145deg, #175553, rgba(67, 217, 173, 0.13)70%);
  border: #010C15 2px solid;
  border-radius: 8px;
  box-shadow: 0 0 100px 50px rgba(52, 87, 220, 0.1);
}
.screw{
  width: 15px;
  height: 15px;
  background: #114944;
  border-radius: 50%;
  box-shadow: 0 20px 40px rgba(52, 87, 220, 0.2);
}
.screw span:nth-child(1){
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background-color: #163355;
  width: 8px;
  height: 1px;
}
.screw span:nth-child(2){
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background-color: #163355;
  width: 1px;
  height: 8px;
}
.screw:nth-child(1){
  position: absolute;
  top: 5px;
  left: 5px;
}
.screw:nth-child(2){
  position: absolute;
  top: 5px;
  right: 5px;
}
.screw:nth-child(3){
  position: absolute;
  bottom: 5px;
  left: 5px;
}
.screw:nth-child(4){
  position: absolute;
  bottom: 5px;
  right: 5px;
}

.start-game{
  background-color: #FEA55F;
  border-radius: 8px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
.lunch{
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
}
.lunch .info{
  color: #43D9AD;
  padding: 10px 0;
  background: rgba(1, 22, 39, 0.84);
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 400;
}
.lunch a{
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
.lunch a:hover{
  color: #43D9AD;
}

.game{
  position: relative;
  display: flex;
  width: 225px;
  height: 450px;
}
.game-board {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(15, 1fr);  /* match with boardSizeX */
  grid-template-rows: repeat(30, 1fr);  /* match with boardSizeY */
  background: rgba(1, 22, 39, 0.84);
  border-radius: 8px;
}
.row {
  display: contents;  /* this makes the .row element act as if it isn't there */
}
.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
}
.snake{
  width: 15px;
  height: 15px;
  background: #43D9AD;
}
.food-left{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 20px;
  margin-top: 20px;
}
.food{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  -webkit-box-shadow: 0 0 0 3px rgba(67, 217, 173, 0.3), 0 0 0 6px rgba(67, 217, 173, 0.1);
  box-shadow: 0 0 0 3px rgba(67, 217, 173, 0.3), 0 0 0 6px rgba(67, 217, 173, 0.1);
  background: #43D9AD;
}
.food-eaten {
  opacity: 0.5;
}

.informations{
  width: 50%;
  padding-left: 10px;
}
.commands{
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: rgba(1, 22, 39, 0.3);
  border-radius: 5px;
}
.instruction{
  color: #b8c6dc;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 10px;
}
.controls{
  display: grid;
  grid-template: repeat(2, 1fr) /  repeat(3, 1fr);
  grid-gap: 5px;
}

.controls div{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 10px 0;
  text-align: center;
  font-size: 1rem;
  color: white;
  background-color: #010C15;
  border-radius: 8px;
}
.controls-up{
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}
.controls-left{
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.controls-down{
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
.controls-right{
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}
.controls div img{
  width: 30px;
  height: 30px;
}


.game-details{
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: #b8c6dc;
  font-weight: 500;
  font-size: 1rem;
}


@media screen and (max-width: 800px) {
  .wrapper {
    width: 90vmin;
    height: 115vmin;
  }

  .game-details {
    font-size: 1rem;
    padding: 15px 27px;
  }

  .controls {
    display: flex;
  }

  .controls i {
    padding: 15px 0;
    font-size: 1rem;
  }
}

.light-green {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  z-index: 3;
  box-shadow: #43d9ad -50px -100px 200px 70px;
  animation: lightAnimateGreen 10s linear infinite;
}

.light-blue {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  z-index: 3;
  box-shadow: #4d5bce 50px 100px 200px 70px;
  animation: lightAnimateBlue 10s linear infinite;
}

@keyframes lightAnimateGreen {
  0% {
    box-shadow: #43d9ad 0 0 10000px 100px;
  }
  25% {
    box-shadow: #43d9ad 100px 100px 10000px 100px;
  }
  50% {
    box-shadow: #43d9ad -100px 100px 10000px 100px;
  }
  100% {
    box-shadow: #43d9ad 0 0 10000px 100px;
  }
}
@keyframes lightAnimateBlue {
  0% {
    box-shadow: #4d5bce 0 0 10000px 100px;
  }
  25% {
    box-shadow: #4d5bce -100px -100px 10000px 100px;
  }
  50% {
    box-shadow: #4d5bce 100px -100px 10000px 100px;
  }
  100% {
    box-shadow: #4d5bce 0 0 10000px 100px;
  }
}
</style>