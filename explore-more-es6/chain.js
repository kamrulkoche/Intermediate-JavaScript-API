//data access
const data = [{ id: 1, name: 'Abul', address: 'Dhaka' }];
//console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 6500 },
        { id: 2, name: 'mackbook', price: 165000 },

    ]
}

//second product price
//console.log(products.data[1].price);

const user = {
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai',
        },
        city: 'Dhaka'
    },
}



const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'Chittagong',
        country: 'Bangladesh'
    }
}
console.log(user.address.street.second);
console.log(user.address.street?.second);
console.log(user2.address.street?.second);