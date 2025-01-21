function* combineSeq() {
    const n = [1, 2, 3, 4];
    const f = fib();
    for (let i = 0; i < n.length; i++) {
      yield n[i];
      yield f.next().value;
    }
  }
  
  const c = combineSeq();
  console.log(c.next().value);
  console.log(c.next().value);
  console.log(c.next().value);
  