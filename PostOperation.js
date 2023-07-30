const url = `https://api.github.com/user/repos`;
const method = 'POST';

const data = {
  name: 'My new repository',
};

fetch(url, {
  method: method,
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  // Update the state of your application with the data from the response.
});