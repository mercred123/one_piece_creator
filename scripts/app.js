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
  "Génie stratégique",
  "Très intelligent",
  "Moyennement malin",
  "Pas futé",
  "Vraiment bête",
  "Complètement à l’ouest",
  "Pas présente",
];
const vitesseLevels = [
  "Téléportation",
  "Vitesse de la lumière",
  "Ultra rapide",
  "Très rapide",
  "Rapide",
  "Moyen",
  "Lent",
  "Vraiment lent",
  "À le mérite de savoir marcher",
];
const forceLevels = [
  "Force divine",
  "Force surhumaine",
  "Force titanesque",
  "Très fort",
  "Fort",
  "Moyenne",
  "Faible",
  "Très faible",
  "Incapable de soulever une plume",
];
const agilitéLevels = [
  "Agilité divine",
  "Agilité surnaturelle",
  "Réflexes ultra-rapides",
  "Très agile",
  "Agile",
  "Moyenne",
  "Un peu gauche",
  "Lent dans les mouvements",
  "Un pied gauche",
];
const enduranceLevels = [
  "Endurance infinie",
  "Endurance surhumaine",
  "Endurance extrême",
  "Très endurant",
  "Endurant",
  "Moyenne",
  "Peu endurant",
  "Fatigue rapide",
  "S'essouffle en montant des escaliers",
];
const charismeLevels = [
  "Charisme irrésistible",
  "Charisme magnétique",
  "Charisme exceptionnel",
  "Très charismatique",
  "Charismatique",
  "Moyen",
  "Manque de charisme",
  "Difficile à écouter",
  "Présence inexistante",
];
const visionLevels = [
  "Vision divine",
  "Vision au-delà de l'humaine",
  "Vision parfaite",
  "Vision aiguisée",
  "Vision normale",
  "Vision moyenne",
  "Vision floue",
  "Difficile pour voir de loin",
  "Nécessite des lunettes",
];
const perceptionLevels = [
  "Perception omnisciente",
  "Perception ultra-développée",
  "Perception affinée",
  "Très perceptif",
  "Perceptif",
  "Moyenne",
  "Peu perceptif",
  "Ne remarque pas l'évidence",
  "Ne détecte même pas les bruits autour de soi",
];
const résistanceLevels = [
  "Résistance absolue",
  "Résistance surhumaine",
  "Très résistant",
  "Résistant",
  "Moyenne",
  "Faible résistance",
  "Très faible résistance",
  "Fragile",
  "Brisé par une brise légère",
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
    `Cerveau : ${RDNCerveau}`,
    `Vitesse : ${RDNVitesse}`,
    `Haki : ${RDNHaki}`,
    `Force : ${RDNForce}`,
    `Agilité : ${RDNAgilité}`,
    `Endurance : ${RDNEndurance}`,
    `Charisme : ${RDNCharisme}`,
    `Vision : ${RDNVision}`,
    `Perception : ${RDNPerception}`,
    `Résistance : ${RDNRésistance}`,
    `Grand Corsaire : ${RDNCorsaire}`,
    `Genre : ${RDNGenre}`,
  ];

  container.innerHTML = "";

  stats.forEach((stats) => {
    const p = document.createElement("p");
    p.textContent = stats;
    container.appendChild(p);
  });
}

function ages() {
  let age = randomInt(16, 150);
  return age;
}

function primes() {
  let primes = randomHundreds(10000, 10000000000);
  return primes;
}

function tailles() {
  let tailles = randomHeightMeters(1.6, 8);
  return tailles;
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
