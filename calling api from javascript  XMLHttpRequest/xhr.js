console.clear();
//even- onload(),onerror()
//property-response,responseText,responseType,responseURL,status,statusText
//function-open(),send(,setRequestHeader()

const makeRequest = (method, url, data) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.onload = () => {
    let data = xhr.response;
    console.log(JSON.parse(data));
  };

  xhr.onerror = () => {
    console.log("Error is here");
  };

  xhr.send(JSON.stringify(data));
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
};

const sendData = () => {
  makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  });
};

const updateData = () => {
  makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "fooMA",
    body: "barMA",
    userId: 1,
  });
};
const updateSingleData = () => {
  makeRequest("PATCH", "https://jsonplaceholder.typicode.com/posts/1", {
    title: "This is patch",
  });
};
const deleteData = () => {
  makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1");
};

// getData();
// sendData();

// updateData();
// updateSingleData();
deleteData();
