/*
 * Title: Main Script file
 * Description: A vanilla JS Implementation of a simple Counter that adds 1 to each user click
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 02/03/2021
 *
 */

let number = 0;

const display = document.querySelector("#display");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  number++;
  display.textContent = number;
});