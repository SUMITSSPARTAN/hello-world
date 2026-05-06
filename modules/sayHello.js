export function sayHello() {
    return console.log(`Hello world!`);
}

export function sayHelloTo(name) {
    return console.log(`Hello ${name}!`);
}

export function sayHelloToEveryone(names) {
    return names.forEach(name => console.log(`Hello ${name}!`));
}