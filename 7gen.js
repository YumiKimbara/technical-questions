// 1
const remainder = function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(+arr[i] % 2);
  }
  console.log(result.toString());
};
remainder([1, 2, 3, 4]);

// 2
const fruitsList = function (fruits) {
  const ul = document.querySelector("ul");
  const fragment = new DocumentFrangment();
  for (const fruit of fruits) {
    const li = document.createElement("li");
    li.textContent = fruit;
    fragment.append(li);
  }
  return ul.append(fragment);
};
fruitsList(["banana", "apple", "orange"]);

// 3
const str = "Fleet electrification, simplified 7Gen fleet";

const findMatch = function (str, target) {
  const split = str.split(" ");
  const result = split.map((s) => {
    if (s.toUpperCase() === target) {
      return (s = `<strong>${[s]}</strong>`);
    }
    return s;
  });

  console.log("result", result.join());
};

findMatch(str, "FLEET");

// 4
(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
})();

/**
 * print order: 1, 3, 2
 * reason: IIFE will be executed immediately,
 * so first, 1 will be logged since the time to invoke is not set.
 * The second 3 will be logged since it will be invoked after 0 seconds.
 * Finally, 2 will be logged after one second.
 */

// 5
// return value: myFunction is not a function
// it will be an error because myFunction() is called before assigning the function to the variable.

// 6
// return value: "it's working"

// 7
// block element: <p>, <div> are considered as block elements. these will start on a new line, and add space automatically, and full width is available.
// inline element: <a>, <span> are considered as inline elements. these will not start on a new line and only the necessary width will be applied.

// 8
/**
 * pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s)
 * :hover is used to manipulate the style when mouse is hovered.
 * :disabled is used to manipulate the style when the element is disabled.
 * :focus is used to manipulate the style when the element is focused.
 */

// 9
/**
 * Styles defined at various levels are applied to the document as those defined upstream are carried downstream.
 * Styles are inherited step by step and applied to the document. That is called cascading in CSS.
 * For example, If I set font-size: 16px to the body, all text will have a 16px font size at this moment,
 * and if I set background-color: blue to the div tag, all div tags will have both 16px font size and blue background at this moment.
 */
