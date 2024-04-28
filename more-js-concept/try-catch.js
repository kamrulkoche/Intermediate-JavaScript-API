function checkAge() {
  const ageField = document.getElementById("age");
  const ageText = ageField.value;
  //   console.log(ageText);
  const errorTag = document.getElementById("error");

  //   try {
  //     console.log("Welcome try");
  //     console.log(Hello);
  //     console.log("Hello try");
  //   }

  try {
    const age = parseInt(ageText);
    if (isNaN(age)) {
      throw "Please enter a number";
    } 
    else if (age < 18) {
      throw "18 not allowed";
    }

    else if(age>30){
        throw "30+ not allowed";
    }

    errorTag.innerHTML = "";
  } catch (err) {
    console.log("Error", err);
    errorTag.innerHTML = "Error :" + err;
  } finally {
    console.log("Hello finally All done inside try catch");
  }
}
