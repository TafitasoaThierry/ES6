/* (...) */
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [1,2,3,4,5,6,7,8,9,10];

const joinArr = [...arr1, ...arr2];
const [one, two, ...ambony] = arr3;

console.log(joinArr);
console.log(`${one}, ${two}, ambony: ${ambony}`);