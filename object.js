let countLoop = 10;
let rotatio = 1
console.log("object   x")
function objectX(){
    console.log("objectX gestartet.");

    let sphere0 = new THREE.DodecahedronGeometry(1.5);
    let material0 = new THREE.MeshLambertMaterial( {color: 0xee5511} );
     ball0 = new THREE.Mesh( sphere0, material0 );
     //ball0.shadow = true
      //  ball0.castShadow = true;
    scene.add(ball0);
 
    ball0.position.y += 3;

    loop();
    
};

setInterval(loop,10)

function loop(){

//console.log("loop "+countLoop +"   Rotation: "+rotatio)
//countLoop += 1;
//rotatio = Math.random()/50;
//ball0.position.y = rotatio
//ball0.rotation.x += 0.002
//ball0.rotation.y += 0.002
ball0.rotation.z -= 0.002

console.log(ball0.rotation.x);


};

objectX;

//console.log("objectX geladen");

//Prototype

