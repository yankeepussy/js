// let a = 1;
// let b = 1;

// let c = ++a + --a + b-- - b;//4

// let d = b++ - a - ++b + b++ - --a;

// console.log(d);
// let a = 2;
// let x =
// 5
// +
// (a *= 2

// +

// (a += 4)//6

// +

// a++);//6
// console.log(x, a);

// let whoIsIt;
// let item1 = `cap`;
// let item2 = `glasses`;
// let mix = item1 + item2;
// let givenItem = item1;

// if (givenItem === item1) {
//   whoIsIt = `Alex`;
// } else if (givenItem === item2) {
//   whoIsIt = `Mahmud`;
// } else if (givenItem === mix) {
//   whoIsIt = `Axror or Elyor akalar`;
// } else whoIsIt = `I don't know`;

// console.log(whoIsIt);

// let firstValue = +prompt(`Введите первое число `);
// let operation = prompt(`что надо сделать со значениями`);
// let secondValue = +prompt(`Введите второе число`);

// if (operation === `+`) {
//   console.log(firstValue + secondValue);
// } else if (operation === `-`) {
//   console.log(firstValue - secondValue);
// } else if (operation === `*`) {
//   console.log(firstValue * secondValue);
// } else if (operation === `/`) {
//   console.log(firstValue / secondValue);
// } else {
//   console.log(`idi naxuy`);
// }








//есть викинги, викинги убивают детей,
//есть кол-во деревень которые указываются нами
//есть кол-во месяцов, за которое уничтожаются деревни
//рассчитать кол-во убитых детей за n кол-во времени, учитывая что деревня состоит из m кол-ва человек, где 20% это дети





const Output = document.querySelector("#first")
let lines = prompt("Сколько звезд");
let string = "";

for ( let i = 0; i < lines; i++){
   string += "*"
   Output.innerHTML += string + "<br>"
}

console.log(Output);

const output2 = document.querySelector(".second");
let lines2 = prompt("Сколько звезд");
let string2 = "";

let count = lines2;
for (let i = 0; i < lines2 ; i++) {
   string2 = ""
   for (let j = 0; j < count; j++) {
    string2 += "*"

    
   }
   count--
output2.innerHTML += string2 + "<br>"
    
}

const output3 = document.querySelector(".third");
let lines3 = prompt("qvadrat");
for (let i = 0; i < lines3; i++) {
    let string3 = "";
    
    for (let j = 0; j < lines3; j++) {
        string3 += "*"
        
    }
    output3.innerHTML += string3 + "<br>"

    
}