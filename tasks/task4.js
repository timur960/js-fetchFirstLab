async function deleteUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  
  const response = await fetch(url, {
    method: 'DELETE'
  });
  
  return {
    status: response.status,
    statusText: response.statusText
  };
}

module.exports = deleteUser;