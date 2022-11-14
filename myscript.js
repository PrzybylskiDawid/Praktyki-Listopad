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

