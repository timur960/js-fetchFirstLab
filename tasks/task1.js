async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  
  const result = [];
  for (let i = 0; i < users.length; i++) {
    result.push({
      id: users[i].id,
      name: users[i].name
    });
  }
  
  return result;
}

module.exports = fetchUsers;