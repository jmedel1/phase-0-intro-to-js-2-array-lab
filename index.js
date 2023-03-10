// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (name) {
    cats.push("Ralph");
    console.log(cats);
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    console.log(cats);
}
function destructivelyRemoveLastCat() {
    cats.pop();
    console.log(cats);
}
function destructivelyRemoveFirstCat() {
    cats.shift();
    console.log(cats);
}
function appendCat(name) {
  return [...cats,"Broom"];
}
function prependCat(name) {
    return ["Arnold", ...cats];
}
function removeLastCat() {
    return cats.slice(0, -1);
}
function removeFirstCat() {
    return cats.slice(1, 4);
}