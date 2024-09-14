// part 1 
// Take an array of numbers and return the sum. 

const arrayOfNumbers = [88, 28, 82, 22]
function returnTheSum(anArray) {
    let total = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        total += arrayOfNumbers[i]
    }
    return total;
}

console.log(returnTheSum(arrayOfNumbers))
console.log(arrayOfNumbers.length)

// Take an array of numbers and return the average.
function returnTheAverage(array) {
    let average = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let currentNumber = arrayOfNumbers[i]
        average += currentNumber;
    }
    average = average / arrayOfNumbers.length
    return average
}

console.log(returnTheAverage(arrayOfNumbers))




// Take an array of strings and return the longest string.
const arrayOfStrings = ["Ashley", "Hamilton", "nostalgia", "Autumn", "baconeggandcheese"]

function theLongestString(arr) {
    let longest = ""

    for (let i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i].length > longest.length) {
            longest = arrayOfStrings[i]
        }
    }
    return longest
}

console.log(theLongestString(arrayOfStrings))





// Take an array of strings, and a number and return an array of the strings that are longer than the given number.


function filterLongerStrings(arr, minlength) {
    return arrayOfStrings.filter(str => str.length > minlength)
}

const minlength = 8

const longStrings = filterLongerStrings(arrayOfStrings, minlength)

console.log(longStrings)


// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
function everyNumbrBetween1And(n, current =1){
    if(current>n){
        return
    }
    console.log(current)
    everyNumbrBetween1And(n, current+1)
}

// const n = 8

console.log(everyNumbrBetween1And(10))