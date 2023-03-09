// Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.
function sum(nb1, nb2) {
    return nb1 + nb2;
}
console.log('Exercice 1 :\n', sum(2, 3));

// Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.
function maxInTab(tab) {
    return Math.max(...tab);
}
console.log('Exercice 2 :\n', maxInTab([1,3,4,5]));

// Écrivez une fonction qui prend une chaîne de caractères et renvoie 
// une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.
function supVoyelles(chaine) {
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    const caracteres = chaine.split('');
    const nonVoyelles = caracteres.filter(caractere => !voyelles.includes(caractere.toLowerCase()));
    const chaineNonVoyelles = nonVoyelles.join('');
    return chaineNonVoyelles;
}
console.log('Exercice 3 :\n', supVoyelles('bonjour anna'));

// Écrivez une fonction qui prend un tableau de chaînes de caractères 
// et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.
function trieAlpha(chaine) {
    chaine.sort();
    return chaine;
}
console.log('Exercice 4 :\n', ['hello my friends', 'how are you', 'alphananard']);

// Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. 
// Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".
function nbEnMots(nb) {
    let mots = '';

    const nb0_19 = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
    const nb20_90 = ['vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
    const nbSup100 = ['mille', 'million', 'milliard', 'billion', 'billiard', 'trillion'];

    if (nb === 0) {
        return nb0_19[0];
    }

    const unites = nb % 10;
    const dizaines = Math.floor((nb % 100) / 10);
    const centaines = Math.floor((nb % 1000) / 100);
    const mille = Math.floor((nb % 10000) / 1000);

    if (0 < nb < 19) {
        mots += nb0_19[nb];
    }

    if (20 < nb < 90) {
        
    }

    return mots;
    
}
console.log(nbEnMots(18));