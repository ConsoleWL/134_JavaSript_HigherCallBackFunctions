
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

// function filterExample(){
//     //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
//     let results;
//     results = dishes.filter(function(el){
//         console.log("el inside filterExample's filter: ", el)
//         if(el.cuisine === "Mexican"){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }

// let mexicanFood = filterExample();
// console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

// function problemOne(){

//     let results;
//     results = dishes.filter(function(f){
//         if(f.cuisine === "Vegetarian"){
//             return true;
//         } else{
//             return false;
//         }
//     })
//     return results;
// }

// let vegetatianFood = problemOne();
// console.log("Vegiterian dishes", vegetatianFood);

//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter

// function userInput(){
//     return prompt("Enter your favourite kitchen");
// }

// let userResult = userInput();


// function matchesCuisine(){
//     let result;
//     result = dishes.filter(function(f){
//         if(f.cuisine === userResult){
//             return true;
//         } else {
//             return false;
//         }})
//     return result;
// }

// let matchesCusineResults = matchesCuisine();
// console.log("Matcheing cuisine", matchesCusineResults);

//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter


// function filterItalian(){
//     let results;

//     results = dishes.filter(function(f){
//         if(f.cuisine === "Italian" && f.servings > 5){
//             return true;
//         } else{
//             return false;
//         }})

//     return results;
// }


// let filterItalianResult = filterItalian();
// console.log("Italian food with servings more thatn 5",filterItalianResult);


//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

// function filterIdMatchedTheirServingcount(){
//     let results;
    
//     results = dishes.filter(function(f){
//         if(f.id === f.servings){
//             return true;
//         } else{
//             return false;
//         }})

//     return results;
// }

// let filteredIdandServingsCount = filterIdMatchedTheirServingcount();
// console.log("Food with their Id matches their surving cound", filteredIdandServingsCount);

//5. Create a function that will return only dishes whose serving count is even.
//Filter

// function servingCountIsEven(){
//     let results;

//     results = dishes.filter(function(f){
//         if(f.servings % 2 == 0){
//             return true;
//         } else{
//             return false;
//         }})

//         return results;
// }

// let servingsWithCountIsEven = servingCountIsEven();
// console.log("Dishes whose serving count is even", servingsWithCountIsEven);


//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter


// function dishesWithChickPea(){
//     let result;

//     result = dishes.filter(function(f){
//         if(f.ingredients.includes("chickpea")){
//             return true;
//         } else{
//             return false;
//         }})

//         return result;
// }

// let chickPeaDishes = dishesWithChickPea();
// console.log("Dishes with chickpea", chickPeaDishes);

//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

// function userInput(){
//     return prompt("Enter your favorite ingredient");
// }

// let userInputResult =  userInput();

// function  dishesWithSpecificIngredients(){
//     let result;

//     result = dishes.filter(function(f){
//         if(f.ingredients.includes(userInputResult)){
//             return true;
//         } else{
//             return false;
//         }})

//         return result;
// }

// let result = dishesWithSpecificIngredients();
// console.log("Dishes with specific Ingredients",result);


//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

// function cuisineTypes(arrayOfDishes){
//     let results = arrayOfDishes.map(function(f){
//         return f.cuisine;
//     })
//     return results;
// }

// let results = cuisineTypes(dishes);
// console.log(results);

//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 

// function numberNine(arrayOfDishes){
//     let results = arrayOfDishes.map(function(f){
//         return f.cuisine + " " + f.name;
//     })
//     return results;
// }

// let numberNineResults = numberNine(dishes);
// console.log(numberNineResults);


//10. Create a function that will use advanced array methods on the 'dishes' array and return the 
//result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]


// function numberTen(array){
//     let results = array.map(function(f){
//         return f.cuisine + " " + f.name;
//     })
//     return results;
// }

// let resultsNumberTen = numberTen(dishes);
// console.log(resultsNumberTen);



//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

// function bonusEght(arrayOfDishes){
//     let results = arrayOfDishes.map(function(f){
//         return f.cuisine;
//     })
//     return results;
// }

// let resultsBonusEght = bonusEght(dishes);
//     // woulve nice to know how it's written withour lymda expression;
// function removeDuplicates(arr){
//     return arr.filter((item, index) =>
//     arr.indexOf(item) === index);
// }

// console.log(removeDuplicates(resultsBonusEght));


//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

    // function numberEleven(arrayOfObjects){
    //     let results = arrayOfObjects.filter(function(f){
    //         if(f.ingredients.includes("tomato") || f.ingredients.includes("cheese")){
    //             return true;
    //         } else{
    //             return false;
    //         }})

    //         return results;
    // }

    // let resultsnumberEleven = numberEleven(dishes);
    // console.log(resultsnumberEleven);

//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

let dishes2 = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    }]

//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.
