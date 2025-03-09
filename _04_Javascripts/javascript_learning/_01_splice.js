// Splice method in javascript:-
/*
The splice() method adds and/or removes array elements.
The splice() method overwrites the original array.

array.splice(index, count, item1, ....., itemX).

overview:-

index	Required.
The index (position) to add or remove items.
A negative value counts from the end of the array.

count	Optional.
Number of items to be removed.

item1, ...,	Optional.
The new elements(s) to be added.

*/

// ex: Adding in Array
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

// ex:- Removing in Array
// Create an Array
const fruitArr = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, remove 2 items
fruitArr.splice(2, 2);
console.log(fruitArr);

// ex:- Removing adding at one place.
// Create an Array
const Basket = ["Potato", "Carrot", "Apple", "Mango"];

// At position 2, remove 1 item, add "Lemon" and "Kiwi"
Basket.splice(2, 1, "Lemon", "Kiwi");
console.log(Basket);
