
export default class Slots {
    constructor(scene,x,y){
        this.scene=scene;
        this.x=x;
        this.y=y;
    }
    show(){
        this.image=this.scene.add.sprite(this.x,this.y,"slots");
        this.image.setFrame(5);
        //Set interactive
        this.image.setInteractive();
        this.image.on("pointerdown",function(){
         
    
            if(this.image.anims.currentFrame.index === 3 || this.image.anims.currentFrame.index === 0 ) {
                //score logic
                this.score();
                console.log("scored")

            }
            else {
                console.log("not scored")
            }
        },this)        
  

    }
    rise(){
        this.image.play("rise");
        
    }
    score(){
        //when scored 
        this.scene.scoreNum++;
        this.scene.score.text= "Score : "+ this.scene.scoreNum;
        this.image.play("died");
        
        
    }
    
}