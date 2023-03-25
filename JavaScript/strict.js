// Strict mode
// in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, making it impossible to accidentally create a global variable

y = 69

console.log(y);    // no error



"use strict";

x = 3.14

console.log(x);   // error