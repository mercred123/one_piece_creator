import { origins, devilFruits, statsLevels} from './probabilites.js';
import { randomInt, formaterPrime, tailles, ages, randomHundreds, randomHeightMeters, randomOuiNon, randomOuiNonWithProbability, randomHakiLevel, randomGenre, generateStarsHTML, primes } from './utils.js';
import { name } from "./name.js";

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
    statsLevels.cerveauLevels[Math.floor(Math.random() * statsLevels.cerveauLevels.length)];
  const RDNVitesse =
  statsLevels.vitesseLevels[Math.floor(Math.random() * statsLevels.vitesseLevels.length)];
  const RDNForce = statsLevels.forceLevels[Math.floor(Math.random() * statsLevels.forceLevels.length)];
  const RDNAgilité =
  statsLevels.agilitéLevels[Math.floor(Math.random() * statsLevels.agilitéLevels.length)];
  const RDNEndurance =
  statsLevels.enduranceLevels[Math.floor(Math.random() * statsLevels.enduranceLevels.length)];
  const RDNCharisme =
  statsLevels.charismeLevels[Math.floor(Math.random() * statsLevels.charismeLevels.length)];
  const RDNVision =
  statsLevels.visionLevels[Math.floor(Math.random() * statsLevels.visionLevels.length)];
  const RDNPerception =
  statsLevels.perceptionLevels[Math.floor(Math.random() * statsLevels.perceptionLevels.length)];
  const RDNRésistance =
  statsLevels.résistanceLevels[Math.floor(Math.random() * statsLevels.résistanceLevels.length)];
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