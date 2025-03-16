/* map in array */
const arr = [1,2,3,4,5];
const list = arr.map((item) => item*2)
console.log(list);

/* application in object */
const Person = [
    {
        "id": 0,
        "birth": 2020,
        "now": 2025
    },
    {
        "id": 1,
        "birth": 2004,
        "now": 2025
    },
    {
        "id": 2,
        "birth": 2006,
        "now": 2025
    },
]
const age = Person.map((e) => e.now - e.birth);
console.log(age);