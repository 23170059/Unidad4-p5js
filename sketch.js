let angulo = 0;

function setup() {

    createCanvas(1000, 600, WEBGL);

}

function draw() {

    background(20);

    orbitControl();

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

    // Luz puntual controlada con mouse
    pointLight(
        255,
        200,
        200,
        mouseX - width / 2,
        mouseY - height / 2,
        200
    );

    // Esfera brillante
    push();

    translate(-250, 0, 0);

    specularMaterial(255);

    shininess(100);

    rotateY(angulo);

    sphere(100);

    pop();

    // Cubo mate
    push();

    translate(0, 0, 0);

    ambientMaterial(200, 80, 80);

    rotateX(angulo);

    box(150);

    pop();

    // Toro con normales
    push();

    translate(250, 0, 0);

    normalMaterial();

    rotateZ(angulo);

    torus(80, 25);

    pop();

    // Incremento de animación
    angulo += 0.01;
}