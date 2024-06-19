function findRecipes(recipes: string[], ingredients: string[][], supplies: string[]) {
  let cookableRecipes: string[] = [];

  let graph = {};

  //for constant time lookups
  let recipeSet = new Set(recipes);

  let suppliesSet = new Set(supplies);

  let inDegrees = {};

  recipes.forEach((recipe, index) => {
    // I know this here
    // says how many
    inDegrees[recipe] = ingredients[index].length;

    graph[recipe] = new Set();
  });

  //initialize graph for leaves/atomic nodes
  ingredients.forEach((recipeIngredients) => {
    recipeIngredients.forEach((recipeOrIngredient) => {
      // depends on whether it's a recipe or a fundamental ingredient
      inDegrees[recipeOrIngredient] =
        inDegrees[recipeOrIngredient] || 0;
      graph[recipeOrIngredient] = new Set();
    });
  });

  // populate graphs
  ingredients.forEach((recipeIngredients, index) => {
    recipeIngredients.forEach((recipeOrIngredient) => {
      graph[recipeOrIngredient].add(recipes[index]);
    });
  });

  let sources: string[] = [];

  Object.keys(inDegrees).forEach((node) => {
    if (inDegrees[node] == 0 && suppliesSet.has(node)) {
      sources.push(node);
    }
  });

  while (sources.length != 0) {
    let vertex = sources.shift() as string;

    // if (suppliesSet.has(vertex)) {
      graph[vertex].forEach((child) => {
        inDegrees[child] -= 1;

        if (inDegrees[child] == 0) {
          sources.push(child);
        }
      });

      if (recipeSet.has(vertex)) {
        if (inDegrees[vertex] === 0) {
          cookableRecipes.push(vertex);
        }
      }
    // }
  }
  // Replace this placeholder return statement with your code
  return cookableRecipes;
}

console.log(
  findRecipes(
    ["bread", "sandwich", "burger"],
    [
      ["yeast", "flour"],
      ["bread", "meat"],
      ["sandwich", "meat", "bread"],
    ],
    ["yeast", "flour", "meat"]
  )
);
