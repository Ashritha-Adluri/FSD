function createProfile({ name, email }) {
    return { name, email };
  }
  const user = { name: 'Ashritha', age: 19, email: 'ashritha@gmail.com', address: '123 St' };
  const profile = createProfile(user);
  console.log(profile);