/*
Complete each of the following tasks by writing code to manipulate the provided
arrays. Your solution should only use the array methods covered in the lesson:
push(), pop(), unshift(), shift(), includes(), indexOf(), lastIndexOf(),
concat(), slice(), splice(), sort(), and reverse(). Submit the final version of
the arrays as specified after each task.
Tasks

Task 1: Adding and Removing Elements
    Start with the array:
let fruits = ["apple", "banana", "cherry"];
    Add "orange" to the end of the array.
    Remove the first element.
    Add "grape" to the beginning of the array.
    Submit the final fruits array.
Expected Output:
["grape", "banana", "cherry", "orange"]

Task 2: Query and Access
    Start with the array:
let colors = ["red", "blue", "green", "blue", "yellow"];
    Check if "blue" is in the array (using includes()).
    Find the first index of "blue" (using indexOf()).
    Find the last index of "blue" (using lastIndexOf()).
    Submit the results as an array in the following format:
[includesResult, firstIndex, lastIndex]
Expected Output:
[true, 1, 3]

Task 3: Combining Arrays
    Start with these two arrays:
let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];
    Combine the two arrays into a single array called allTeams.
    Add "Eve" to the end of the combined array.
    Submit the final allTeams array.
Expected Output:
["Alice", "Bob", "Charlie", "Diana", "Eve"]

Task 4: Extracting and Splicing
    Start with the array:
let numbers = [10, 20, 30, 40, 50];
    Use slice() to create a new array called middleNumbers containing only the
second and third elements.
    Use splice() to remove the last two elements from the original array and
add 60 and 70 in their place.
    Submit both the middleNumbers and modified numbers arrays.
Expected Output:
middleNumbers: [20, 30]
numbers: [10, 20, 30, 60, 70]

Task 5: Sorting and Reversing
    Start with the array:
let scores = [85, 70, 95, 60, 75];
    Sort the scores in ascending order.
    Reverse the sorted array.
    Submit the final scores array.
Expected Output:
[95, 85, 75, 70, 60]
*/


//Task 1:
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
fruits.shift();
fruits.unshift("grape");

console.log(fruits);

//Task 2:
let colors = ["red", "blue", "green", "blue", "yellow"];
let includesResult = colors.includes("blue");
let firstIndex = colors.indexOf("blue");
let lastIndex = colors.lastIndexOf("blue");

console.log([includesResult, firstIndex, lastIndex]);

//Task 3:
let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];
let allTeams = teamA.concat(teamB);
allTeams.push("Eve");

console.log(allTeams);

//Task 4:
let numbers = [10, 20, 30, 40, 50];
let middleNumbers = numbers.slice(1, 3);
numbers.splice(-2, 2, 60, 70);

console.log(middleNumbers);
console.log(numbers);

//Task 5:
let scores = [85, 70, 95, 60, 75];
scores.sort((a, b) => a - b);
scores.reverse();

console.log(scores);