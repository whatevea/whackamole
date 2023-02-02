import {enableDrag} from './modules.js';
export default class gameScene extends Phaser.Scene{
    constructor(){
        super({key:"gameScene"})
    }
    preload(){
    
    }
    create(){
    this.add.image(0,0,"bg").setOrigin(0,0).setScale(2)
    let startText= this.add.text(363,344, 'Kill All the Moles ', { fontFamily: 'evilFont' ,fontSize:40});
    let startBtn=this.add.text(440,410,"Start",{ fontFamily: 'evilFont' ,fontSize:50});
    startBtn.setInteractive();
    startBtn.on("pointerdown",
    function () {
        this.scene.scene.start("playScene")

    })
}
    update(){
    
    }
    
    
    }