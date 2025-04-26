import { name } from "./name.js";

const origins = [
  "East Blue",
  "West Blue",
  "North Blue",
  "South Blue",
  "Grand Line",
  "Red Line",
  "Skypiea",
  "Wano Kuni",
  "Water 7",
  "Alabasta",
  "Dressrosa",
  "Sabaody",
  "Punk Hazard",
  "Egghead",
  "Whole Cake Island",
  "Zou",
  "Fishman Island",
  "Elbaf",
];
const devilFruits = [
  "Fruit du Caoutchoutier (Gomu Gomu no Mi)",
  "Fruit du Feu (Mera Mera no Mi)",
  "Fruit de la Glace (Hie Hie no Mi)",
  "Fruit du Séisme (Gura Gura no Mi)",
  "Fruit des Ténèbres (Yami Yami no Mi)",
  "Fruit de l’Opération (Ope Ope no Mi)",
  "Fruit du Mochi (Mochi Mochi no Mi)",
  "Fruit des Âmes (Soru Soru no Mi)",
  "Fruit des Fils (Ito Ito no Mi)",
  "Fruit du Phénix (Tori Tori no Mi : Modèle Phénix)",
  "Fruit du Dragon Azur (Uo Uo no Mi : Modèle Seiryu)",
  "Fruit du Dieu Soleil (Nika Nika no Mi)",
  "Fruit du Bouddha (Hito Hito no Mi : Modèle Daibutsu)",
  "Fruit de la Barrière (Bari Bari no Mi)",
  "Fruit de la Bombe (Bomu Bomu no Mi)",
  "Fruit du Grignotage (Baku Baku no Mi)",
  "Fruit de la Copie (Mane Mane no Mi)",
  "Fruit du Poison (Doku Doku no Mi)",
  "Fruit de l’Ombre (Kage Kage no Mi)",
];
const cerveauLevels = [
  { text: "Génie absolu", value: 10 },
  { text: "Génie stratégique", value: 9 },
  { text: "Très intelligent", value: 8 },
  { text: "Intelligent", value: 7 },
  { text: "Moyennement malin", value: 6 },
  { text: "Pas très malin", value: 5 },
  { text: "Pas futé", value: 4 },
  { text: "Vraiment bête", value: 3 },
  { text: "Complètement à l’ouest", value: 2 },
  { text: "Esprit absent", value: 1 },
];
const vitesseLevels = [
  { text: "Omniprésence instantanée", value: 10 },
  { text: "Téléportation", value: 9 },
  { text: "Vitesse de la lumière", value: 8 },
  { text: "Ultra rapide", value: 7 },
  { text: "Très rapide", value: 6 },
  { text: "Rapide", value: 5 },
  { text: "Moyen", value: 4 },
  { text: "Lent", value: 3 },
  { text: "Vraiment lent", value: 2 },
  { text: "Se traîne péniblement", value: 1 },
];
const forceLevels = [
  { text: "Force divine", value: 10 },
  { text: "Force surhumaine", value: 9 },
  { text: "Force titanesque", value: 8 },
  { text: "Force colossale", value: 7 },
  { text: "Très fort", value: 6 },
  { text: "Fort", value: 5 },
  { text: "Moyenne", value: 4 },
  { text: "Faible", value: 3 },
  { text: "Très faible", value: 2 },
  { text: "Incapable de soulever une plume", value: 1 },
];
const agilitéLevels = [
  { text: "Agilité divine", value: 10 },
  { text: "Agilité surnaturelle", value: 9 },
  { text: "Réflexes ultra-rapides", value: 8 },
  { text: "Réflexes impressionnants", value: 7 },
  { text: "Très agile", value: 6 },
  { text: "Agile", value: 5 },
  { text: "Moyenne", value: 4 },
  { text: "Un peu gauche", value: 3 },
  { text: "Lent dans les mouvements", value: 2 },
  { text: "Un pied gauche", value: 1 },
];
const enduranceLevels = [
  { text: "Endurance légendaire", value: 10 },
  { text: "Endurance infinie", value: 9 },
  { text: "Endurance surhumaine", value: 8 },
  { text: "Endurance extrême", value: 7 },
  { text: "Très endurant", value: 6 },
  { text: "Endurant", value: 5 },
  { text: "Moyenne", value: 4 },
  { text: "Peu endurant", value: 3 },
  { text: "Fatigue rapide", value: 2 },
  { text: "S'essouffle en montant des escaliers", value: 1 },
];
const charismeLevels = [
  { text: "Charisme divin", value: 10 },
  { text: "Charisme irrésistible", value: 9 },
  { text: "Charisme magnétique", value: 8 },
  { text: "Charisme exceptionnel", value: 7 },
  { text: "Très charismatique", value: 6 },
  { text: "Charismatique", value: 5 },
  { text: "Moyen", value: 4 },
  { text: "Manque de charisme", value: 3 },
  { text: "Difficile à écouter", value: 2 },
  { text: "Présence inexistante", value: 1 },
];
const visionLevels = [
  { text: "Vision divine", value: 10 },
  { text: "Vision surhumaine", value: 9 },
  { text: "Vision parfaite", value: 8 },
  { text: "Vision exceptionnelle", value: 7 },
  { text: "Vision aiguisée", value: 6 },
  { text: "Vision normale", value: 5 },
  { text: "Vision moyenne", value: 4 },
  { text: "Vision floue", value: 3 },
  { text: "Vision très floue", value: 2 },
  { text: "Quasi-aveugle sans lunettes", value: 1 },
];
const perceptionLevels = [
  { text: "Perception utlime", value: 10 },
  { text: "Perception omnisciente", value: 9 },
  { text: "Perception ultra-développée", value: 8 },
  { text: "Perception affinée", value: 7 },
  { text: "Très perceptif", value: 6 },
  { text: "Perceptif", value: 5 },
  { text: "Moyenne", value: 4 },
  { text: "Peu perceptif", value: 3 },
  { text: "Ne remarque pas l'évidence", value: 2 },
  { text: "Ne détecte même pas les bruits autour de soi", value: 1 },
];
const résistanceLevels = [
  { text: "Résistance absolue", value: 10 },
  { text: "Résistance surhumaine", value: 9 },
  { text: "Très résistant", value: 8 },
  { text: "Résistant", value: 7 },
  { text: "Moyenne", value: 6 },
  { text: "bonne résistance", value: 5 },
  { text: "Faible résistance", value: 4 },
  { text: "Très faible résistance", value: 3 },
  { text: "Fragile", value: 2 },
  { text: "Brisé par une brise légère", value: 1 },
];
const hakiLevels = [
  { level: "Haki des Rois", probability: 1 },
  { level: "Haki de l'Armement", probability: 20 },
  { level: "Haki de l'Observation", probability: 40 },
  { level: "aucun haki", probability: 69 },
];

const genre = [
  { level: "Homme", probability: 90 },
  { level: "Femme", probability: 10 },
];

const createbutton = document.querySelector(".create");

if (createbutton) {
  createbutton.addEventListener("click", () => {
    RandomStats();
  });
}

function RandomStats() {
  const RDNBountie = primes();
  const RDNOrigin = origins[Math.floor(Math.random() * origins.length)];
  const RDNDevilFruit =
    devilFruits[Math.floor(Math.random() * devilFruits.length)];
  const RDNAge = ages();
  const RDNHeight = tailles();
  const RDNCerveau =
    cerveauLevels[Math.floor(Math.random() * cerveauLevels.length)];
  const RDNVitesse =
    vitesseLevels[Math.floor(Math.random() * vitesseLevels.length)];
  const RDNForce = forceLevels[Math.floor(Math.random() * forceLevels.length)];
  const RDNAgilité =
    agilitéLevels[Math.floor(Math.random() * agilitéLevels.length)];
  const RDNEndurance =
    enduranceLevels[Math.floor(Math.random() * enduranceLevels.length)];
  const RDNCharisme =
    charismeLevels[Math.floor(Math.random() * charismeLevels.length)];
  const RDNVision =
    visionLevels[Math.floor(Math.random() * visionLevels.length)];
  const RDNPerception =
    perceptionLevels[Math.floor(Math.random() * perceptionLevels.length)];
  const RDNRésistance =
    résistanceLevels[Math.floor(Math.random() * résistanceLevels.length)];
  const RDNHaki = randomHakiLevel();
  const RDNCorsaire = randomOuiNonWithProbability(2, 98);
  const RDNGenre = randomGenre();

  const container = document.getElementsByClassName("stats")[0];
  if (!container) {
    console.warn("Aucun conteneur avec la classe 'stats' trouvé !");
    return;
  }

  const stats = [
    `Nom : ${name()}`,
    `Origine : ${RDNOrigin}`,
    `Fruit du Démon : ${RDNDevilFruit}`,
    `Prime : ${formaterPrime(RDNBountie)} ฿`,
    `Âge : ${RDNAge} ans`,
    `Taille : ${RDNHeight} m`,
    `Cerveau : ${generateStarsHTML(RDNCerveau.value)}`,
    `Vitesse : ${generateStarsHTML(RDNVitesse.value)}`,
    `Haki : ${RDNHaki}`,
    `Force : ${generateStarsHTML(RDNForce.value)}`,
    `Agilité : ${generateStarsHTML(RDNAgilité.value)}`,
    `Endurance : ${generateStarsHTML(RDNEndurance.value)}`,
    `Charisme : ${generateStarsHTML(RDNCharisme.value)}`,
    `Vision : ${generateStarsHTML(RDNVision.value)}`,
    `Perception : ${generateStarsHTML(RDNPerception.value)}`,
    `Résistance : ${generateStarsHTML(RDNRésistance.value)}`,
    `Grand Corsaire : ${RDNCorsaire}`,
    `Genre : ${RDNGenre}`,
  ];

  container.innerHTML = "";

  stats.forEach((stats) => {
    const p = document.createElement("p");
    p.innerHTML = stats;
    container.appendChild(p);
  });
}

function ages() {
  let age = randomInt(14, 90);
  return age;
}

function primes() {
  let chance = Math.random();
  if (chance < 0.7) {
    return randomHundreds(500_000, 300_000_000); 
  } else if (chance < 0.95) {
    return randomHundreds(300_000_001, 1_500_000_000);
  } else {
    return randomHundreds(1_500_000_001, 5_000_000_000);
  }
}


function tailles() {
  let chance = Math.random();
  if (chance < 0.9) {
    return randomHeightMeters(1.5, 2.2);
  } else {
    return randomHeightMeters(2.3, 5);
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomHundreds(min, max) {
  const random = randomInt(min, max);
  return Math.round(random / 100) * 100;
}

function randomHeightMeters(min, max) {
  const height = Math.random() * (max - min) + min;
  return height.toFixed(1);
}

function formaterPrime(nombre) {
  if (nombre >= 1_000_000_000) {
    return (nombre / 1_000_000_000).toFixed(2).replace(".", ",") + " milliards";
  } else if (nombre >= 1_000_000) {
    return (nombre / 1_000_000).toFixed(2).replace(".", ",") + " millions";
  } else if (nombre >= 1_000) {
    return (nombre / 1_000).toFixed(2).replace(".", ",") + " mille";
  } else {
    return nombre + "";
  }
}

function randomOuiNon() {
  return Math.random() < 0.5 ? "oui" : "non";
}
function randomOuiNonWithProbability(probOui, probNon) {
  const total = probOui + probNon;
  const random = Math.random() * total;
  return random < probOui ? "oui" : "non";
}

function randomHakiLevel() {
  const totalProbability = hakiLevels.reduce(
    (acc, haki) => acc + haki.probability,
    0
  );
  const random = Math.random() * totalProbability;

  let cumulativeProbability = 0;
  for (let i = 0; i < hakiLevels.length; i++) {
    cumulativeProbability += hakiLevels[i].probability;
    if (random < cumulativeProbability) {
      return hakiLevels[i].level;
    }
  }
}

function randomGenre() {
  const totalProbability = genre.reduce(
    (acc, haki) => acc + haki.probability,
    0
  );
  const random = Math.random() * totalProbability;

  let cumulativeProbability = 0;
  for (let i = 0; i < genre.length; i++) {
    cumulativeProbability += genre[i].probability;
    if (random < cumulativeProbability) {
      return genre[i].level;
    }
  }
}

function generateStarsHTML(value) {
  let starsHTML = "";
  for (let i = 1; i <= 10; i++) {
    if (i <= value) {
      starsHTML += `<span style="color: gold;">★</span>`;
    } else {
      starsHTML += `<span style="color: gray;">★</span>`;
    }
  }
  return starsHTML;
}