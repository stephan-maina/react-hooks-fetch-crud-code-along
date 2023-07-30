const url = 'https://api.github.com/user/repos/octocat';
const method = 'DELETE';

fetch(url, {
  method: method,
})
.then(response => response.json())
.then(data => {
  // Update the state of your application with the data from the response.
})
.catch(error => {
  // Handle any errors that occur during the fetch request.
  console.error('Error:', error);
});
