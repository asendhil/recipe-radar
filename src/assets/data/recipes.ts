export interface Recipe {
  name: string;
  subtitle: string;
  img: string;
  description: string;
  ingredients: string[];
  nutrition: string[];
  directions: string[];
  label: string;
  expanded: boolean;
}

export const recipes: Recipe[] = [
    {
      name: 'Spaghetti Bolognese',
      subtitle: 'Time taken: 30min',
      img: 'https://www.recipetineats.com/wp-content/uploads/2018/07/Spaghetti-Bolognese.jpg',
      description: 'A classic Italian pasta dish with a rich tomato sauce.',
      ingredients: ['1 1/2 tbsp olive oil', '2 garlic cloves , minced','1 onion , finely chopped',
      '1 lb / 500g beef mince', '1/2 cup (125 ml) dry red wine',
      '2 beef bouillon cubes',
      '800g / 28 oz can crushed tomato', '2 tbsp tomato paste', '2 tsp white sugar',
      '2 tsp Worcestershire sauce', '2 dried bay leaves', '2 sprigs fresh thyme', 'Salt and pepper'],
      nutrition: ['Serving: 396g','Calories: 510cal','Carbohydrates: 53.2g','Protein: 40.9g','Fat: 12.6g','Fiber: 2.7g','Sugar: 8.4g'],
      directions:['Heat oil in a large pot or deep skillet over medium high heat. Add onion and garlic, cook for 3 minutes or until light golden and softened.',
      'Turn heat up to high and add beef. Cook, breaking it up as your go, until browned.',
      'Add red wine. Bring to simmer and cook for 1 minute, scraping the bottom of the pot, until the alcohol smell is gone.',
      'Add remaining ingredients except salt and pepper. Stir, bring to a simmer then turn down to medium so it bubbles gently. Cook for 20 – 30 minutes (no lid), adding water if the sauce gets too thick for your taste. Stir occasionally.',
      'Slow simmer option: really takes this to another level, if you have the time! Add 3/4 cup of water, cover with lid and simmer on very low for 2 – 2.5 hours, stirring every 30 minutes or so. (Note 5) Uncover, simmer 20 minutes to thicken sauce. (Note 6 for slow cooker)',
      'Adjust salt and pepper to taste right at the end. Serve over spaghetti – though if you have the time, I recommend tossing the sauce and pasta per steps below.'],
      label: "peanut, soy, shellfish free",
      expanded: false
    },
    {
      name: 'Grilled Chicken',
      subtitle: 'Time taken: 25min',
      img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/06/15/0/FNK_BEST_GRILLED_CHICKEN_BREASTS_H_f_s4x3.jpg.rend.hgtvcom.826.620.suffix/1655312132018.jpeg',
      description: 'Juicy grilled chicken with herbs and spices.',
      ingredients: ['1¾ lbs boneless, skinless chicken breasts','6 tablespoons extra virgin olive oil','4 large garlic cloves, minced',
      '1 teaspoon dried thyme','½ teaspoon dried oregano', '1¼ teaspoon salt', '½ teaspoon freshly ground black pepper','1½ teaspoons lemon zest, from one lemon'],
      nutrition: ['Serving size: 1 chicken breast', 'Calories: 413', 'Fat: 25 g', 'Carbohydrates: 2 g', 'Sugar: 0 g', 'Fiber: 0 g', 'Protein: 42 g'],
      directions:['One at a time, place the chicken breasts in a 1-gallon zip-lock bag; using a meat mallet, pound to an even ½-inch thickness.',
      'Mix all of the ingredients except for the chicken together in a 1-gallon zip-lock bag (go ahead and use the same one you used for pounding if it is still in good shape). Add the chicken breasts to the bag and massage the marinade into the meat until evenly coated. Seal the bag and place in a bowl in the refrigerator (the bowl protects against leakage); let the chicken marinate for at least 4 hours or overnight.',
      'Preheat the grill to high heat and oil the grates. Place the chicken breasts on the grill and cook, covered, for 2 to 3 minutes per side. Do not overcook. Transfer the chicken to a platter and serve.',
      'Note: The nutritional information includes all of the ingredients for the marinade, so one serving is likely significantly lower in calories and fat than the numbers below.']
      ,
      label: "peanut, soy, shellfish free",
      expanded: false
    }
    ,
    {
      name: 'Vegetable Stir Fry',
      subtitle: 'Time taken: 20min',
      img: 'https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg',
      description: 'A healthy mix of fresh vegetables.',
      ingredients: ['1 tablespoon olive oil', '1 red bell pepper, sliced','1 yellow bell pepper, sliced','1 cup sugar snap peas', '1 cup carrots, sliced',
      '1 cup mushrooms, sliced','2 cups broccoli','1 cup baby corn','1/2 cup water chestnuts','¼ cup soy sauce','3 garlic cloves, minced',
      '3 tablespoons brown sugar','1 teaspoon sesame oil','1/2 cup chicken broth','1 tablespoon cornstarch','chopped green onions and sesame seeds for garnish optional'],
      nutrition: ['Calories: 152kcal','Carbohydrates: 27g','Protein: 5g','Fat: 4g','Fiber: 4g','Sugar: 12g'],
      directions:['Add 1 tablespoon olive oil over medium-high heat in a wok or large skillet. Add bell pepper, peas, carrots, mushrooms, broccoli, baby corn, and water chestnuts. Sauté 2-3 minutes until veggies are almost tender.',
      'In a small whisk together soy sauce, garlic, brown sugar, sesame oil, chicken broth, and cornstarch.',
      'Pour over veggies and cook until the sauce has thickened. Garnish with chopped green onions and sesame seeds if desired']
      ,
      label: "peanut, soy, shellfish free",
      expanded: false
    },
    {
      name: 'Denver Omelet Salad',
      subtitle: 'Time taken: 25min',
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Denver-Omelet-Salad_EXPS_THAM18_205824_D11_07_14b-5.jpg?fit=696,696',
      description: 'A scrumptious breakfast meal made with avocados, cherry tomatoes and fried eggs. A perfect blend of protein, fat and essential macronutrients to keep you going for the day!',
      ingredients: ['Fresh baby spinach (8 cups)', 'Chopped tomatoes (1 cup)', 'Olive oil (2 tbsp)', 'Chopped cooked ham (1.5 cup)', 'Small onion chopped (1)', 'Small green pepper chopped (1)',
      'Large eggs (4)', 'Salt and pepper to taste'],
      nutrition: ['229 calories', '14g fat (3g saturated fat)', '217mg cholesterol', '756mg sodium', '7g carbohydrate (3g sugars, 2g fiber)', '20g protein'],
      directions:['Arrange spinach and tomatoes on a platter; set aside. In a large skillet, heat 1 tablespoon olive oil over medium-high heat. Add ham, onion and green pepper; saute until ham is heated through and vegetables are tender, 5-7 minutes. Spoon over spinach and tomatoes.',
      'In the same skillet, heat remaining olive oil over medium heat. Break eggs, 1 at a time, into a small cup, then gently slide into the skillet. Immediately reduce heat to low; season with salt and pepper. To prepare sunny-side up eggs, cover pan and cook until whites are completely set and yolks thicken but are not hard. Top salad with fried eggs.']
      ,
      label: "peanut, soy, shellfish free",
      expanded: false
    },
    {
      name: 'Breakfast Quesadillas',
      subtitle: 'Time taken: 25min',
      img: 'https://www.maebells.com/wp-content/uploads/2022/07/Breakfast-Quesadilla-keto-low-carb-5.jpg',
      description: 'These Easy Breakfast Quesadillas are filled with fluffy scrambled eggs, green peppers, bacon and cheddar cheeses, all enveloped between two crispy tortilla shells. It’s an easy meal that’s perfect for busy mornings!',
      ingredients: ['Eggs (2)', 'Pinto/black beans (1/3 cup)', 'Butter (2 tsp)', 'Chopped green onion (1)', 'Finely chopped cilantro (1 tbsp)', 'Chopped jalepeno (1 tbsp)', 'Whole grain tortilla (1)', 'Grated sharp cheddar (1/3 cup)'],
      nutrition: ['Calories: 380', 'Sugar: 2 g', 'Sodium: 600 mg', 'Fat: 25 g', 'Saturated Fat: 11 g', 'Unsaturated Fat: 12 g', 'Trans Fat: 0 g', 'Carbohydrates: 18 g', 'Fiber: 11 g', 'Protein: 22 g', 'Cholesterol: 315 mg'],
      directions: ['To prepare the eggs: In a bowl, whisk the eggs with the hot sauce and salt until they are well blended. Add the beans and set aside.',
      'To cook the eggs: Melt the butter in a medium-sized skillet (either well-seasoned cast iron or nonstick) over medium heat until it’s bubbling. Pour in the egg mixture and cook, stirring often, until the eggs are just set, about 1 to 3 minutes. Transfer the mixture to a bowl to pause the cooking process (the eggs will finish cooking in the quesadilla). Stir in the green onion, cilantro, and jalapeño.',
      'To cook the quesadilla: In a separate, large skillet, warm the tortilla over medium heat, flipping occasionally. Once the pan and tortilla are warm, sprinkle one-half of the cheese over one-half of the tortilla. Top the cheese with scrambled eggs, then top the scrambled eggs with the remaining cheese.',
      'Press the empty tortilla halve over the toppings. Let the quesadilla cook until golden and crispy on the bottom (don’t stop cooking too soon!), about 1 to 2 minutes, reducing the heat if necessary to prevent burning the tortilla. Flip it and cook until the second side is golden and crispy.',
      'Immediately remove the skillet from the heat and transfer the quesadilla to a cutting board. Let it cool for a few minutes to give it time to set, then slice each quesadilla into 2 slices with a very sharp knife. Serve immediately, with your favorite salsa and/or hot sauce on the side.']
      ,
      label: "peanut, soy, shellfish free",
      expanded: false
    },
    {
      name: 'Sweet and Spicy Turkey Sandwich',
      subtitle: 'Time taken: 15min',
      img: 'https://www.allrecipes.com/thmb/F7xIaDLqqTTEbpquqxokBNFHuYY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Sweet-and-Spicy-Turkey-Sandwich-by-Skylar-Christensen-2000-b7ec4950517b4a48ae9328736b3f4c0b.jpg',
      description: 'Pepperjack cheese and strawberry preserves mingle on this turkey sandwich for a sweet and savory lunch. This sandwich has a good combination of sweet and spicy flavor.',
      ingredients: ['Hearty country break (2 slices)', 'Roasted turkey breast (4 slices)', 'Pepperjack cheese (1 slice)', 'Butter (2 tsp)', 'Strawberry preserves (4 tsp)'],
      nutrition: ['434 calories','26g protein','16g fat','47g carbohydrate'],
      directions: ['Combine crumbled chorizo and chipotle peppers in adobo sauce in a bowl.',
      'Heat a skillet over medium-high heat; add chorizo mixture and cook until crisp, 5 to 7 minutes. Transfer to a plate, reserving grease in the skillet.',
      'Heat tortillas in reserved grease in the skillet over medium heat until warmed, 1 to 2 minutes per side. Stack 2 tortillas for each taco, then fill with chorizo, onion, and cilantro.']
      ,
      label: "peanut, soy, shellfish free",
      expanded: false
    },
    {
      name: 'Easy Chorizo Street Tacos',
      subtitle: 'Time taken: 20min',
      img: 'https://kiolbassa.com/wp-content/uploads/2021/03/StreetTacos.jpg',
      description: 'Get street-style tacos without ever leaving your house. Mexican chorizo brings the heat here. These chorizo tacos use just 5 ingredients and taste amazing.',
      ingredients: ['Chorizo sausage link (1)', 'Chipotle peppers in adobo sauce (2 tbsp)', 'Corn tortillas (2)', 'Chopped onion (2 tbsp) or to tase', 'Chopped fresh cilantro (optional) (2 tbsp)'],
      nutrition: ['262 calories','26g protein','16g fat', '47g carbohydrate'],
      directions: [ 'Combine crumbled chorizo and chipotle peppers in adobo sauce in a bowl.',
      'Heat a skillet over medium-high heat; add chorizo mixture and cook until crisp, 5 to 7 minutes. Transfer to a plate, reserving grease in the skillet.',
      'Heat tortillas in reserved grease in the skillet over medium heat until warmed, 1 to 2 minutes per side. Stack 2 tortillas for each taco, then fill with chorizo, onion, and cilantro.']
      ,
      label: "peanut, soy, shellfish free",
      expanded: false
    },
    {
      name: 'Lemon Garlic Butter Salmon',
      subtitle: 'Time taken: 30min',
      img: 'https://www.cookingclassy.com/wp-content/uploads/2017/02/skillet-seared-salmon-2.jpg',
      description: 'Juicy salmon at home in 30 minutes that’s easy and tastes better than from a restaurant! The butter is infused with lemon and garlic and adds so much flavor!',
      ingredients: ['Salmon fillet (1.5 lbs)', 'Lemon (1)', 'Unsalted butter (1/2 cup)', 'Honey (2 tbsp)', 'Garlic, pressed or minced (5 cloves)', 'Kosher salt (1 tsp)', 'Ground black pepper (1/2 tsp)', 'Parsley (2 tsp)'],
      nutrition: ['675 calories', '45g protein', '48g fat', '17g carbohydrate'],
      directions: [ 'Preheat oven to 375F. Place salmon on a sheet of foil (with the longer side parallel with the longer side of the sheet pan) with the skin-side down. Raise the edges of the foil up about 2 inches (or enough so that when you pour the buttery mixture over the top it will be contained in the foil).',
      'Nestle lemon slices underneath the salmon, spaced evenly around the fillet; set aside.',
      'To a microwave-safe glass measuring cup or bowl, add the butter and heat on high power to melt, about 1 minute.',
      'Stir in the lemon juice, honey, and garlic. Pour or spoon about three-quarters of the mixture over the salmon; reserve remainder.',
      'Evenly season salmon with salt and pepper.',
      'Seal up the foil. Likely you will need to add another sheet of foil on top in order to seal it. Crimp or pinch the top and bottom pieces of foil together; get it as air-tight as possible but it does not have to be perfect. If you have time, set aside to marinate for about 10 to 15 minutes (enhanced flavor).',
      'Place foil pack on a baking sheet and bake for about 17 minutes.',
      'Remove baking sheet from the oven and remove the top piece of foil or open up the packet so salmon is exposed but keep the edges raised to contain the buttery mixture.',
      'Spoon the reserved buttery mixture over the salmon, if desired. Use your judgment and if there’s already lots of juice you don’t need to add it because you don’t want it to start leaking. If you have extra buttery mixture, it’s great served over the finished dish.',
      'Optionally garnish salmon with parsley and serve immediately']
      ,
      label: "peanut, soy, shellfish free",
      expanded: false
    },
    {
      name: 'Avocado Chicken Bowl',
      subtitle: 'Time taken: 20min',
      img: 'https://marleyspoon.com/media/recipes/61516/main_photos/large/chicken_burrito_bowls-5e45b2c87fbe8c402d0c3d54c68d8748.jpeg',
      description: 'Healthy avocado chicken bowls are easy to meal prep for the week and come with a simple low carb option!',
      ingredients: ['Boneless, skinless chicken thights (1 lb)', 'Cilantro (1 tsp)', 'Cumin (1 tsp)', 'Crushed rep pepper (1 tsp)', 'Black pepper (t tsp)', 'Black beans (2/3 cup)', 'Olive oil (2 tbsp)', 'Arugula (1 cup)', 'Spanish olives (1/2 cup)', 'Broccoli florets (2 cups)', 'Lettuce (3 cups)'],
      nutrition: ['617 calories', '45g protein', '39g fat', '30g carbohydrate'],
      directions: [ 'Marinate the chicken with the coriander, cumin, crushed red pepper and black pepper oil for 30 minutes. Or if you don not have time - just rub the chicken with the spices and cook it.',
      'Cook in a non-stick pan at medium heat with the 1 Tbsp olive oil until done.',
      'Stir-fry the broccoli in another pan with some olive oil.',
      'Rinse and drain the black beans, the olives (watch out for salt content!), chop lettuce, arugula and cilantro.',
      'Arrange the bowls with some greens at the bottom, olives, beans, chicken, broccoli and sauces on top.', 
      'Serve!']
      ,
      label: "peanut, soy, shellfish free",
      expanded: false
    },
    {
      name: 'Rise and Shine Parfait',
      subtitle: 'Time taken: 15min',
      img: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Rise-and-Shine-Parfait_EXPS_BBBZ16_178121_C07_08_4b.jpg?fit=1024,1024',
      description: 'Start your day with a smile. This fruit, yogurt and granola parfait is so easy to make. If you like, use whatever favorite fresh fruits are in season and are looking best at the supermarket',
      ingredients: ['Vanilla yogurt of choice (4 cups)', 'Medium sized peaches (2)', 'Freh blackberries (2 cups)', 'Granola (1/2 cup)'],
      nutrition: ['259 calories', '3g fat (0 saturated fat)', '7mg cholesterol', '6mg sodium', '48g carbohydrate (27g sugars, 7g fiber)', '13g protein'],
      directions: ['Layer half the yogurt, peaches, blackberries and granola into 4 parfait glasses.', 
      'Repeat layers.']
      ,
      label: "peanut, soy, shellfish free",
      expanded: false
    },
    {
      name: 'No-bake Cereal Bars',
      subtitle: 'Time taken: 15min',
      img: 'https://www.allrecipes.com/thmb/y9SYye57fTUxvnFYHYEONdFZntc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/5004026-2fb61419287e46febf36ddace5748b1a.jpg',
      description: 'A delicious, nutritious, crunchy, munchy bar to take on the go during those busy mornings! These bars gives you all your breakfast nutrients in a few bites.',
      ingredients: ['Cereal (1 cup)', 'Maple syrup (4 tbsp)', 'Almond butter (4 tbsp)'],
      nutrition: ['259 calories', '3g fat (0 saturated fat)', '7mg cholesterol', '6mg sodium', '48g carbohydrate (27g sugars, 7g fiber)', '13g protein'],
      directions: [ 'Prep the ingredients: Add the cereal into a large mixing bowl. Next, add the maple syrup and almond butter into a microwave-safe bowl and microwave it for 20 seconds, or until the peanut butter has melted.',
      'Make the bars: Add the syrup and almond butter mixture to the mixing bowl with cereal and mix until combined.',
      'Set, slice, and serve: Transfer the cereal bar mixture to a lined pan and refrigerate it for 30 minutes or until it has firmed up. Once firm, slice them into bars.']
      ,
      label: "peanut, soy, shellfish free",
      expanded: false
    },
  ];

export const pantryItems: string[] = [];