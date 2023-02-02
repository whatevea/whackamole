import { slotsGenerator } from "./modules.js";
import Slots from "./slots.js"

export default class playScene extends Phaser.Scene{
    constructor(){
        super({key:"playScene"})
    }
    preload(){

    }
    create(){
        this.scoreNum=0;
        this.score=this.add.text(100,7,"Score: 0 ",{ fontFamily: 'evilFont' ,fontSize:310});
        this.add.image(0,0,"bg").setOrigin(0,0).setScale(2)
        // console.log("playscene started")
        // let a1= new Slots(this,100,200);
     //generate nine slots and add them to group
     this.slotPool= []; 
     slotsGenerator(this);

     //randomize and show mouse every n second
     this.time.addEvent({
        delay:1300,
        callback:function(){
            let randomNum=Phaser.Math.Between(0,8);
            this.slotPool[randomNum].rise();
        },
        callbackScope:this,
        loop:true

     })
    }

    update(){

    }
}