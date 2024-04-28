let num = 0;
const clockId = setInterval(() => {
  num++;
  //num=num+1;
  //num += 1;
  //console.log("Hello World",num);
  //   clearInterval(clockId);
  if (num > 6) {
    clearInterval(clockId);
  }
  console.log(clockId, num);
}, 2000);
