import { origins, devilFruits, character, statsLevels} from './probabilites.js';
import { Revolution, formaterPrime, Ship, Emperor, Camp, tailles, ages, randomOuiNonWithProbability, randomHakiLevel, randomGenre, generateStarsHTML, primes } from './utils.js';
import { name } from "./name.js";
import { CorsaireProb, CorsaireProbContre } from './stats.js';

const createbutton = document.querySelector(".create");

if (createbutton) {
  createbutton.addEventListener("click", () => {
    RandomStats();
  });
}

function RandomStats() {
  const RDNBountie = primes();
  const RDNOrigin = origins[Math.floor(Math.random() * origins.length)];
  const RDNDevilFruit = devilFruits[Math.floor(Math.random() * devilFruits.length)];
  const RDNAge = ages();
  const RDNHeight = tailles();
  const RDNCerveau = statsLevels.cerveauLevels[Math.floor(Math.random() * statsLevels.cerveauLevels.length)];
  const RDNVitesse = statsLevels.vitesseLevels[Math.floor(Math.random() * statsLevels.vitesseLevels.length)];
  const RDNForce = statsLevels.forceLevels[Math.floor(Math.random() * statsLevels.forceLevels.length)];
  const RDNAgilité = statsLevels.agilitéLevels[Math.floor(Math.random() * statsLevels.agilitéLevels.length)];
  const RDNEndurance = statsLevels.enduranceLevels[Math.floor(Math.random() * statsLevels.enduranceLevels.length)];
  const RDNCharisme = statsLevels.charismeLevels[Math.floor(Math.random() * statsLevels.charismeLevels.length)];
  const RDNVision = statsLevels.visionLevels[Math.floor(Math.random() * statsLevels.visionLevels.length)];
  const RDNPerception = statsLevels.perceptionLevels[Math.floor(Math.random() * statsLevels.perceptionLevels.length)];
  const RDNRésistance = statsLevels.résistanceLevels[Math.floor(Math.random() * statsLevels.résistanceLevels.length)];
  const RDNHaki = randomHakiLevel();
  const RDNGenre = randomGenre();
  const RDNCorsaire = randomOuiNonWithProbability(CorsaireProb, CorsaireProbContre);
  const RDNEmperor = Emperor(RDNCorsaire);
  const RDNRevoltuion = Revolution(RDNCorsaire, RDNEmperor)
  const RDNArmes =  character.armes[Math.floor(Math.random() * character.armes.length)].label;
  const RDNCamp = Camp(RDNCorsaire, RDNEmperor, RDNRevoltuion);
  const RDNShip = Ship(RDNCamp, RDNCorsaire);
  
  const container = document.getElementsByClassName("stats")[0];
  if (!container) {
    console.warn("Aucun conteneur avec la classe 'stats' trouvé !");
    return;
  }

  const stats = [
    { label: `Nom : ${name()}`, icon: `<i class="fa-solid fa-tag"></i>` },
    { label: `Origine : ${RDNOrigin}`, icon: `<i class="fa-solid fa-globe"></i>` },
    { label: `Fruit du Démon : ${RDNDevilFruit}`, icon: `<i class="fa-solid fa-apple-whole"></i>` },
    { label: `Prime : ${formaterPrime(RDNBountie)} ฿`, icon: `<i class="fa-solid fa-coins"></i>` },
    { label: `Âge : ${RDNAge} ans`, icon: `<i class="fa-solid fa-calendar"></i>` },
    { label: `Taille : ${RDNHeight} m`, icon: `<i class="fa-solid fa-ruler-vertical"></i>` },
    { label: `Armes : ${RDNArmes}`, icon: `<i class="fa-solid fa-gun"></i>`},
    { label: `Cerveau : ${generateStarsHTML(RDNCerveau.value)}`, icon: `<i class="fa-solid fa-brain"></i>` },
    { label: `Vitesse : ${generateStarsHTML(RDNVitesse.value)}`, icon: `<i class="fa-solid fa-bolt"></i>` },
    { label: `Haki : ${RDNHaki}`, icon: `<i class="fa-brands fa-superpowers"></i>` },
    { label: `Force : ${generateStarsHTML(RDNForce.value)}`, icon: `<i class="fa-solid fa-dumbbell"></i>` },
    { label: `Agilité : ${generateStarsHTML(RDNAgilité.value)}`, icon: `<i class="fa-solid fa-person-walking"></i>` },
    { label: `Endurance : ${generateStarsHTML(RDNEndurance.value)}`, icon: `<i class="fa-solid fa-battery-full"></i>` },
    { label: `Charisme : ${generateStarsHTML(RDNCharisme.value)}`, icon: `<i class="fa-solid fa-comment"></i>` },
    { label: `Vision : ${generateStarsHTML(RDNVision.value)}`, icon: `<i class="fa-solid fa-eye"></i>` },
    { label: `Perception : ${generateStarsHTML(RDNPerception.value)}`, icon: `<i class="fa-solid fa-glasses"></i>` },
    { label: `Résistance : ${generateStarsHTML(RDNRésistance.value)}`, icon: `<i class="fa-solid fa-shield"></i>` },
    { label: `Genre : ${RDNGenre}`, icon: `<i class="fa-solid fa-person"></i>` },
    { label: `Camp : ${RDNCamp}`, icon: `<i class="fa-solid fa-users"></i>`},
    { label: `Navire : ${RDNShip}`, icon: `<i class="fa-solid fa-sailboat"></i>`},
  ];  

  container.innerHTML = "";

  stats.forEach((stats) => {
    const p = document.createElement("p");
    p.innerHTML = `${stats.icon} ${stats.label}`;
    container.appendChild(p);
  });
}