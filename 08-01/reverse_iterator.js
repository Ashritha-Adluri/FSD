const a = [1, 2, 3, 4];
const r = {
  data: a,
  [Symbol.iterator]() {
    let i = this.data.length - 1;
    return {
      next: () => i >= 0 ? {value: this.data[i--], done: false} : {done: true}
    };
  }
};

for (const n of r) {
  console.log(n);
}
