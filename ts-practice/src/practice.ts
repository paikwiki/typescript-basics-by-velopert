// 9th
class Queue<T> {
  list: T[] = [];

  get length() {
    return this.list.length;
  }

  enqueue(item: T) {
    this.list.push(item);
  }

  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

// // 8th
// interface Items<T> {
//   list: T[];
// }

// const items: Items<string> = {
//   list: ['a', 'b', 'c']
// };

// console.log(items);

// type Items2<T> = {
//   list: T[];
// };

// const items2: Items2<string> = {
//   list: ['a', 'b', 'c']
// }

// console.log(items2);

// // 7th
// function merge<A, B>(a: A, b: B): A & B {
//   return {
//     ...a,
//     ...b,
//   };
// }

// const merged = merge({ foo: 1 }, { bar: 1 });
// console.log(merged);

// function wrap<T>(param: T) {
//   return {
//     param
//   }
// }

// const wrapped = wrap(10);
// console.log(wrapped);

// // 6th
// type Person = {
//   name: string;
//   age?: number;
// };

// type Developer = Person & {
//   skills: string[];
// };

// const person: Person = {
//   name: "김사람",
// };

// const expert: Developer = {
//   name: "김개발",
//   skills: ["javascript", "react"],
// };

// type People = Person[];
// const people: People = [person, expert];

// type Color = "red" | "orange" | "yellow";
// const color: Color = "red";
// const colors: Color[] = ["red", "orange"];

// // 5th
// interface Person {
//   name: string;
//   age?: number;
// }

// interface Developer extends Person {
//   skills: string[];
// }

// const person: Person = {
//   name: "김사람",
//   age: 20
// };

// const expert: Developer = {
//   name: "김개발",
//   skills: ['javascript', 'react']
// };

// const people: Person[] = [person, expert];

// // 4th
// interface Shape {
//   getArea(): number;
// }

// class Circle implements Shape {
//   constructor(public radius: number) {
//     this.radius = radius;
//   }

//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }

// class Rectangle implements Shape {
//   constructor(private width: number, private height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// const circle = new Circle(5);
// const rectangle = new Rectangle(10, 5);

// console.log(circle.radius);
// // console.log(rectangle.width); // Error

// const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];
// shapes.forEach((shape) => {
//   console.log(shape.getArea());
// });

// // 3rd
// function sum(x: number, y: number): number {
//   return x + y;
// }
// console.log(sum(1, 2));

// function sumArray(numbers: number[]): number {
//   return numbers.reduce((acc, current) => acc + current, 0);
// }
// const total = sumArray([1, 2, 3, 4, 5]);
// console.log(total);

// function returnNothing(): void {
//   console.log("I am just saying hello world");
// }
// returnNothing();

// // 2nd
// let count = 0; // 숫자
// count += 1;
// // count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!

// const message: string = 'hello world'; // 문자열

// const done: boolean = true; // 불리언 값

// const numbers: number[] = [1, 2, 3]; // 숫자 배열
// const messages: string[] = ['hello', 'world']; // 문자열 배열

// // messages.push(1); // 숫자 넣으려고 하면.. 안된다!

// let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
// let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

// let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
// color = 'yellow';
// // color = 'green'; // 에러 발생!

// // 1st
// const message: string = "hello world";
// console.log(message);
