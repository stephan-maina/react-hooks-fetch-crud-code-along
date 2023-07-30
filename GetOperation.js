const url = `https://api.github.com/users/octocat`;
const method = 'GET';

fetch(url, {
  method: method,
})
.then(response => response.json())
.then(data => {
  // Update the state of your application with the data from the response.
});