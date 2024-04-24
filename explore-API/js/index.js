function loadUser2() {
  fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    .then((res) => res.json())
    .then((data) => display2(data));
}

function display2(users) {
  const ul = document.getElementById("users-list");
  for (const user of users) {
    console.log(user.id);
    const li = document.createElement("li");
    li.innerText = user.title;
    ul.appendChild(li);
  }
}
