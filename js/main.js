const apiUrl = "https://api.noroff.dev/api/v1";

// Fetch a list of all the jokes from the API
async function getAllJokes() {
  const response = await fetch(`${apiUrl}/jokes`);
  const data = await response.json();
  return data;
}

// Fetch a single joke by ID from the API
async function getJokeById(id) {
  const response = await fetch(`${apiUrl}/jokes/${id}`);
  const data = await response.json();
  return data;
}
