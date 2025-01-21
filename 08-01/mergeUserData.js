function mergeUserData(...objects) {
    return { ...objects[0], ...objects[1], ...objects[2] };
  }
  
  const userDetails = { name: 'CVR', age: 19 };
  const userAddress = { address: 'Mangalpally', city: 'Hyderabad' };
  const userPreferences = { theme: 'Engineering Edu', language: 'EN' };
  
  const mergedData = mergeUserData(userDetails, userAddress, userPreferences);
  console.log(mergedData);