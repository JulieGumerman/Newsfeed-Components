/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

let pageHead = document.querySelector(".header");

pageHead.append(createMenu(menuItems));



function createMenu(array) {

  //create element
  let menuList = document.createElement("ul");
  
  let menu = document.createElement("div");

  //organize elements, contents of elements
  menu.appendChild(menuList);
  array.forEach(element => {
    let menuListItem = document.createElement("li");
    menuList.appendChild(menuListItem);
    menuListItem.textContent = element;
    console.log(element);
  });

  //add class names
  menu.classList.add("menu");

  //the menu button responds to being clicked
 const menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu--open");
    console.log("I work!!!")
  });


   //return

   return menu;
}
/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
*/
//  Step 3: Using a DOM selector, select the menu button currently on the DOM.




//Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself



/*
  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
