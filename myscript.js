function handleCalculatorForm(form){

    let toDisplay = form.inputbox.value;
    let toDisplay2 = form.inputbox5.value;
    let znak = form.znak.value;
    document.getElementById("calcResult").innerHTML = calculate(toDisplay, toDisplay2, znak);
}

function handlePalindromeForm(form){

    let formValue = form.inputbox2.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}

function calculate(var1, var2, znak){

    var1 = parseInt(var1)
    var2 = parseInt(var2)
    znak = parseInt(znak)

    switch (znak) {
        case 1:
            return var1 + var2;
    
        case 2:
            return var1 - var2;        
        
        case 3:
            return var1 / var2;         
        
        case 4:
            return var1 * var2;   
    }

}

function palindrome(var1){
    var2 = var1;
    flag = true;
    j = 0;
  
    for (let i = var1.length; i >= 1; i--) {
        if (var1[j] != var2[i-1]) {
            flag = false
            break;
        }
        j++;
    }

    return flag;
}

liczby = [1, 5 ,10, 15, 14];
liczby2 = [1,1, 3, 3, 4 ,4];
imiona = ["ala", "robert", "stanislaw", "ala"];

function zad3(arr) {

    arr = bubbleSort(arr);
    var1 = arr[arr.length-1];
    for (let i = arr.length-1; i >= 0; i--) {
        if (var1 > arr[i]) {
            var1 = arr[i];
            break;
        }
    }

    return var1;
}
console.log(zad3(liczby));

function handleAnagramForm(form){

    let word1 = form.inputbox3.value;
    let word2 = form.inputbox4.value;
    document.getElementById("anagramResult").innerHTML = anagram(word1, word2);
}

function bubbleSort(arr){
    
    for(var i = 0; i < arr.length; i++){
       
        for(var j = 0; j < ( arr.length - i -1 ); j++){
         
            if(arr[j] > arr[j+1]){           
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

function anagram(var1, var2) {
    let word1 = [];
    let word2 = [];
    let flag = true;

    word1ASCII = [];
    word2ASCII = [];

    word1 = var1.split('');
    word2 = var2.split('');

    if(word1.length == word2.length){
        for(let i = 0; i < word1.length; i++){
            word1ASCII[i] = word1[i].charCodeAt(0);
        }

        for(let i = 0; i < word2.length; i++){
            word2ASCII[i] = word2[i].charCodeAt(0);
        }

        word1ASCII = bubbleSort(word1ASCII);
        word2ASCII = bubbleSort(word2ASCII);

        console.log(word1ASCII);
        console.log(word2ASCII);


        for(let i = 0; i < word1ASCII.length; i++){
            if (word1ASCII[i] != word2ASCII[i]){
                flag = false;
                break;
            }
        }
    }
    else {
        return false;
    }
    return flag;
}


var3 = [];

function rec(var1, var2) {

    if (var1 <= var2) {
        var3.push(var1)
        var1++;
        rec(var1, var2)
    }
}
rec(1, 10)

console.log(var3);


// 18.11.2022

const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

// 1
let szczalka = (arr1, arr2) => [...arr1, ...arr2];

console.log("zadanie 1: " + szczalka(arr1, arr2))

// 2
let szczalka2 = (arr1) => [arr1.reverse()[0]];

console.log("zadanie 2: " + szczalka2(arr1))

// 3
const filter = numbers.filter(numbers => numbers >= 2);

console.log("zadanie 3: " + filter)

// 4
const initialValue = 0;
const sumWithInitial = numbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log("zadanie 4: " + sumWithInitial);

// 5
const map = numbers.map(x => x * x + 3);
console.log("zadanie 5: " + map);

const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
 ];
 
 const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
 
 // 6
 const TitleLength = (book) => book.map(book => book.title.split(' ').join('').length) 
 const FilterTitleEndsWithY = (list) => list.filter((book) => book.genre.endsWith('y'));
 const EvenPages = (list) => list.filter((book) => book.pages % 2 == 0);
 
 const zad6 = compose(TitleLength, FilterTitleEndsWithY, EvenPages)
 
 console.log("zadanie 6: " + zad6(books));
 
 // 7
 const SumRatings = (book) => book.reduce((currSum, newRate) => currSum + newRate, 0)
 const OddPages = (list) => list.filter((book) => book.pages % 2 != 0);
 const OddPositiveRating = (list) => list.filter((book) => book.rating > 5);
 const TitleWithNumber = (list) => list.filter((book) => /\d/.test(book.title));
 
 const zad7 = compose(SumRatings, OddPages, OddPositiveRating, TitleWithNumber) 
 
 console.log("zadanie 7: " + zad7(books));
 
 // 8

// 9

const promise = new Promise(function(Resolve) {
    setTimeout(function(){Resolve("Udało się!"); }, 5000);
  });
  
  promise.then(function(value) {
    console.log(value);
  });


// 10
function multiplyAsync(x, y) {
    
    const promise10 = new Promise((resolve, reject) =>{

        if (typeof x === 'number' && typeof y === 'number') {
            resolve(x * y)
        }
        else{
            reject("zły typ >:(")
        }
    })

    promise10.then((result)=>

        console.log(result))
    .catch(error=>console.error(error))
        
 

}   

multiplyAsync(2,"h")
