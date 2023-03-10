// Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.
function sum(nb1, nb2) {
    return nb1 + nb2;
}
console.log('Exercice 1 :\n', sum(2, 3));

// Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.
function maxInTab(tab) {
    return Math.max(...tab);
}
console.log('Exercice 2 :\n', maxInTab([1, 3, 4, 5]));

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
    const nb20_90 = ['', '', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];

    if (nb === 0) {
        return nb0_19[0];
    }

    const unites = nb % 10;
    const dizaines = Math.floor((nb % 100) / 10);
    const centaines = Math.floor((nb % 1000) / 100);

    if (0 <= nb && nb <= 19) {
        mots += nb0_19[nb];
    }

    if (20 <= nb && nb <= 100) {
        if (dizaines === 7 || dizaines === 9) {
            mots += nb20_90[dizaines - 1] + " ";
            mots += nb0_19[unites + 10];
        } else {
            mots += nb20_90[dizaines] + " ";
            if (unites != 0) {
                mots += nb0_19[unites];
            }
        }
    }

    return mots;
}
for (let i = 0; i < 101; i++) {
    console.log(nbEnMots(i));
}

// Écrivez une fonction qui prend un tableau d'objets et un nom de propriété 
// et renvoie un tableau des valeurs de cette propriété dans chaque objet.
function propriete(tabPropriete, name) {
    let tabInfoPropriete = [];
    for (let i = 0; i < tabPropriete.length; i++) {
        for (let element in tabPropriete) {
            tabInfoPropriete.push(tabPropriete[element]);
        }
    }
    return tabInfoPropriete;
}

console.log(propriete(tabPropriete = [{ type: "villa", prix: "1000000" }, { type: "appartement", prix: "100000" }], "Paul"));

// Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant. 
function compareNombres(a, b) {
    return a - b;
}

function trieNumDecroissant(chaineNb) {
    chaineNb.sort(compareNombres);
    const chaineNbInversee = chaineNb.reverse();
    return chaineNbInversee;
}
console.log(trieNumDecroissant([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 200]));

// Écrivez une fonction qui prend une chaîne de caractères 
// et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules. 
function majVoyelles(chaine) {
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    chaine = chaine.toLowerCase();
    const caracteres = chaine.split('');
    for (let i = 0; i < caracteres.length; i++) {
        if (voyelles.includes(caracteres[i])) {
            caracteres[i] = caracteres[i].toUpperCase() 
        }
    }
    return caracteres.join('');
}
const result = majVoyelles("Hello world!");
console.log(result)

// Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.
function nbVoyelles(chaine) {
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    let nbVoyelles = 0;
    for (let i = 0; i < chaine.length; i++) {
        if (voyelles.includes(chaine[i])) {
            nbVoyelles += 1;
        }
    }
    return nbVoyelles;
}
console.log(nbVoyelles("Hello world!"));

// Écrivez une fonction qui prend une chaîne de caractères 
// et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules. 
function majConsonnes(chaine) {
    const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
    chaine = chaine.toLowerCase();
    const caracteres = chaine.split('');
    for (let i = 0; i < caracteres.length; i++) {
        if (!voyelles.includes(caracteres[i])) {
            caracteres[i] = caracteres[i].toUpperCase() 
        }
    }
    return caracteres.join('');
}
console.log(majConsonnes("Hello world!"));