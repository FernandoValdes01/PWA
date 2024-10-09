let fondo;

function preload() {
  fondo = loadImage('fondo1.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupBirdCards();
}

function draw() {

  background(0, 0, 0, 150); 
  tint(255, 100); 
  image(fondo, 0, 0, width, height);
}

function setupBirdCards() {
  const birdContainer = select('#birdContainer');
  

  const birds = [
    { name: "Chucao", image: "IMG/chucao.jpg", sound: "Sound/chucaosound.mp3", description: "El chucao, también conocido como tricao, ​ tapaculo chucao, ​​ o tapacola chucao, ​ es una especie de ave paseriforme perteneciente a la familia Rhinocryptidae, una de las dos del género Scelorchilus. Es endémica de los bosques templados del centro-sur de Chile" },
    { name: "Loica", image: "IMG/loica.jfif", sound: "Sound/loicasound.mp3", description: "La loica común, pecho colorado, lloica o milico ​​​​ es una especie de ave paseriforme de la familia Icteridae propia del Cono sur sudamericano. Se identifica por su gran mancha roja en su pecho." },
    { name: "Tenca", image: "IMG/tenca.jfif", sound: "Sound/tencasound.mp3", description: "La tenca o sinsonte tenca también llamada trenca o pájaro pantónimo es una especie de ave paseriforme de la familia Mimidae.​ Habita en Chile desde Copiapó hasta la Isla de Chiloé" },
    { name: "Chercán", image: "IMG/chercan.jpg", sound: "Sound/chercansound.mp3", description: "El Troglodytes aedon es llamado ratona o ratona común en parte de Argentina, Bolivia, Paraguay , ratonera en parte de Argentina y en todo Uruguay, corruíra en Brasil, chercán o chercán común en Chile" },
    { name: "Turca", image: "IMG/turca.jfif", sound: "Sound/turcasound.mp3", description: "La turca, ​ también denominada huet-huet turca​ o turco, ​ es una especie de ave paseriforme, una de las tres perteneciente al género Pteroptochos de la familia Rhinocryptidae. Es endémica de Chile.​" },
    { name: "Perdiz", image: "IMG/perdiz.jpg", sound: "Sound/perdizsound.mp3", description: "La perdiz chilena, ​ también llamado tinamú chileno​ o inambú chileno, ​ es un ave de la familia de los tinámidos. Al igual que otras especies de esta familia, es conocida vulgarmente con el nombre de perdiz dada su similitud muy superficial con la perdiz europea." },
    { name: "Tordo", image: "IMG/tordo.jpg", sound: "Sound/tordosound.mp3", description: "El tordo, también conocido como quireo o tordo patagón, ​ es una especie de ave paseriforme de la familia Icteridae propia de las regiones templadas y frías del sudoeste de América del Sur." },
    { name: "Picaflor", image: "IMG/picaflor.jpg", sound: "Sound/picaflorsound.mp3", description: "El Picaflor de Arica (Eulidia yarrellii) es una de las aves más pequeñas del mundo y, sin duda, la menor de Chile." },
    { name: "Loro Tricahue", image: "IMG/lorotricahue.jpg", sound: "Sound/lorosound.mp3", description: "El loro barranquero o loro tricahue es una especie de ave psitaciforme de la familia de los psitácidos que habita en la meseta patagónica y en las laderas de las montañas de la cordillera de los Andes en Argentina y Chile. Es la única especie viviente del género Cyanoliseus." },
  ];

  birds.forEach(bird => {
    const card = createDiv().addClass('bird-card');
    

    const name = createDiv(bird.name).addClass('bird-name');
    name.parent(card);


    const img = createImg(bird.image).addClass('bird-image');
    img.parent(card);
    img.attribute('alt', bird.name);

    const description = createDiv(bird.description).addClass('bird-description');
    description.parent(card);

    const button = createButton('Reproducir sonido').addClass('bird-button');
    button.mousePressed(() => playSound(bird.sound));
    button.parent(card);

    card.parent(birdContainer);
  });
}

function playSound(soundFile) {
  const sound = new Audio(soundFile);
  sound.play();
}