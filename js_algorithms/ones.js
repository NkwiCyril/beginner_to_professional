function Ones(n) {
  if (n == 0) {
    console.log(1); 
  } else {
    for (let i = 1; i <= Math.pow(2, n); i++) {
        Ones(n - 1);
    }
  }
};

console.log(Ones(2));
