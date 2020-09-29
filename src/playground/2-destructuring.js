//
// Object Destructuring
//

const person = {
    name: 'Jim',
    age: 33,
    location: {
        city: 'Cromwell',
        temp: 85
    }
};

const { name: firstName = 'Anonomous', age } = person;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published

//
// Array Destructuring
//

const address = ['2319 Cromwell Hills Drive', 'Cromwell', 'Connecticut', '06416'];
const [ , city, state = 'New Hampshire'] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$3.50', '$3.75'];
const [itemName, , medium, ] = item;
console.log(`A medium ${itemName} costs ${medium}`);