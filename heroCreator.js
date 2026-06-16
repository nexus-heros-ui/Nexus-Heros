function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateHero() {

  const names = [
    "Nova Strike",
    "Void Hunter",
    "Solar Sentinel",
    "Titan Blade",
    "Shadow Pulse",
    "Iron Phantom",
    "Quantum Knight"
  ];

  const species = [
    "Human",
    "Mutant",
    "Enhanced Human",
    "Inhuman",
    "Alien",
    "Synthetic",
    "Ascended Being"
  ];

  const origins = [
    "Natural Birth",
    "Scientific Accident",
    "Artificial Enhancement",
    "Technology",
    "Magic",
    "Cosmic Energy",
    "Elite Training"
  ];

  const alignments = [
    "Pure Hero",
    "Traditional Hero",
    "Independent Hero",
    "Anti-Hero",
    "Morally Gray"
  ];

  document.getElementById("heroName").innerText =
    randomChoice(names);

  document.getElementById("heroSpecies").innerText =
    randomChoice(species);

  document.getElementById("heroOrigin").innerText =
    randomChoice(origins);

  document.getElementById("heroAlignment").innerText =
    randomChoice(alignments);

}
