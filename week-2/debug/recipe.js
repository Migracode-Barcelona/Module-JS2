// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

// I would close the template string before and then log out the rest after one another in a for of loop 
//this way it iterates over each single one and prints it in a new line

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`)
console.log(` ingredients:`)
for (let ingredient of recipe.ingredients) {console.log(`  ${ingredient}`)
}





