console.log('Hi!');

setTimeout(() => {
    console.log('Execute immediately.');
}, 0);

console.log('Bye!');


// Event loop is a endless loop, which wait for a task, if it got a task, it execute them & wait for next task


// when we call function, it goes into queue & event loop grab that function from queue & put it in stack for exeuction.

// so, the event loop always loops between queue & call stack