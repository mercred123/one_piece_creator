import { hakiLevels, genre } from "./probabilites.js";

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formaterPrime(nombre) {
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
export function tailles() {
  let chance = Math.random();
  if (chance < 0.9) {
    return randomHeightMeters(1.5, 2.2);
  } else {
    return randomHeightMeters(2.3, 5);
  }
}

export function ages() {
  let age = randomInt(14, 90);
  return age;
}

export function randomHundreds(min, max) {
  const random = randomInt(min, max);
  return Math.round(random / 100) * 100;
}

export function randomHeightMeters(min, max) {
  const height = Math.random() * (max - min) + min;
  return height.toFixed(1);
}

export function randomOuiNon() {
  return Math.random() < 0.5 ? "oui" : "non";
}

export function randomOuiNonWithProbability(probOui, probNon) {
  const total = probOui + probNon;
  const random = Math.random() * total;
  return random < probOui ? "oui" : "non";
}
export function randomHakiLevel() {
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

export function randomGenre() {
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

export function generateStarsHTML(value) {
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

export function primes() {
  let chance = Math.random();
  if (chance < 0.7) {
    return randomHundreds(500_000, 300_000_000);
  } else if (chance < 0.95) {
    return randomHundreds(300_000_001, 1_500_000_000);
  } else {
    return randomHundreds(1_500_000_001, 5_000_000_000);
  }
}
