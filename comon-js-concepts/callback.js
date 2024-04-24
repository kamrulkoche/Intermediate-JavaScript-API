function greeting(y) {
  greetingEvening(y);
  greetingEvening(y);
  //   console.log(y);
  //return greetingHandler(y);
  return y;
}

function greetingHandler(name) {
  console.log("Good Morning", name);
}

function greetingEvening(name) {
  console.log("Good Evening", name);
}

const result = greeting("Hasan");
//console.log(result);
// greetingHandler("Kamrul");
greeting("Koche");
greeting("asa");
