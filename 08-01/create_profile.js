function createProfile({name, age, interests}) {
    const [f, s] = interests;
    return {name, age, f, s};
  }
  
  const pd = {name: 'John', age: 25, interests: ['Reading', 'Traveling', 'Music']};
  const p = createProfile(pd);
  console.log(p);
  