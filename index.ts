import Stack from "./data-structures/Stack";

const stack: Stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

const pop: any = stack.pop();
console.log("pop:", pop)