export default class startScreen extends Phaser.Scene{
constructor(){
    super({key:"startScreen"})
}
preload(){

    this.load.image("mountain","assets/image.png");
this.load.image("bg","assets/bg.png")
this.load.spritesheet("slots","assets/125whack.png",{
    frameWidth:125,
    frameHeight:125
})

}
create(){

    //phaser animation simple code
    this.anims.create({

        key:"died",

        frames:this.anims.generateFrameNumbers('slots',{frames:[1,2,4,5]}),

        frameRate:11,

        repeat:0



    });

    window.anim1=this.anims.create({

        key:"rise",

        frames:this.anims.generateFrameNumbers('slots',{frames:[3,0,3,5]}),

        frameRate:7,

        repeat:0,


    });
    this.scene.start("gameScene")

}
update(){

}


}
