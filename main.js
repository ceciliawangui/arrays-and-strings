/*push(): The push() method adds one or more elements to the end 
of an array and returns the new length of the array.*/
let fruits = ['apple', 'banana','mango'];
fruits.push('kiwi');
console.log(fruits);




/*The shift() method removes the first element from an array and and changes
 the length of an array*/
 let x =['apple','banana','mango'];
 x.shift();
 console.log(x);



 /*The unshift() method adds one or more elements to the beginning of an
  array and returns the new length of the array.*/
  let b =['banana','mango'];
  b.unshift('apple');
  console.log(b);



  /*The pop() method removes the last element from an array and 
  returns that removed element.it also changes array length*/
  let c =['apple','banana','mango'];
 c.pop();
 console.log(c);



/*The length property returns the number of elements in an array.
Example:*/
let d=['cess','jill','ian','ann'];
console.log(d.length);


/*The splice() method changes the contents of an array by removing or replacing existing
 elements and/or adding new elements*/
 let e=['cess','jill','ian','ann'];
 e.splice(2,1,'marion');
 console.log(e)




 /*The reduce() method applies a function against an accumulator and each element in the array to
  reduce it to a single value.*/
  let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum);


/*The includes() method determines whether an 
array includes a certainand if present it returns TRUE/FALSE*/
let f=['cess','jill','ian','ann'];
console.log(f.includes('marion'));
console.log(f.includes('sam'));


/*The join() method creates and returns a new string by concatenating all
 of the elements in an array.*/
 let g = ['cess','jill','ian','Ann'];
let gString = g.join(', ');
console.log(gString);



/*The indexOf() method returns the index of the first occurrence of a specified value in an array,
 or -1 if it is not present.*/
 let h = ['apple', 'banana', 'orange'];
console.log(h.indexOf('banana')); 
console.log(h.indexOf('mango'));





/*The find() method returns the value of the first element in an array that satisfies the provided testing function,
 or undefined if no values satisfy the function.In this example, the find() method is used to find the first number in the array 
 that is greater than 3In this case, the arrow function (number => number > 3) checks if the number is greater than 3, and returns 
 true if it is*/
 let number = [1, 2, 3, 4, 5];
let foundNumber = number.find(number => number > 3);
console.log(foundNumber); 


/*The charAt() method returns the character at the specified index in a string.
In this example, the charAt() method is used to retrieve the character at index 1 in the string str, 
which is "e".
*/
let str = "Hello, world!";
console.log(str.charAt(1)); 
/* The concat() method concatenates two or more strings, 
and returns a new string.In this example, the concat() method is used to concatenate str1 and str2 into a new string,
 greeting.*/
 let str1 = "Hello, ";
let str2 = "world!";
let greeting = str1.concat(str2);
console.log(greeting);


/*The replace() method replaces a specified value or regular expression in a string with another value, and returns a new string.
In this example, the replace() method is used to replace the URL in str with a new URL.*/
let str3 = "Please visit https://www.example.com";
let newStr3 = str3.replace("https://www.example.com", "https://www.newsite.com");
console.log(newStr3); // Output: "Please visit https://www.newsite.com"



/*The split() method splits a string into an array of substrings based on a 
specified delimiter.In this example, the split() method is used to split the string str into an array of strings, with the comma and
 space as the delimiter.*/
 let str4 = "apple, banana, orange";
let arr = str4.split(", ");
console.log(arr); // Output: ["apple", "banana", "orange"]




/*The substr() method returns a portion of a string starting from the specified index and up to the specified length.
  In this example, the substr() method is used to extract the substring "world" from str.*/
  let str5 = "Hello, world!";
let newStr5 = str5.substr(7, 5);
console.log(newStr5); // Output: "world"

/*The substring() method returns a portion of a string between the specified start and end indexes.
In this example, the substring() method is used to extract the substring "world" from str.*/
let str6 = "Hello, world!";
let newStr6 = str6.substring(7, 12);
console.log(newStr6); // Output: "world"



/*The slice() method returns a portion of a string between the specified start and end indexes.
In this example, the slice() method is used to extract the substring "world" from str.*/
let str7 = "Hello, world!";
let newStr7 = str7.slice(7, 12);
console.log(newStr7); // Output: "world"


/*toUpperCase(): The toUpperCase() method converts a string to uppercase letters.
*/
let str8 = "Hello, world!";
let newStr8 = str8.toUpperCase();
console.log(newStr8);



/*toLowerCase(): The toLowerCase() method converts a string to lowercase letters.
In this example, the toLowerCase() method is used to convert the string str to lowercase letters.*/
let str9 = "Hello, WORLD!";
let newStr9 = str9.toLowerCase();
console.log(newStr9); // Output: "hello, world!"

/*group work/
/*TO FIND DUPLICATES IN AN ARRAY//
In this code, we start by creating an array array with some values, including duplicates. 
We also create an empty array duplicates to store the duplicate values we find.
We then use a nested for loop to compare each element in the array to every other element that comes after it. The i variable represents the index of the first element being compared, and the j variable represents the index of the second element being compared.
If we find two elements that are equal, we check if the duplicates array already includes that value. 
If not, we push the value to the duplicates array.
Finally, we output the duplicates array to the console using console.log().
 In this example, the output is [2, 1, 3], which are the three duplicate values in the array.*/
let array = ['lucy', 'lucy', 3, 2, 4, 1, 5, 3];
let duplicates = [];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] === array[j] && !duplicates.includes(array[i])) {
      duplicates.push(array[i]);
    }
  }
}

console.log(duplicates); // Output: [2, 1, 3]

/* To REVERSE AN ARRAY 
The reverse() method is a built-in method in JavaScript that reverses the order of the elements in an array.
 Here's an example:In this code, we start by creating an array array with some values. 
 We then call the reverse() method on the array to reverse the order of its elements,
  and store the result in a new variable reversedArray.
Finally, we output the reversedArray to the console using console.log(). 
In this example, the output is [5, 4, 3, 2, 1], which is the original array with its elements reversed.*/
let array3 = [1, 2, 3, 4, 5];
let reversedArray3 = array3.reverse();
console.log(reversedArray3); // Output: [5, 4, 3, 2, 1]

//USING LOOP//
let array4 = [1, 2, 3, 4, 5];
let reversedArray4 = [];

for (let i = array4.length - 1; i >= 0; i--) {
  reversedArray4.push(array[i]);
}

console.log(reversedArray4); // Output: [5, 4, 3, 2, 1]

/*FIND THE LEAST AND HIGHEST VALUE IN AN ARRAY
To find the lowest and highest values in an array in JavaScript, you can use the built-in Math.min() 
In this code, we start by creating an array array with some values.
We then use the Math.min() and Math.max() functions with the spread operator (...) 
to extract the minimum and maximum values from the array, and store them in the variables minValue and maxValue, respectively.
Finally, we output the minValue and maxValue to the console using console.log(). 
In this example, the output is "Minimum value: 2" and "Maximum value: 10",
 which are the lowest and highest values in the array, respectively.*/
 let array5 = [5, 10, 2, 8, 3];

let minValue = Math.min(...array);
let maxValue = Math.max(...array);

console.log("Minimum value: " + minValue); // Output: "Minimum value: 2"
console.log("Maximum value: " + maxValue); // Output: "Maximum value: 10"



/*Move all the negative elements to one side
In this example, the function is called with an array containing both positive and negative elements.
 After calling the function, the negative elements are all moved to the left side of the array.*/
 let arr2 = [1, -2, 3, -4, 5, -6];
arr2 = moveNegativeElementsToLeft(arr2);
console.log(arr2); // Output: [-2, -4, -6, 1, 3, 5//

let name='whitecars'
console.log(isnamePalindrome('whitecar')); // Output: true
//console.log(isPalindrome('Hello, world!')); // Output: false//






