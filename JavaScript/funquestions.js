// write function to find average of array of numbers
function average(array){
    var sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i]
    }
    return sum/array.length;
}

const averageNumber=average([1,2,3,4,5,6,7,8,9,10]);
console.log(averageNumber);

// using reduce methodS
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
  }
const resultcalculateAverage=calculateAverage([1,2,3,4,5,6,7,8,9,10]);
console.log(resultcalculateAverage);  

// function that reverse a string
function reverseString(str){
    var reverseStr="";
    for(let i=str.length-1;i>=0;i--){
        reverseStr+=str[i];
    }
    return reverseStr;
}
const resultReverseString=reverseString("hello");
console.log(resultReverseString);

// Write a function that generates a random number between a given minimum and maximum.
function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
const resultRandom=random(1,10);
console.log(resultRandom);


// Write a function that checks whether a passed string is palindrome or not?
function palindrome(str){
    var reverseStr="";
    for(let i=str.length-1;i>=0;i--){
        reverseStr+=str[i];
    }
    if(reverseStr===str){
        return true;
    }
    return false;
}
const resultPalindrome=palindrome("madam");
console.log(resultPalindrome);

// Write a function that capitalizes the first letter of each word in a sentence.
function capitalize(str){
    var arr=str.split(" ");
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1);
    }
    return arr.join(" ");
}
const resultCapitalize=capitalize("hello world");
console.log(resultCapitalize);

// . **Write a function that counts the number of occurrences of a specific element in an array.**
function countOccurrences(array,searchElement){
    var count=0;
    for(let i=0;i<array.length;i++){
        if(array[i]===searchElement){
            count++;
        }
    }
    return count;
}
const resultCountOccurrences=countOccurrences([1,2,3,4,5,6,7,8,9,10],1);
console.log(resultCountOccurrences);

// **Write a function that merges two arrays and returns the sorted result.**
function mergeAndSort(arr1,arr2){
    var arr3=arr1.concat(arr2);
    return arr3.sort((a,b)=>a-b);
}
const resultMergeAndSort=mergeAndSort([1,2,3,4,5],[6,7,8,9,10]);
console.log(resultMergeAndSort);

// Write a function that rotates an array by n elements. For example, if you rotate [1,2,3,4,5,6] by two elements, you get [3,4,5,6,1,2].
function rotateArray(arr,n){
    for(let i=0;i<n;i++){
        arr.unshift(arr.pop());
    }
    return arr;
}
const resultRotateArray=rotateArray([1,2,3,4,5,6],2);
console.log(resultRotateArray);


// Create a function that converts a number to its Roman numeral representation.


// Create a function that takes a string and returns an object stating whether vowels or consonants (a, e, i, o, u) are more frequent in the string.
function vowelsAndConsonants(str){
    var vowelsCount=0;
    var consonantsCount=0;
    var vowels="aeiou";
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            vowelsCount++;
        }
        else{
            consonantsCount++;
        }
    }
    return {
        vowelsCount,
        consonantsCount
    }
}
const resultVowelsAndConsonants=vowelsAndConsonants("hello world");
console.log(resultVowelsAndConsonants);


// **Write a function that truncates a string if it exceeds a specified length and appends "..." to the end.**
function truncateString(str,n){
    if(str.length>n){
        return str.slice(0,n)+"...";
    }
    return str;
}
const resultTruncateString=truncateString("hello world",5);
console.log(resultTruncateString);

// Create a function that checks if a given string contains only digits.**
function checkDigits(str){
    for(let i=0;i<str.length;i++){
        if(!Number.isInteger(parseInt(str[i]))){
            return false;
        }
    }
    return true;
}
const resultCheckDigits=checkDigits("123456789");
console.log(resultCheckDigits);


// **Write a function that removes all falsy values (false, null, 0, "", undefined, and NaN) from an array.**
function removeFalsyValues(arr){
    return arr.filter(Boolean);
}
const resultRemoveFalsyValues=removeFalsyValues([false, null, 0, "", undefined, NaN,1,2,3,4,5,6,7,8,9,10]);
console.log(resultRemoveFalsyValues);

// **Create a function that generates a new array with unique values from a given array.**
function uniqueValues(arr){
    return [...new Set(arr)];
}
const resultUniqueValues=uniqueValues([1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]);
console.log(resultUniqueValues);

// make person object with name and age and call it using map method
const person=[
    {
        name:"john",
        age:20
    }
]
const resultPerson=person.map((item)=>item.name);
console.log(resultPerson);




 





