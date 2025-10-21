async function createUser(user) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  
  const newUser = await response.json();
  return newUser;
}

module.exports = createUser;