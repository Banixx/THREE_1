console.log("baseone.js geladen")


function init() {

  
  // use the defaults
  var stats = initStats();
  var renderer = initRenderer();
  var camera = initCamera();
    camera.position.x =6;
    camera.position.y =10;
    camera.position.z = -10;
    camera.lookAt(0,0,0);
    
var controls = new THREE.OrbitControls(camera, renderer.domElement);
    

//Liecht
let liecht = new THREE.AmbientLight(0xaa66bb, 0.7);
scene.add(liecht)

let liechtSpot = new THREE.SpotLight(0xdddddd);
liechtSpot.position.set(0,20,-10);
liechtSpot.castShadow = true;
scene.add(liechtSpot);
//liechtSpot.shadowCameraVisible = true;


let liechtSpotHelper = new THREE.SpotLightHelper(liechtSpot);
scene.add(liechtSpotHelper);

    let zeiger = new THREE.AxesHelper (5);
    scene.add(zeiger);
    zeiger.position.x =-5.5; 
    zeiger.position.z =+5.5; 
    
    //Grid
    let grid = new THREE.GridHelper (10,10,0x11ddee);
         grid.rotation.y =Math.PI / 4*90;
             grid.rotation.z =Math.PI / 4*90;
    grid.position.z =+5;
    grid.position.y =+5;
    scene.add(grid);
    
    let gridy = new THREE.GridHelper (10,10,0x2277ee);
    scene.add(gridy);
    gridy.rotation.z =Math.PI / 4*90;
    gridy.position.x =-5;
    gridy.position.y =+5;

    let gridz = new THREE.GridHelper (10,10,0x227722);
     // gridy.rotation.y =Math.PI / 4*90;
     gridz.position.y =+0.1;

    scene.add(gridz );


  
  

//Untergrund

let plane0 = new THREE.PlaneGeometry(30,30);
let material0 = new THREE.MeshLambertMaterial ({color: 0x448822});
material0.side =THREE.DoubleSide;
let planeMesh = new THREE.Mesh(plane0, material0);
planeMesh.receiveShadow.enabled = true;
scene.add(planeMesh);
planeMesh.rotation.x = Math.PI / 4*90;


    objectX();


  //var step = 0;
  // call the render function
  render();
  function render() {
    stats.update();
    
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
}