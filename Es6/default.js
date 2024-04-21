function add(num1 = 0, num2 = 0) {
    const sum = num1 + num2;
    console.log(num1, num2, sum);
    return sum;
}
const result = add(5);
console.log(result);


function name(firstName, lastName = '') {
    const full = firstName + ' ' + lastName;
    console.log(firstName, lastName, full);
    return full;
}

name('Kamrul', 'Hasan');

function friends(numbs = []) {

}
function person(human = {}) {

}