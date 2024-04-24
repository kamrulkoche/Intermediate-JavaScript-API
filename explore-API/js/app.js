function loadData2() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data))

}

function loadUser() {
  fetch("https://jsonplaceholder.typicode.com/users/1/posts")
    .then((res) => res.json())
    // .then(data=>console.log(data))
    .then((data) => display(data))
}

function display(data) {
  console.log(data);
}
