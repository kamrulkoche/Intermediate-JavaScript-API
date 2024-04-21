const getName = (names) => {
    const evenArray = [];
    //const x = names[0];
    for (let i = 0; i < names.length; i++) {
        // console.log(names[i]);
        const lenthCount = names[i].length;
        //console.log(lenthCount);
        if (lenthCount % 2 == 0) {
            //console.log(names[i]);
            evenArray.push(names[i]);
        }
    }
    // console.log(evenArray);
    return evenArray;
}

const total = getName(["Kamrul", "Asik", 'Zafi', 'Siful']);
console.log(total);