/*
Truthy:
1.true
2.any number (+ve, -ve) will be truthy other than 0
3.any string other than empty string 
4.'0' ,'false'
5.{},[]


Falsy:
1.false
2.0
3.'' (empty string)
4.undefined
5.null

*/

const x = false;
// if (x) {
//   console.log("Value of x is truthy");
// } else {
//   console.log("Value of x is falsy");
// }

//optional
//check falsy
const y = "";
if (!y) {
  //console.log('Value is falsy');
}

//check true
const z=''
if(!z){
    console.log('Value is truthy');
}