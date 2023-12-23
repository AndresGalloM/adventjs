function organizeChristmasDinner(dishes) {
  const ingredients = {}

  for (const [dish, ...dishIngredients] of dishes) {
    for (const ingredient of dishIngredients) {
      ingredients[ingredient] 
        ? ingredients[ingredient].push(dish) 
        : ingredients[ingredient] = [dish]
    }
  }
  
  return Object.entries(ingredients)
                .filter(([,ingredients]) => ingredients.length > 1)
                .map(([dish, ingredients]) => [dish, ...ingredients.sort()])
                .sort()
}