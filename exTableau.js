// Créez un tableau contenant les nombres de 1 à 10. Écrivez un programme qui affiche chaque élément du tableau à la console.
let tabNb = [];
for (let i = 1; i < 10; i++) {
    tabNb.push(i)
}
console.log("Exercice 1 :\n", tabNb);

// Créez un tableau contenant les jours de la semaine. 
// Écrivez un programme qui affiche le premier jour de la semaine à la console.
const tabDayWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
console.log("Exercice 2 :\n", "Premier jour de la semaine :", tabDayWeek[0]);

// Créez un tableau contenant les nombres pairs de 2 à 10. 
// Écrivez un programme qui calcule la somme des nombres du tableau et l'affiche à la console.
const tabNbPairs = [2, 4, 6, 8, 10];
let totalTabNbPairs = 0;
for (let i = 0; i < tabNbPairs.length; i++) {
    totalTabNbPairs += tabNbPairs[i];
}
console.log("Exercice 3 :\n", totalTabNbPairs);

// Créez un tableau contenant les noms de cinq fruits. 
// Écrivez un programme qui ajoute un sixième fruit à la fin du tableau et affiche le tableau complet à la console.
let fruits = ['Banane', 'Pomme', 'Fraise', 'Raisins', 'Poire'];
fruits.splice(5, 0, 'Mandarine');
console.log("Exercice 4 :\n", fruits);

// Créez un tableau contenant les notes de cinq étudiants. 
// Écrivez un programme qui calcule la moyenne des notes et l'affiche à la console.
const tabNotes = [20, 2, 8, 17, 12];
let sumNotes = 0;
for (let i = 0; i < tabNotes.length; i++) {
    sumNotes += tabNotes[i];
}
const moyenneNotes = sumNotes / tabNotes.length;
console.log("Exercice 5 :\n", moyenneNotes);

// Créez un tableau contenant des noms d'oiseaux. 
// Écrivez un programme qui recherche si un nom spécifique d'oiseau est présent dans le tableau.
const tabOiseaux = ['Pivert', 'Pie', 'Tourterelle', 'Mésange', 'Merle'];
let oiseau = 'Pie';
console.log("Exercice 6 :\n", tabOiseaux.includes(oiseau) ? 'Présent dans le tableau !' : 'Non présent dans le tableau !');

// Créez un tableau contenant des noms de pays. 
// Écrivez un programme qui trie le tableau par ordre alphabétique et l'affiche à la console.
let tabPays = ['France', 'Allemagne', 'Afrique', 'Russie', 'Italie', 'Espagne', 'Portugal'];
console.log("Exercice 7 :\n", tabPays.sort());

// Créez un tableau contenant les noms des mois de l'année. 
// Écrivez un programme qui affiche le troisième élément du tableau.
const tabMonth = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre',
'Décembre'];
console.log("Exercice 8 :\n", "Troisième mois de l'année :", tabMonth[2]);

// Créez un tableau contenant des nombres aléatoires. 
// Écrivez un programme qui calcule la valeur minimale et la valeur maximale du tableau et les affiche à la console.
const nbRandom = [1, 3, 19, 13908, 194, 1409841, 9, 184];
console.log("Exercice 9 :\n", "Maxi du tableau :", Math.max(...nbRandom), "\nMini du tableau :", Math.min(...nbRandom));

// Créez un tableau contenant des phrases. 
// Écrivez un programme qui cherche la phrase la plus longue du tableau et l'affiche à la console.
const tabPhrases = ['Bonjour tout le monde', 'Salut mon pote', 'Yo mon gars comment tu vas ?', 
'Bonsoir, je veux une pizza 4 fromages svp !'];
let phrasePlusLongue = '';
for (let i = 0; i < tabPhrases.length; i++) {
    if (tabPhrases[i].length > phrasePlusLongue.length) {
        phrasePlusLongue = tabPhrases[i];
    }
}
console.log("Exercice 10 :\n", phrasePlusLongue);