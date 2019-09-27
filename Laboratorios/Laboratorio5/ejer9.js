function circle() {
  let r = window.prompt("Ingrese el radio de su circulo");
  if (r <= 0) {
    return -1;
  } else {
    let x = Math.PI * r * r;
    return x;
  }
}
