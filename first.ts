// console.log("typescript hello Done");

// function add(a , b){
//     return a + b;
// }
// document.write("add  "+add(5,8));

// let n=5;
// let star = "";

// for(let i=0;i<=n;i++){
//     for(let j=0; j<i ; j++){
//  star +="*";
//     }
//     star +="\n";
// }
// console.log(star);
//document.write("\n " +star );

// output

// *
// **
// ***
// ****
// *****
// ramesh devlop
let n=5;
let star = "";


for(let i=0;i<=n;i++){
    for(let j=0; j<n - i ; j++){
 star += " ";
    }
    for(let k=0; k< i ; k++)
    {
        star +="*";   
    }
    star +="\n";
}
console.log(star);