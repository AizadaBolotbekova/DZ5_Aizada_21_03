function revers (){
    let word = prompt("Введите текс")
    let newWord = "";
    let dlina = word.length - 1;
    for (let i = dlina; i >= 0; i--){
        word[i];
        newWord = newWord + word[i];
    }
    console.log(newWord)
}
revers();

/////////////////////////////////////////////////////////////////////

let r = function averge (){
    let sum = 0;
    for (let a = 0; a < arguments.length; a++){
        sum = sum + arguments[a];

    }
    return sum / arguments.length;

}
console.log(r(4,5, 9, 2));
