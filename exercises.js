let age = 15;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

console.log("-------------");

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("-------------");

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

console.log("-------------");

function greet(name) {
  console.log("Hello,", name);
}
greet("Renato");

console.log("-------------");

function addNumbers(a, b) {
  return a + b;
}
const result = addNumbers(2, 3);
console.log(result);

console.log("-------------");

const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

fruits.push("Grape");
console.log(fruits);

console.log("-------------");

const numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("-------------");

for (let number of numbers) {
  console.log(number);
}

console.log("-------------");

const names = ["Alice", "Bob", "Charlie"];

names.forEach(function (name) {
  console.log(`Hello, ${name}`);
});

console.log("-------------");

let person = {
  name: "John Doe",
  age: 30,
  isStudent: false,
};

console.log(person.name);
console.log(person.age);
console.log(person.isStudent);

console.log("-------------");

function displayBookInfo(book) {
  console.log(`Book "${book.title}" by ${book.author}`);
}
const oneBook = {
  title: "One book",
  author: "Someone",
};
displayBookInfo(oneBook);

console.log("-------------");

const students = [
  {
    name: "Alice",
    grade: 92,
  },
  {
    name: "Bob",
    grade: 78,
  },
  {
    name: "Charlie",
    grade: 85,
  },
];

for (let student of students) {
  console.log(`${student.name}: ${student.grade}`);
}

console.log("-------------");

let message = "Hello JavaScript World";
console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
let jsIndex = message.indexOf("JavaScript");
console.log(jsIndex);
let extractedMsg = message.slice(jsIndex, jsIndex + "JavaScript".length);
console.log(extractedMsg);
let isThere = message.includes("World");
console.log(isThere);

console.log("-------------");

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("hello"));

function reverseStringMethod(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStringMethod("hello"));

console.log("-------------");

function findLargestNumber(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}
console.log(findLargestNumber([1, 5, 3, 9, 2]));

console.log("-------------");

function findLargestNumber(numbers) {
  return Math.max(...numbers);
}
console.log(findLargestNumber([1, 5, 3, 9, 2]));

console.log("-------------");

function calculateSum(numbers) {
  let totalSum = 0;
  for (let number of numbers) {
    totalSum += number;
  }
  return totalSum;
}
console.log(calculateSum([12, 32, 22]));

console.log("-------------");

function calculateSumReduce(numbers) {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}
console.log(calculateSumReduce([1,2,3,4,5]))

console.log("-------------");

const data = [10, 25, 30, 45, 50, 65, 5, 80]
const newData = data.filter((num) => {
    if(num > 40){
        return true;
    } else {
        return false;
    }
})
console.log(newData)

console.log("-------------");

const prices = [10, 20, 30];
const newPrices = prices.map((p) => {
    return p * 2;
})
console.log(newPrices)

console.log("-------------");

function makeCounter(){
    let count = 0;
    return function ()  {
        count++;
        return count;
    }
}

let count1 = makeCounter();
console.log(count1());
console.log(count1());
console.log(count1());
console.log(count1());

console.log("-------======------");

let count2 = makeCounter();
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());


console.log("-------------");

function Car(make,model){
    this.make=make;
    this.model=model;
}
Car.prototype.displayInfo = function(){
    console.log(`This is a ${this.make} ${this.model}.`);
}
let car1 = new Car("Toyota", "Camry"); 
let car2 = new Car("Honda", "Civic");

car1.displayInfo();
car2.displayInfo();

console.log("-------------");

class Motorcycle {
    constructor(brand,type){
        this.brand=brand;
        this.type=type;
    }
    displayDetails(){
        console.log(`This is a ${this.brand} ${this.type} motorcycle.`)
    }
}
let moto1 = new Motorcycle("Harley-Davidson", "Sportster"); 
let moto2 = new Motorcycle("Kawasaki", "Ninja"); 
moto1.displayDetails(); 
moto2.displayDetails();

console.log("-------------");

function fetchUserData(userId, callback){
    console.log(`Fetching data for user ID: ${userId}...`);
    setTimeout(() => {
        const user = {
            id: userId,
            name: `User ${userId}`,
            email: `user${userId}@example.com`
        };
        console.log(`Data for the user ${userId} received.`);
        callback(user)
    }, 2000);
}
fetchUserData(21, () => {
    console.log("Hello from the callback function")
})

console.log("-------------");

function fetchUserDataPromise(userId) {
  console.log(`(Promise) Fetching data for user ID: ${userId}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(userId ===0){
        reject("User with ID 0 not found.");
        return;
      }
      const user = {
        id: userId,
        name: `Promise User ${userId}`,
        status: "active"
      };
      console.log(`(Promise) Data for user ${userId} recieved.`);
      resolve(user);

    }, 2000)
  });
}
console.log("--- Fetching User 1 (Success Case) ---"); 
fetchUserDataPromise(1)   
  .then((user) => {
    console.log("Success! User 1 Data:", user);
    console.log(`Resolved User 1 Name: ${user.name}`); 
  })
  .catch((error) => {
    console.error("Error fetching User 1:", error)
  })


console.log("-------------");

function fizzBuzz(start, end) {
    const out = []
    for ( let i=start; i<=end;i++){
        let output = '';
        if(i % 3 === 0 && i%5 === 0){
            output = 'FizzBuzz';
        } else if(i % 3 === 0){
            output = 'Fizz';
        } else if(i % 5 === 0){
            output = 'Buzz';
        }
         else {
            output = i.toString();
        }
        out.push(output)
    }
    return out;
}

console.log(fizzBuzz(2, 20))


console.log("-------------");

function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

// Example calls
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(3)); // 6

console.log("-------------");

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    category: "Electronics"
  },
  {
    id: 2,
    name: "Keyboard",
    price: 25,
    category: "Electronics"
  },
  {
    id: 3,
    name: "Notebook",
    price: 15,
    category: "Stationery"
  },
  {
    id: 4,
    name: "Desk Chair",
    price: 250,
    category: "Furniture"
  }
]
const TAX_RATE = 1.15;

let productsWithTax = products.map(product => {
  return {
    ...product, 
    priceWithTax: (product.price * TAX_RATE).toFixed(2)
  };
});
console.log(productsWithTax)

console.log("-------------");

let transactions = [
  {
     id: 1, 
     amount: 100, 
     type: 'credit', 
     date: '2023-01-01' 
  },
  {
    id: 2, 
    amount: 50, 
    type: 'debit', 
    date: '2023-01-02'
  },
  {
    id: 3, 
    amount: 200, 
    type: 'credit', 
    date: '2023-01-03' 
  },
  {
    id: 4, 
    amount: 30, 
    type: 'debit', 
    date: '2023-01-04' 
  },
  {
    id: 5, 
    amount: 150, 
    type: 'credit', 
    date: '2023-01-05' 
  }
]

const creditTransactions = transactions.filter(t => t.type === 'credit');
const sumOfCreditTransactions = creditTransactions.map(credTran => credTran.amount).reduce((sum,amount)=> sum+amount, 0)
console.log(sumOfCreditTransactions)



console.log("-------------");

function titleCase(sentence){
  const words = sentence.split(' ');

  const titleCasedWords = words.map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  return titleCasedWords.join(' ');
}
console.log(titleCase('this is a sample sentence')); 
console.log(titleCase('a dispute between many famous people in a land full of surprises')); 





console.log("-------------");


let text = "hello world. this is great! right?";
console.log(text.split(/([.?!]\s*)/));

const splitText = text.split(/([.?!]\s*)/);
const upperText = splitText.map(t => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase())

console.log(upperText);

const joinedText = upperText.join(' ')
console.log(joinedText)

console.log("-------------");





// console.log("-------------");

