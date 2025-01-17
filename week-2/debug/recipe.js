// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`);

console.log("ingredients:");

// This loop goes through the ingredients array and logs each item on a new line.
for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}
