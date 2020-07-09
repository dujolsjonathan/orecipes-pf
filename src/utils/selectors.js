/* eslint-disable import/prefer-default-export */

// librairie qui permet d'obtenir un slug à partir par exemple du nom d'un élément
import slugify from 'slugify';

// récupérer le slug qui correspond à un titre de recette => on regroupe les trois
// endroits où on en a besoin, pour faciliter les évolutions futures du code
export const slugifyTitle = (title) => {
  const slug = slugify(title, {
    lower: true,
    // on voudrait enlever le caractère '+' (et on en profite pour enlever les autres)
    remove: /[*+~.()'"!:@]/g,
  });
  return slug;
};


// fonction qui retourne la recette correspondant à un slug
export const getRecipeBySlug = (slug, recipes) => {
  const recipeFound = recipes.find((recipe) => {
    const slugForRecipe = slugifyTitle(recipe.title);
    return slug === slugForRecipe;
  });

  return recipeFound;
};
