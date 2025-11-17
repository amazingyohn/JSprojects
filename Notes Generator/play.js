// const words = ['cat', 'dog', 'elephant'];
// let totalLetters = 0;

// // words.forEach((word)=>{
// //     totalLetters += word.length;
// //     console.log(totalLetters)
// })

const nums = [1, 2, 3, 4, 5, 6];

nums.forEach(num => {
  if(num%2 === 0){
    // console.log(`${num} is even!`)
  }
});

const books = [
  { title: '1984', author: 'Orwell' },
  { title: 'Dune', author: 'Herbert' },
  { title: 'Neuromancer', author: 'Gibson' }
];

books.forEach(book => {
  let bookName = book.author
  let bookTitle = book.title

//   console.log(`Title: ${bookTitle} by ${bookName}`)
});

// MAP extension

const numbers = [1, 2, 3, 4];

const squares = numbers.map(num => {
  //  
  // Your code here
  // Your code here 
  return num**2
});

// console.log(squares);

const fruits = ['apple', 'banana', 'kiwi'];

const lengths = fruits.map(fruit => {
  // Your code here
  return fruit.length
});

//console.log(lengths);

const items = ['a', 'b', 'c'];

const indexed = items.map((item, index) => {
  // Your code here
  return `${index}: ${item}`
});


//console.log(indexed);

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 }
];

const names = people.map(person => {
  // Your code here
  return person.name
});

//console.log(names);

const vals = [5, 10, 15];

const doubledObjs = vals.map(val => {
  // Your code here
  let original = val
  let doubled = val ** 2
  return `{ Original: ${original}, doubled ${doubled}}`
});

// console.log(doubledObjs);

//FILTER METHODS
const numss = [1, 3, 6, 2, 8, 4];

const bigNums = numss.filter(num => {
  // Your code here
  return num > 5
});

console.log(bigNums);