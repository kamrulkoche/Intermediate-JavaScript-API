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




function deleteAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}

function patchAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function createAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
