let a ="Hello ";

for(let i =0;i<3;i++){
    console.log(i+1);
}
console.log(a);
console.log("Meow");

// console.log(process.version);
// console.log(process.cwd);
// console.log(process.release);
console.log(process.argv);

let args = process.argv;

for(let i=2;i<args.length;i++){
    console.log("Meow ", args[i]);
}

let c= require = ("./temp");

console.log(c);