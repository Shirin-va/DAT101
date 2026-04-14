"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import {
startGame,
resetWorld,
setSoundMuted,
soundMuted,
EGameStatus,
hero,
} from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu {
#spTitle;
#spPlayBtn;
#spInfoText;
#spCountDown;
#sfCountDown;
#sfRunning;
#spGameScore;

#spGameOver;
#spMedal;
#spFinalScore;
#spHighScore;
#highScore;

constructor(aSpcvs, aSPI) {
this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);

this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 235, 260);
this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));

this.#spInfoText = new TSprite(aSpcvs, aSPI.infoText, 190, 120);
this.#spInfoText.index = 0;
this.#spInfoText.visible = false;

this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
this.#spCountDown.visible = false;

this.#sfCountDown = null;
this.#sfRunning = null;

this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
this.#spGameScore.alpha = 0.5;

this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 175, 120);
this.#spGameOver.visible = false;

this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 200, 155);
this.#spMedal.visible = false;

this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 315, 150);
this.#spFinalScore.visible = false;

this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 315, 185);
this.#spHighScore.visible = false;

this.#highScore = 0;
}

incGameScore(aScore) {
this.#spGameScore.value += aScore;
}

resetGameScore() {
this.#spGameScore.value = 0;
}

stopSound() {
if (this.#sfRunning) {
this.#sfRunning.stop();
}
}

draw() {
this.#spTitle.draw();
this.#spInfoText.draw();
this.#spCountDown.draw();
this.#spGameScore.draw();
this.#spGameOver.draw();
this.#spMedal.draw();
this.#spFinalScore.draw();
this.#spHighScore.draw();
this.#spPlayBtn.draw();
}

countDown() {
this.#spCountDown.value--;

if (this.#spCountDown.value > 0) {
setTimeout(this.countDown.bind(this), 1000);
} else {
this.#spCountDown.visible = false;
this.#spInfoText.visible = false;
this.#spGameScore.visible = true;

this.#sfRunning = new TSoundFile(fnRunning);
if (!soundMuted) {
this.#sfRunning.play();
}

startGame();
}
}

spPlayBtnClick() {
hero.restart();
resetWorld();
this.resetGameScore();

this.#spPlayBtn.visible = false;
this.#spTitle.visible = false;
this.#spGameOver.visible = false;
this.#spMedal.visible = false;
this.#spFinalScore.visible = false;
this.#spHighScore.visible = false;

this.#spGameScore.visible = true;
this.#spInfoText.visible = true;

EGameStatus.state = EGameStatus.countDown;

this.#spCountDown.visible = true;
this.#spCountDown.value = 3;

this.#sfCountDown = new TSoundFile(fnCountDown);
if (!soundMuted) {
this.#sfCountDown.play();
}

setTimeout(this.countDown.bind(this), 1000);
}

showGameOver() {
this.stopSound();

this.#spCountDown.visible = false;
this.#spInfoText.visible = false;
this.#spGameScore.visible = false;

this.#spGameOver.visible = true;
this.#spPlayBtn.visible = true;
this.#spMedal.visible = true;
this.#spFinalScore.visible = true;
this.#spHighScore.visible = true;

const score = this.#spGameScore.value;
this.#spFinalScore.value = score;

if (score > this.#highScore) {
this.#highScore = score;
}

this.#spHighScore.value = this.#highScore;

if (score >= 3) {
this.#spMedal.index = 3;
} else if (score === 2) {
this.#spMedal.index = 2;
} else if (score === 1) {
this.#spMedal.index = 1;
} else {
this.#spMedal.index = 0;
}
}

setSoundMute(aIsMuted) {
setSoundMuted(aIsMuted);

if (this.#sfRunning) {
if (aIsMuted) {
this.#sfRunning.pause();
} else {
this.#sfRunning.play();
}
}

if (this.#sfCountDown) {
if (aIsMuted) {
this.#sfCountDown.pause();
} else {
this.#sfCountDown.play();
}
}
}
}
