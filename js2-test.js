// Name: Ömer KILIÇ
// Class: 27

// JavaScript1

/* 1. Create a function, named logObj, that:
    - Takes 1 argument: an object, with 3 properties
    - Loops over the object and put each value into a separate variable
    - Concatenates the values into a single string
    - Log to the console the string, including the following: '{NAME} is {AGE} and works as an {JOB}!'
    - Return the string

    Expected output:
    'Noer is 28 and works as an Education Director'
*/

const user = {
    name: 'Nour',
    age: 28,
    job: 'Education Director'
}
function logObj(obj) {
    const userName = obj.name;
    const userAge = obj.age;
    const userJob = obj.job;
    const output = `${userName} is ${userAge} and works as an ${userJob}`;
    return output
}
console.log(logObj(user));

/* 2. Create a function, named logNumbers, that:
      - Takes 2 arguments: a start number and an end number
      - Has a loop that starts from the start number and ends until the end number
      - Log to the console each number, however...
      - If the number is a multiple of 3 output the string “Fizz”,
      - If the number is a multiple of 5 output the string “Buzz”
      - If the number is a multiple of 3 AND 5 output the string “FizzBuzz”
      - Make use of the modulo operator and check for the remainder: %

      Expected output:
      logNumbers(1, 15);
      1
      2
      Fizz
      4
      Buzz
      6
      ...
      13
      14
      FizzBuzz

      Use the following values: 1 (start number) and 100 (end number)
*/

const fizzBuzz = (startNum, endNum) => {
    for(i = startNum; i <= endNum; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if( i % 3 === 0) {
            console.log('Fizz');
        } else if( i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(1,100);

// JavaScript2

/* 3. Create a function, named toNumbers, that:
      - Takes in 1 argument: an array of strings
      - Get the index position number of each value
      - Create a new array that includes all these numbers 
      - Make use of the map() function
      - Log to the console the array of numbers
      - Return the array of numbers

      Expected output:
      [1, 2, 3, 4]

      Use the following array: const letters = ['a', 'b', 'c', 'd'];
*/
const letters = ['a', 'b', 'c', 'd'];
const toNumbers = arr => { return indexValues = arr.map((item,index) => index); }
console.log(toNumbers(letters)); //js is zero indexed, so index values starts with 0, if 
//you want to see the expected output above, just add + 1 after the last index, which returns from map

/* 4. Create a function, called injectBooksToDOM, that:
      - Takes 1 argument: an array of objects
      - Loops over the array
      - Injects each object's content into the DOM in an unordered list
      - Make use of the forEach() function
      - Returns true if it works, false if it doesn't
  
      Target the '#root' element in 'index.html'.
      Use the following object: 
      const books = [
            {
                  bookName: "The Nature of Software Development",
                  author: "Ron Jeffries",
                  coverURL:
                        "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
            },
            {
                  bookName: "Clean Code",
                  author: "Robert Cecil Martin",
                  coverURL:
                        "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
            }
      ];
*/
const root = document.querySelector('#root');
const ul = document.createElement('ul');

const injectBooksToDOM = booksArray => {
    booksArray.forEach( book => {
        const p = document.createElement('p');
        p.innerHTML = `${book.bookName} - ${book.author}`;
        const img = document.createElement('img')
        img.setAttribute('src', `${book.coverURL}`);
        const li = document.createElement('li');
        li.appendChild(p);
        li.appendChild(img);
        ul.appendChild(li);
    });
    root.appendChild(ul);
    return true;
}

const books = [
    {
          bookName: "The Nature of Software Development",
          author: "Ron Jeffries",
          coverURL:
                "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
    },
    {
          bookName: "Clean Code",
          author: "Robert Cecil Martin",
          coverURL:
                "https://images-na.ssl-images-amazon.com/images/I/515iEcDr1GL._SX258_BO1,204,203,200_.jpg"
    }
];

injectBooksToDOM(books);

/*
5. What's the output for this snippet? Is the output deterministic (always the same) or might it depend on the browser
we run this in? 
Explain your answer in less than 150 words. (The 'yes or no' answer doesn't really matter to us, 
the explanation why is the important part)

function test() {
    console.log('one');
    setTimeout(function() {
        console.log('two');
        setTimeout(function() {
            console.log('three');
        }, 0);
    }, 1000);
    setTimeout(function() {
        console.log('four');
        setTimeout(function() {
            console.log('five');
        }, 1000);
    }, 0);
    console.log('six');
}
test(); // ? 
*/

/* 
1. console.log('one') => will be executed immediately (sync func);

2. setTimeout(function() {
    console.log('two');
    setTimeout(function() {
        console.log('three');
    }, 0);
}, 1000); => will be sent to web API's , not executed immediately, removed from call stack to web API's 
section of the browser (async function).

3. setTimeout(function() {
    console.log('four');
    setTimeout(function() {
        console.log('five');
    }, 1000);
}, 0); => same as number 2. 

4. console.log('six'); => will be executed.

5. so far now, our output is one and six (one,six) in order. Now we are waiting answers from the functions in the Web API's section, then they will be moved to Event Queue. 

6. in the number 2, setTimeOut has a delay of 1000 ms, but in the number 3, setTimeout has 0 
delay, so we will receive an answer from number 3 setTimeout and it isn in the call stack now. (execution area)
--Note: Even setTimeout has a delay of 0, js behaves as async and not execute it without sending to Web API's section.

7. number 3 setTimeout starts to be executed. console.log('four') will be print but,wow anaother setTimeout. Nested setTimeout will be sent to Web API's again. so far now, our output is  (one,six, four) in order.

8. now number 2 setTimeout has executed and moved from event queue to call stack. console.log('two') will be executed. wow, another nested setTimeout. It will be also sent to Web API's section from call stack .
so far now, our output is one and six (one,six, four ,two);

9. Now we have two setTimeouts in the Web API. These are:
setTimeout(function() {
    console.log('three');
}, 0);

setTimeout(function() {
    console.log('five');
}, 1000);
They will send answer according to their delays. But they come to the Web API's section in different time.
So sometimes, we see firstly five will be logged, but sometimes three. So the expected output is same for 
four items but not for last two.

OUTPUT = (one,six, four ,two, three, five) or
 (one,six, four ,two, five, three)
; Of course, each will be console logged. 

*/

