/*
  0

  Description : Fonction my_alpha_number_t
  it 1 : Je souhaite tester si la fonction my_alpha_number_t
  renvoi bien “Hello” (execpt.toBe(“hello”))
  it 2 : Je souhaite passer un argument “bonjour”
  le retour attendu est “Bonjour” (execpt .toBe(“Bonjour”))
  it 3 : Je souhaite passer un argument avec la valeur “” (vide)
  le retour attendu sera “Hello”(execpt .toBe(“Hello”))
*/

export const my_alpha_number_t = (nbr) => {
  if (!nbr || nbr.trim() === '') {
    return 'Hello';
  }

  return `${nbr[0].toUpperCase()}${nbr.slice(1)}`;
};

/*
  1

  Description : Fonction sum
  it 1 : Tester la somme de 2 et 3, le retour attendu est 5.
  (execpt.toBe(5))
  it 2 : Passer un argument non numérique comme "3" ou "a", le retour attendu est 0.
  (execpt.toBe(0))
  it 3 : Passer deux arguments non numériques, le retour attendu est 0.
  (execpt.toBe(0))
*/

export const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
  }

  return a + b;
};

/*
  2

  Description : Fonction my_size_alpha_t
  it 1 : Tester la longueur de la chaîne "hello", le retour attendu est 5.
  (execpt.toBe(5))
  it 2 : Passer un argument non chaîne comme 123, le retour attendu est 0.
  (execpt.toBe(0))
  it 3 : Passer une chaîne vide `""`, le retour attendu est 0.
  (execpt.toBe(0))
  it 4 : Passer un argument de type non chaîne, le retour attendu est 0.
  (execpt.toBe(0))
*/

export const my_size_alpha_t = (str = '') => {
  let count = 0;

  if (typeof str !== 'string') {
    return count;
  }

  while (str[count]) {
    count += 1;
  }

  return count;
};

/*
  3

  Description : Fonction my_display_alpha_t
  it 1 : Tester la sortie de la fonction, le retour attendu est “abcdefghijklmnopqrstuvwxyz”.
  (execpt.toBe(“abcdefghijklmnopqrstuvwxyz”))
*/

export const my_display_alpha_t = () => 'abcdefghijklmnopqrstuvwxyz';

/*
  4

  Description : Fonction my_array_alpha_t
  it 1 : Passer la chaîne "hello", le retour attendu est ['h', 'e', 'l', 'l', 'o'].
  (execpt.toEqual(['h', 'e', 'l', 'l', 'o']))
  it 2 : Passer une chaîne vide `""`, le retour attendu est [].
  (execpt.toEqual([]))
  it 3 : Passer une chaîne avec des caractères spéciaux,
  le retour attendu est un tableau de ces caractères. (execpt.toEqual(['$', '%', '^']))
*/

export const my_array_alpha_t = (str) => {
  const result = [];

  for (let i = 0; i < my_size_alpha_t(str); i += 1) {
    result[i] = str[i];
  }

  return result;
};

/*
  5

  Description : Fonction my_is_posi_neg_t
  it 1 : Passer un nombre négatif ou 0, le retour attendu est "NEGATIVE".
  (execpt.toBe("NEGATIVE"))
  it 2 : Passer un nombre positif, le retour attendu est "POSITIF".
  (execpt.toBe("POSITIF"))
*/

export const my_is_posi_neg_t = (nbr) => {
  if (nbr <= 0) {
    return 'NEGATIVE';
  }

  return 'POSITIF';
};

/*
  6

  Description : Fonction fibo
  it 1 : Passer 0, le retour attendu est 0.
  (execpt.toBe(0))
  it 2 : Passer 1 ou 2, le retour attendu est 1.
  (execpt.toBe(1))
  it 3 : Passer 6, le retour attendu est 8.
  (execpt.toBe(8))
  it 4 : Passer un nombre élevé, comme 20
  le retour attendu est la valeur correspondante dans la séquence de Fibonacci. (execpt.toBe(6765))
*/

export const fibo = (n) => {
  if (n <= 0) {
    return 0;
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return fibo(n - 1) + fibo(n - 2);
};

/*
  7

  Description : Fonction my_display_alpha_reverse_t
  it 1 : Tester la sortie de la fonction, le retour attendu est “zyxwvutsrqponmlkjihgfedcba”.
  (execpt.toBe(“zyxwvutsrqponmlkjihgfedcba”))
*/

export const my_display_alpha_reverse_t = () => {
  const alpha = my_display_alpha_t();
  let reverseAlpha = '';

  for (let i = my_size_alpha_t(alpha); i > 0; i -= 1) {
    reverseAlpha += alpha[i - 1];
  }

  return reverseAlpha;
};

/*
  8

  Description : Fonction my_length_array_t
  it 1 : Passer un tableau [1, 2, 3], le retour attendu est 3.
  (execpt.toBe(3))
  it 2 : Passer un tableau vide, le retour attendu est 0.
  (execpt.toBe(0))
  it 3 : Passer un tableau avec des éléments `null`,
  le retour attendu est la longueur du tableau sans compter `null`. (execpt.toBe(2))
*/

export const my_length_array_t = (arr) => {
  let i = 0;

  while (arr[i]) {
    i += 1;
  }

  return i;
};

/*
  9

  Description : Fonction my_display_unicode_t
  it 1 : Passer [97, 98, 99], le retour attendu est "abc".
  (execpt.toBe("abc"))
  it 2 : Passer [97, 200, 99], le retour attendu est "ac".
  (execpt.toBe("ac"))
  it 3 : Passer un tableau avec des codes en dehors des valeurs attendues,
  le retour attendu est un résultat ne contenant que des caractères valides (execpt.toBe("ac"))
*/

export const my_display_unicode_t = (arr) => {
  const results = [];

  for (let i = 0; i < arr.length; i += 1) {
    const decimal = arr[i];

    if ((decimal >= 65 && decimal <= 99)) {
      results[i] = String.fromCharCode(arr[i]);
    }
    if ((decimal >= 97 && decimal <= 122)) {
      results[i] = String.fromCharCode(arr[i]);
    }
    if ((decimal >= 48 && decimal <= 57)) {
      results[i] = String.fromCharCode(arr[i]);
    }
    if (decimal === 32) {
      results[i] = String.fromCharCode(arr[i]);
    }
  }

  return results.join('');
};

/*
  10

  Description : Fonction quickSort
  it 1 : Passer [3, 1, 2], le retour attendu est [1, 2, 3].
  (execpt.toEqual([1, 2, 3]))
  it 2 : Passer un tableau vide, le retour attendu est [].
  (execpt.toEqual([]))
  it 3 : Passer un tableau déjà trié, le retour attendu est ce même tableau inchangé.
  (execpt.toEqual([1, 2, 3]))
*/

export function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

/*
  11

  Description : Fonction tspBrutForce
  it 1 : Tester avec une matrice de distances entre villes
  (execpt.toEqual({ minDistance: 10, meilleurePermutation: ["A", "B", "C"] }))
  it 2 : Tester avec une matrice vide, le retour attendu est un chemin vide et une distance de 0.
  (execpt.toEqual({ minDistance: 0, meilleurePermutation: [] }))
*/

export function permuter(arr) {
  if (arr.length === 0) return [[]];
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    const reste = arr.slice(0, i).concat(arr.slice(i + 1));
    const permut = permuter(reste);
    for (let j = 0; j < permut.length; j += 1) {
      result.push([arr[i]].concat(permut[j]));
    }
  }
  return result;
}
export function tspBrutForce(distances) {
  const villes = Object.keys(distances);
  const permutations = permuter(villes);
  let minDistance = Infinity;
  let meilleurePermutation = [];

  permutations.forEach((chemin) => {
    let distanceTotale = 0;
    for (let i = 0; i < chemin.length - 1; i += 1) {
      distanceTotale += distances[chemin[i]][chemin[i + 1]]; // Retour à la ville de départ
    }
    distanceTotale += distances[chemin[chemin.length - 1]][chemin[0]];

    if (distanceTotale < minDistance) {
      minDistance = distanceTotale;
      meilleurePermutation = chemin;
    }
  });
  return { minDistance, meilleurePermutation };
}

/*
  12

  Description : Fonction resoudreSudoku
  it 1 : Passer une grille de sudoku solvable, vérifier que la solution est correcte.
  (execpt.toEqual(grilleRésolue))
  it 2 : Vérifier si un numéro est valide dans une grille donnée (ligne, colonne et sous-grille).
  (execpt.toBe(true))
*/

export function estValide(grille, ligne, col, num) {
  for (let i = 0; i < 9; i += 1) {
    if (grille[ligne][i] === num || grille[i][col] === num) return false;
  }
  const startRow = Math.floor(ligne / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i += 1) {
    for (let j = startCol; j < startCol + 3; j += 1) {
      if (grille[i][j] === num) return false;
    }
  }
  return true;
}

export function resoudreSudoku(grille) {
  // Créer une copie de la grille pour éviter de modifier l'original
  const copieGrille = grille.map((row) => row.slice());

  for (let ligne = 0; ligne < 9; ligne += 1) {
    for (let col = 0; col < 9; col += 1) {
      if (copieGrille[ligne][col] === 0) {
        for (let num = 1; num <= 9; num += 1) {
          if (estValide(copieGrille, ligne, col, num)) {
            copieGrille[ligne][col] = num;
            if (resoudreSudoku(copieGrille)) {
              // Si une solution est trouvée, nous avons résolu le Sudoku
              copieGrille[ligne][col] = num; // Mettre à jour l'originale
              return true;
            }
            copieGrille[ligne][col] = 0; // Annuler si la solution n'est pas valide
          }
        }
        return false;
      }
    }
  }
  return true;
}
