// Your code here
class Polygon {
    constructor(array = []) {
        this.array = array;
    }

    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        return this.array.reduce((acc, side) => acc = side + acc, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        let [a, b, c] = this.array;
        if (a + b > c && a + c > b && b + c > a) {
            return true;
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let [a, b, c, d] = this.array;
        if (a === b && c === d && b === d && b === c) {
            return true;
        } else {
            return false;
        }

    }

    get area() {
        const value = this.isValid

        if (value === true) {
            return this.array[0] ** 2;
        } else {
            return 'this is not a square'
        }
    }
}

const triangle = new Triangle([15, 10, 1])
const triangle1 = new Triangle([5, 5, 5])
const square = new Square([5, 10, 5, 5])
console.log(square.area)
console.log(square.isValid)
console.log(triangle.isValid)
console.log(triangle1.isValid)