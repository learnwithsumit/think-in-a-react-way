/*
 * Title: Main Script file
 * Description: A vanilla JS Implementation of costly DOM manipulation vs efficient DOM manipulation
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 02/08/2021
 *
 */

let array = [];
increment = 0;
let container = document.querySelector('.container');

// fast
while(increment < 10000) {
    array.push(++increment);
}

container.innerHTML = array.join(' ');

// slow

// while(increment < 10000) {
//     increment++;
//     // container.innerHTML += ' ' + increment;
// }