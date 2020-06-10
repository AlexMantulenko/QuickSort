let Partition = (A, p, r) => {
  let x = A[r];
  let i = p - 1;
  for (let j = p; j < r; j++) {
    if (A[j] <= x) {
      i++;
      [A[i], A[j]] = [A[j], A[i]];
    }
  }
  [A[i + 1], A[r]] = [A[r], A[i + 1]];
  return i + 1;
}

let QuickSort = (A, p, r) => {
  let q;
  if (p < r) {
    q = Partition(A , p, r);
    QuickSort(A, p, q - 1);
    QuickSort(A, q + 1, r);
  }
}

let getRandom = (min, max) =>  Math.floor(Math.random() * (max - min) + min);


let A = [];
const N = 10;

for (let i = 0; i < N; i++) {
  A[i] = getRandom(1, 30);
}

QuickSort(A, 0, N - 1);
console.log(A);
