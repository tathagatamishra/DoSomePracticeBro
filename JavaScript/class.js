class human {
    talk() {
        return 'Talking...'
    }
}

let me = new human()
let you = new human()

console.log(me.talk());
console.log(you.talk());

console.log(me);