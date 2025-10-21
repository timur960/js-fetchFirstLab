
async function updateUser(id, updatedData) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData)
  });
  
  const updatedUser = await response.json();
  return updatedUser;
}

module.exports = updateUser;