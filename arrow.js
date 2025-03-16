const hello0 = function() {
    return "hello";
}
const hello1 = () => {
    return "hello";
}
const hello2 = () => "hello";
const hello3 = (name) => `hello ${name}`;
const hello4 = name => `hello ${name}`;

console.log(hello0());
console.log(hello1());
console.log(hello2());
console.log(hello3("thierry"));
console.log(hello4("tafitasoa"));