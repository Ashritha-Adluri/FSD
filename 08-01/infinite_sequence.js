function* infSeq() {
    let n = 1;
    while (true) {
      yield n++;
    }
  }
  
  const seq = infSeq();
  console.log(seq.next().value);
  console.log(seq.next().value);
  console.log(seq.next().value);
  