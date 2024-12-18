// loops.js
myInfo = {
    name: "Noah Mkono",
    photo: "images/nobility.jpg",
    favoriteFoods: ["Mopane Worms", "Beef", "Cassava","Green Leaves", "Fish"],
    hobbies: ["Reading", "Movies", "Music"],
    placesLived: [
      {
        place: "Cape Town, South Africa",
        length: "9 years",
      },
      {
        place: "Blantyre, Malawi",
        length: "5 years",
      },
      {
        place: "Harare, Zimbabwe",
        length: "17 year",
      },
    ],
  };
  // Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
  let favoriteFood1 = document.createElement("li");
  favoriteFood1.textContent = myInfo.favoriteFoods[0];
  
  let favoriteFood2 = document.createElement("li");
  favoriteFood2.textContent = myInfo.favoriteFoods[1];
  
  let favoriteFood3 = document.createElement("li");
  favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
  let favoriteFood4 = document.createElement("li");
  favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  document.querySelector("#favorite-foods").appendChild(favoriteFood1);
  document.querySelector("#favorite-foods").appendChild(favoriteFood2);
  document.querySelector("#favorite-foods").appendChild(favoriteFood3);
  document.querySelector("#favorite-foods").appendChild(favoriteFood4);

 /* ... // with .forEach
const foodsElement = document.querySelector('#favorite-foods');
function createandAppendFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  foodsElement.appendChild(favoriteFood);
}
myInfo.favoriteFoods.forEach(createAndAppendFoodItem);

// with .map
const foodsElement = document.querySelector('#favorite-foods');
function mapFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  return favoriteFood;
}
// this function could also be written this way using a template literal:
function mapFoodItemSmall(food) {
  return `<li>${food}</li>`;
}
const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
// we need to flatten the array of strings into one big string. .join does this.
foodsElement.innerHTML = foodListElements.join(''); 

// The map example could be simplified as below:
const foodsElement = document.querySelector("#favorite-foods");
const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// we need to flatten the array of strings into one big string. .join does this.
foodsElement.innerHTML = foodListElements.join(""); ...*/

// OR we could in fact simplify this down to one line!
document.querySelector("#favorite-foods").innerHTML = myInfo.favoriteFoods
  .map((food) => `<li>${food}</li>`)
  .join("");

/* What if we needed to output the contents of multiple different Arrays? We can make what we did above more re-usable?

Create a function that will take a food string and return that string embedded in some html. (<li>food</li>)
Create a function that will take a place string and return that string embedded in some html. The place is a bit more complex. We have the location and the length. You can use the following for the template: <dt>${place.place}</dt><dd>${place.length}</dd>)
Create a function that will take a list, and a callback function to produce an HTML template. The function should transform our list by looping over it calling the template function once for each item in the list. The function should return all of the HTML strings flattened into one long string.
Call the function above once for the placesLived list and again for the favoriteFoods list. Set the innerHTML of the appropriate HTML element to the results of the function call. */

/*....
  // reusable!
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
  const foodsElement = document.querySelector("#favorite-foods");
  const placesElement = document.querySelector("#places-lived");
  // requires a list, and a callback that will produce an html string for each item in the list
  // returns a string of html
  function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
  }
  // requires an food string
  // returns that string embedded in HTML markup
  function foodsTemplate(food) {
    return `<li>${food}</li>`;
  }
  
  // requires an place string
  // returns that string embedded in HTML markup
  function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
  }
  
  foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
  );
  placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
  );
...*/