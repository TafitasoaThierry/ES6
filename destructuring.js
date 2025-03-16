const arr = ["akondro", "paoma", "mananasy"];
const item01 = arr[0];
const item02 = arr[1];
const item03 = arr[2];
console.log(`${item01}, ${item02}, ${item03}`);

const [item11, item12, item13] = arr;
console.log(`${item11}, ${item12}, ${item13}`);


/* application with function */
function calculate(x,y){
    return [x+y, x-y, x*y, x/y];
}
const [add, substract, multiply, divide] = calculate(6,3);
console.log(`${add}, ${substract}, ${multiply}, ${divide}`);