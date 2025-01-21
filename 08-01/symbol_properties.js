const s1 = Symbol('s');
const s2 = Symbol('s');
const o = {[s1]: 'V1', [s2]: 'V2'};
console.log(o[s1]);
console.log(o[s2]);
