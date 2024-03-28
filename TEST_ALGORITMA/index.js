// ALGORITMA

// Kerjakan dengan menggunakan bahasa pemograman yg anda kuasai, buat folder terpisah untuk soal ini

// 1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

const text = "NEGIE1".slice(0, -1).split("").reverse().concat("1").join("");

console.log(text);

// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
// Contoh:
// const sentence = "Saya sangat senang mengerjakan soal algoritma"
// longest(sentence)
// mengerjakan: 11 character

function longestWord(stringInput) {
  const words = sentence.split(" ");
  let longestWord = "";

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord + `: ${longestWord.length} character`;
}
const sentence = "Saya sangat senang mengerjakan soal algoritma";

console.log(longestWord(sentence));

// 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
// Contoh:
// INPUT = ['xc', 'dz', 'bbb', 'dz']
// QUERY = ['bbb', 'ac', 'dz']
// OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT

function countRecurrence(input, query) {
  return query.map((word) => {
    let count = 0;
    input.forEach((inp) => {
      if (word === inp) {
        count++;
      }
    });
    return count;
  });
}

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

console.log(countRecurrence(INPUT, QUERY));

// 4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
// Contoh:
// Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
// diagonal pertama = 1 + 5 + 9 = 15
// diagonal kedua = 0 + 5 + 7 = 12
// maka hasilnya adalah 15 - 12 = 3
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

function reduceDiagonalMatrix(input) {
  let mainDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < input.length; i++) {
    mainDiagonal += input[i][i];
    secondaryDiagonal += matrix[i][input.length - 1 - i];
  }

  return mainDiagonal - secondaryDiagonal;
}

console.log(reduceDiagonalMatrix(matrix));
