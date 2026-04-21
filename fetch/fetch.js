// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => console.log(data));


// 2.
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => {
//     data.forEach(user => {
//       console.log(user.name);
//     });
//   });

// 3.
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    let output = "";
    data.forEach(user => {
      output += `<p>${user.name} - ${user.email}</p>`;
    });
    document.getElementById("users").innerHTML = output;
  });