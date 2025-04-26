const syllabesPrenoms = [
  "Jean",
  "Léo",
  "Théo",
  "Nico",
  "Al",
  "Émi",
  "Lya",
  "Milo",
  "Rafa",
  "Sacha",
  "Toma",
  "Éli",
  "Luna",
  "Lila",
  "Noé",
  "Lino",
  "Léna",
  "Mina",
  "Liam",
  "Léa",
  "Léon",
  "Lina",
];

const syllabesNoms = [
  "Montblanc",
  "Duval",
  "LaForge",
  "Desrosiers",
  "Marin",
  "de la Mer",
  "Belmont",
  "Rochefort",
  "Vanel",
  "Boisvert",
  "Beaumont",
  "Lafleur",
  "Rivière",
  "Leblanc",
  "Dumont",
  "Laroche",
  "Fortier",
  "Lavigne",
  "Bouchard",
  "Lemoine",
  "Dupont",
  "Lefèvre",
  "Bernier",
  "Lacroix",
  "Gauthier",
  "Leduc",
  "Morin",
  "Lapierre",
  "Girard",
  "Lachance",
];

const surnoms = [
  "Cœur de Tempête",
  "Lame de Corail",
  "Œil de Cyclone",
  "Poing de Granit",
  "Aile de Griffon",
  "Souffle de Brume",
  "Éclair de Jade",
  "Ombre de Kraken",
  "Flamme de Phénix",
  "Vague de Saphir",
  "Serre de Dragon",
  "Glace Éternelle",
  "Foudre de Titan",
  "Crochet de Requin",
  "Rafale de Vent",
  "Marteau de Tonnerre",
  "Lueur de Lune",
  "Griffe de Tigre",
  "Sable d'Or",
  "Cœur de Lion",
  "Esprit de la Forêt",
  "Murmure de l'Océan",
  "Gardien des Étoiles",
  "Chuchotement du Vent",
  "Maître des Marées",
];

function prendre(tab) {
  return tab[Math.floor(Math.random() * tab.length)];
}

export function name({ avecSurnom = true } = {}) {
  const prenom = prendre(syllabesPrenoms);
  const nom = prendre(syllabesNoms);
  const surnom = prendre(surnoms);

  return avecSurnom ? `${prenom} ${nom}, dit "${surnom}"` : `${prenom} ${nom}`;
}
