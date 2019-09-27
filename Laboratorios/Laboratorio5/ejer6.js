function order(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
      if (list[j + 1] < list[j]) {
        var aux = list[j + 1];
        list[j + 1] = list[j];
        list[j] = aux;
      }
    }
  }
  return list;
}

console.log(order([4, 6, 8, 2, 5, 3, 1, 7, 9, 0]));
