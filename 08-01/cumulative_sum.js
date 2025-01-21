function* cumSum(a) {
    let sum = 0;
    for (let n of a) {
      sum += n;
      yield sum;
    }
    return sum;
  }
  
  const arr = [1, 2, 3, 4];
  const g = cumSum(arr);
  
  for (let v of g) {
    console.log(v);
  }
  const total = g.return().value;
  console.log(total);
  