// JS loops
// While loop that counts up to 3
// let number = 0;

// while (number < 4) {
//     console.log(number);
//     number++; // increments the number by 1
// }

/* Do while statement is executed least once b/c while condition is 
written at the bottom. Syntax has 'do' and semicolon at the end*/
// let number = 0;

// do {
//     console.log(number);
//     number ++;
// } while (number < 4);


/* let i = 0 initialization (executed once bf code block), i < 4 is stopping condition,
i++ is executed on ech iteration, updates interator ech time loop is done */
// for (let i = 0; i < 4; i++;) {
//     console.log(i)
// }

// Reverse loop print out: 3, 2, 1, 0. Check 3 >= and is TRUE
// for (let i = 3; i >= 0; i--) {
//     console.log(i)
// }

// [1, 2, 3, 4, 5, 6] want to print : 1, 6 | 2, 5 | 3, 4
// const arr = [1, 2, 3, 4, 5, 6];
// let rightIndex = arr.lenght-1; //5
// for (let left=0, right=rightIndex; left < right; left++, right--) {
//     console.log(arr[left], arr[right]);
// }

// for in use for objects
// const pet = {nickName: 'peanut', animal: 'dog', age:1.5}
//     for (const property in pet) {
//         console.log(`${k}: ${pet[k]}`)
// }

// for of used on Arays
cosnt array1 = ['a', 'b', 'c'];
for (const element of array1) {
    console.log(element);
}