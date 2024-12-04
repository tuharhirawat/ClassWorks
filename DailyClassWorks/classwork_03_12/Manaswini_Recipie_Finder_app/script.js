const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');


searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.classList.remove('showRecipe');
});


function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    if (!searchInputTxt) return;

    
    fetch('recipes.json')
        .then(response => response.json())
        .then(data => {
            let meals = data.recipes;
            let filteredMeals = meals.filter(meal => {
                
                let isMealMatch = meal.title.toLowerCase().includes(searchInputTxt.toLowerCase());

                let isIngredientMatch = meal.ingredients.some(ingredient => {
                    return ingredient.toLowerCase().includes(searchInputTxt.toLowerCase());
                });

                return isMealMatch || isIngredientMatch;
            });

            displayMeals(filteredMeals);
        })
        .catch(error => {
            console.error("Error fetching meals:", error);
            mealList.innerHTML = "Sorry, we couldn't fetch meals.";
        });
}


function displayMeals(meals) {
    let html = "";
    if (meals.length) {
        meals.forEach(meal => {
            html += `
                <div class="meal-item" data-id="${meal.id}">
                    <div class="meal-img">
                        <img src="${meal.image}" alt="${meal.title}">
                    </div>
                    <div class="meal-name">
                        <h3>${meal.title}</h3>
                        <p>${meal.category}</p>
                        <a href="#" class="recipe-btn">Get Recipe</a>
                    </div>
                </div>
            `;
        });
        mealList.classList.remove('notFound');
    } else {
        html = "Sorry, we didn't find any meal!";
        mealList.classList.add('notFound');
    }

    mealList.innerHTML = html;
}


function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {
        let mealItem = e.target.parentElement.parentElement;
        let mealId = mealItem.dataset.id;

        
        fetch('recipes.json')
            .then(response => response.json())
            .then(data => {
                let meal = data.recipes.find(meal => meal.id === mealId);
                mealRecipeModal(meal);
            })
            .catch(error => {
                console.error("Error fetching meal details:", error);
            });
    }
}


function mealRecipeModal(meal) {
    let ingredients = "";
    meal.ingredients.forEach(ingredient => {
        ingredients += `<li>${ingredient}</li>`;
    });

    let html = `
        <h2 class="recipe-title">${meal.title}</h2>
        <p class="recipe-category">${meal.category}</p>
        <div class="recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.instructions}</p>
        </div>
        <div class="recipe-ingredients">
            <h3>Ingredients:</h3>
            <ul>${ingredients}</ul>
        </div>
        <div class="recipe-meal-img">
            <img src="${meal.image}" alt="meal image">
        </div>
    `;

    mealDetailsContent.innerHTML = html;
    mealDetailsContent.classList.add('showRecipe');
}
