// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const melkMeisje = new Model('assets/models/vermeer/export_museumprops.babylon.gltf');
melkMeisje.setPosition(-0.293, -0.05, -2.57);
melkMeisje.setScale(100, 100, 100);
melkMeisje.setRotation(0, 45.45, 0);

// create a model
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');
cuberoom.setPosition(0, 0, 0);
cuberoom.setScale(-.5, 0.5, 0.5);
cuberoom.setRotation(-0.76, -36.95, 0);


// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-3, 0, -5);

// create some text
const lamText = new Text('Lisser Art Museum');
lamText.setPosition(-0.1, 2.2, -2.9);
lamText.setFontsize(10);
lamText.setScale(0.5, 0.5, 0.5)
lamText.setRotation(0, -38, 0);

// create an image
const image1 = new XRImage('assets/images/Lisse-049.jpg');
image1.setPosition(-1.4, 1.9, -1.4);
image1.setRotation(-0.74, 43, 178);
image1.setScale(1.5, 1.5, 1.5);

// create an imageí
const image2 = new XRImage('assets/images/FolkertdeJong.jpg');
image2.setPosition(2, 1.9, -1);
image2.setRotation(0, -39, -1);
image2.setScale(1.5, 1.5, 1.5);

// create an imageí
const image3 = new XRImage('assets/images/Lisse-043.jpg');
image3.setPosition(2.1, 1.9, 0.7);
image3.setRotation(0, -127, 0);
image3.setScale(1.5, 1.5, 1.5);


// create a 360 image
const image360 = new Sky('assets/LamIngang.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-1, 2, 3.7);
spotLight.setTarget(melkMeisje);

// listen for an event
image1.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk ‘Food Chain Project’ van kunstenaar Itamar Gilboa.");
image1.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
image2.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Werkplaats van kunstenaar Folkert de Jong");
image2.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
image3.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk van kunstenaar Sabine Tol");
image3.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");

melkMeisje.addEventListener('click', () => 
    document.getElementById('extraText').innerHTML = "Melkmeisje van Vermeer");