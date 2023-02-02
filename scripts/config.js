import  startScreen  from "./startscreen.js";
import  gameScene  from "./gamescene.js";
import playScene from "./playScene.js";

const gameConfig = {
  width: 1200,
  height: 800,
  type: Phaser.AUTO,
  scale:{mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH},
  audio: {
    disableWebAudio: true
  },
  scene : [startScreen,gameScene,playScene]}
export default gameConfig;

