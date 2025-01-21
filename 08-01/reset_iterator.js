const l = {
    data: [1, 2, 3, 4],
    currentIndex: 0,
    [Symbol.iterator]() {
      return {
        next: () => this.currentIndex < this.data.length ? {value: this.data[this.currentIndex++], done: false} : {done: true}
      };
    },
    reset() {
      this.currentIndex = 0;
    }
  };
  
  for (const n of l) {
    console.log(n);
  }
  l.reset();
  for (const n of l) {
    console.log(n);
  }
  