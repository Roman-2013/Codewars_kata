const str = 'Hello, World!';
const regex = /[^A-Z]/g;
const result = str.match(regex);
console.log(result); // [',', ' ', '!']