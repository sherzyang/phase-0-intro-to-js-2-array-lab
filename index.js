// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];
cats;

function destructivelyAppendCat(name) {
    console.log(cats.push(name));
    console.log(cats);
}

function destructivelyPrependCat(name) {
    console.log(cats.unshift(name));
    console.log(cats);
}

function destructivelyRemoveLastCat() {
    console.log(cats.pop());
    console.log(cats);
}

function destructivelyRemoveFirstCat() {
    console.log(cats.shift());
    console.log(cats);
}

function appendCat(name) { 
    let newCats = [...cats];
    console.log(newCats.push(name));
    return newCats;
}

function prependCat(name) { 
    let newCats = [...cats];
    console.log(newCats.unshift(name));
    return newCats;
}

function removeLastCat() { 
    let newCats = [...cats];
    console.log(newCats.pop());
    return newCats;
}

function removeFirstCat() { 
    let newCats = [...cats];
    console.log(newCats.shift());
    return newCats;
}