// summing array elements
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);


// finding max element in an array
 var numbers = [7, 3, 9, 5, 1];
 var max = numbers[0];

for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}

console.log(max);

// finding numbers divisible by 5
var numbers = [10, 12, 15, 18, 20, 25];
var divisibleByFive = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 5 === 0) {
    divisibleByFive.push(numbers[i]);
  }
}

console.log(divisibleByFive); 


// finding numbers multiplication using arrays
 var numbers = [3,4,5,6];
var  multiplication = 1;

for (var i = 0; i < numbers.length; i++) {
  multiplication *= numbers[i];
}

console.log(multiplication); 




