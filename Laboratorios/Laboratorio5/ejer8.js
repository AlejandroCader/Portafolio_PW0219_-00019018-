function binary(n) {
  let x = 0,
    r = 0,
    array = [];
  while (n != 0) {
    r = n % 2;
    n = Math.trunc(n / 2);
    array.push(r);
  }
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}
