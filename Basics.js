let a = 10;
a += a;
a++;
// a%=a;
console.log(typeof a);
console.log(a);
a = "a";
a **= a;
console.log(a);
console.log(typeof a);
a = "B";
console.log(a);
console.log(typeof a);
console.log(NaN - NaN);
console.log(NaN - 1);
console.log(NaN * NaN);
console.log(NaN / NaN);
console.log(NaN % NaN);
console.log(12 ** 2 * 5 + 1 * 4 - 9);
let y = 12;
console.log("---Pre and Post---");
console.log(y);
console.log(--y);
console.log(y);
console.log(y--);
console.log(y);
let x;
console.log(x);
x = "";
console.log(typeof x);
x = "";
console.log(x);
x = "BlueCat";
console.log(x[3] + " " + x[2]);
a = x.length;
console.log(x[a - 1]);
let age = 20;
console.log(`Hello Everyone, I am ${age} years old`);
console.log(
  `The length of the x var is ${x.length + " " + x + " "}, and this is my age ${
    age + 1
  }`
);
a=10;
b="10";
c=10;
console.log(a==b);
console.log(a===b);
console.log(a===c);
d=65;
console.log(a>=12);
console.log(a>=c);
console.log(d<=c);