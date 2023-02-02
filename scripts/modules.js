import Slots from "./slots.js";

export  function enableDrag(scene, obj) {

    obj.setInteractive();
    scene.input.setDraggable(obj);

    scene.input.on('drag', function (pointer, obj, dragX, dragY) {

        obj.x = dragX;
        obj.y = dragY;

    });
    scene.input.on('dragend', function (pointer, obj) {
        console.log(obj.x, obj.y);
    });
}
export function slotsGenerator(scene){
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
         let x=300 + col * 200;
        let y= 300 + row * 200;
        let a= new Slots(scene,x,y);
        a.show();
        scene.slotPool.push(a)
        
    }
      }
      
      
}