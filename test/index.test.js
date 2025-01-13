import {
  my_alpha_number_t,
  sum,
  my_size_alpha_t,
  my_display_alpha_t,
  my_array_alpha_t,
  my_is_posi_neg_t,
  fibo,
  my_display_alpha_reverse_t,
  my_length_array_t,
  my_display_unicode_t,
  quickSort,
  tspBrutForce,
  resoudreSudoku,
  estValide
} from '../src/index';

describe('my_alpha_number_t', () => {
  it('should return  "Hello " if input is empty or undefined', () => {
    expect(my_alpha_number_t('')).toBe('Hello');
    expect(my_alpha_number_t()).toBe('Hello');
  });
  it('should return input with the first letter capitalized', () => {
    expect(my_alpha_number_t('bonjour')).toBe('Bonjour');
  });
});

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
  it('should return 0 if one or both arguments are not numbers', () => {
    expect(sum('3', 'a')).toBe(0);
    expect(sum(2, 'a')).toBe(0);
  });
});

describe('my_size_alpha_t', () => {
  it('should return the length of a string', () => {
    expect(my_size_alpha_t('hello')).toBe(5);
  });
  it('should return 0 for non-string inputs or empty strings', () => {
    expect(my_size_alpha_t(123)).toBe(0);
    expect(my_size_alpha_t('')).toBe(0);
  });
});

describe('my_display_alpha_t', () => {
  it('should return the alphabet in lowercase', () => {
    expect(my_display_alpha_t()).toBe('abcdefghijklmnopqrstuvwxyz');
  });
});

describe('my_array_alpha_t', () => {
  it('should convert a string into an array of characters', () => {
    expect(my_array_alpha_t('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
  });
  it('should return an empty array for an empty string', () => {
    expect(my_array_alpha_t('')).toEqual([]);
  });
});

describe('my_is_posi_neg_t', () => {
  it('should return NEGATIVE for negative numbers or 0', () => {
    expect(my_is_posi_neg_t(0)).toBe('NEGATIVE');
    expect(my_is_posi_neg_t(-1)).toBe('NEGATIVE');
  });
  it('should return POSITIF for positive numbers', () => {
    expect(my_is_posi_neg_t(5)).toBe('POSITIF');
  });
});

describe('fibo', () => {
  it('should return the correct Fibonacci number', () => {
    expect(fibo(0)).toBe(0);
    expect(fibo(1)).toBe(1);
    expect(fibo(6)).toBe(8);
    expect(fibo(20)).toBe(6765);
  });
});

describe('my_display_alpha_reverse_t', () => {
  it('should return the alphabet in reverse order', () => {
    expect(my_display_alpha_reverse_t()).toBe('zyxwvutsrqponmlkjihgfedcba');
  });
});

describe('my_length_array_t', () => {
  it('should return the length of an array', () => {
    expect(my_length_array_t([1, 2, 3])).toBe(3);
  });
  it('should handle null elements correctly', () => {
    expect(my_length_array_t([1, null, 3])).toBe(3);
  });
});

describe('my_display_unicode_t', () => {
  it('should convert an array of valid Unicode codes to a string', () => {
    expect(my_display_unicode_t([97, 98, 99])).toBe('abc');
    expect(my_display_unicode_t([97, 200, 99])).toBe('ac');
  });
});

describe('quickSort', () => {
  it('should return a sorted array', () => {
    expect(quickSort([3, 1, 2])).toEqual([1, 2, 3]);
    expect(quickSort([])).toEqual([]);
    expect(quickSort([1, 2, 3])).toEqual([1, 2, 3]);
  });
});

describe('tspBrutForce', () => {
  it('should calculate the shortest path in a distance matrix', () => {
    const distances = {
      A: { A: 0, B: 5, C: 10 },
      B: { A: 5, B: 0, C: 4 },
      C: { A: 10, B: 4, C: 0 }
    };
    expect(tspBrutForce(distances)).toEqual({
      minDistance: 19,
      meilleurePermutation: ['A', 'B', 'C']
    });
  });
});

describe('resoudreSudoku', () => {
  it('should solve a solvable Sudoku grid', () => {
    const grille = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    expect(resoudreSudoku(grille)).toBe(true);
  });
});

describe('estValide', () => {
  it('should return true for a valid number in the grid', () => {
    const grille = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    expect(estValide(grille, 0, 2, 4)).toBe(true);
  });

  it('should return false for a number already in the row', () => {
    const grille = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    expect(estValide(grille, 0, 2, 3)).toBe(false); // 3 est déjà dans la ligne
  });

  it('should return false for a number already in the column', () => {
    const grille = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    expect(estValide(grille, 0, 2, 6)).toBe(false); // 6 est déjà dans la colonne
  });

  it('should return false for a number already in the sub-grid', () => {
    const grille = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    expect(estValide(grille, 0, 2, 9)).toBe(false); // 9 est déjà dans la sous-grille
  });
});
