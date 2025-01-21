function* fib() {
    let a = 0, b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  const f = fib();
  console.log(f.next().value);
  console.log(f.next().value);
  console.log(f.next().value);
  