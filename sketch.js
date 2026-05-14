//Angel Gabriel Acosta Zazueta
let angulo = 0;

let img;

function preload(){

    img = loadImage(
        'https://upload.wikimedia.org/wikipedia/commons/3/3c/Texture_example.jpg'
    );
}

function setup(){

    createCanvas(1100, 650, WEBGL);
}

function draw(){

    background(20);

    orbitControl();

    // -------------------------
    // ILUMINACIÓN
    // -------------------------

    // Luz ambiental
    ambientLight(50);

    // Luz direccional
    directionalLight(
        255,
        255,
        255,
        1,
        1,
        -1
    );

    // Luz puntual con mouse
    pointLight(
        255,
        200,
        200,
        mouseX - width / 2,
        mouseY - height / 2,
        200
    );

    // -------------------------
    // ESFERA BRILLANTE
    // -------------------------

    push();

    translate(-350, 0, 0);

    rotateY(angulo);

    specularMaterial(255);

    shininess(100);

    sphere(100);

    pop();

    // -------------------------
    // CUBO MATE
    // -------------------------

    push();

    translate(0, 0, 0);

    rotateX(angulo);

    ambientMaterial(200, 80, 80);

    box(170);

    pop();

    // -------------------------
    // OBJETO CON TEXTURA
    // -------------------------

    push();

    translate(350, 0, 0);

    rotateY(angulo);

    texture(img);

    box(170);

    pop();

    // -------------------------
    // OBJETO CON NORMALES
    // -------------------------

    push();

    translate(0, 220, 0);

    rotateX(angulo);

    rotateY(angulo);

    normalMaterial();

    torus(90, 30);

    pop();

    // -------------------------
    // ANIMACIÓN
    // -------------------------

    angulo += 0.01;
}