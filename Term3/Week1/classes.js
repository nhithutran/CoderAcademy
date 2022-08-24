// // What are classes
// // Classes is a template for creating object in Javascript


// class Rectangle {
//     constructor (height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     area() {
//         return this.height * this.width;
//     }

// }

// let myRect = new Rectangle(5, 8);
// console.log(myRect);
// console.log(myRect.area());


// How one class inherits from another by using the extends keyword

class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}

class Square extends Shape {
    isSquare() {
        if (this.height === this.width) {
            console.log("I am a square!")
        } else {
            console.log("Nope I'm not a square.")
        }
    }
}

let square = new Square(5, 5);
square.area();
// square.isSquare();
