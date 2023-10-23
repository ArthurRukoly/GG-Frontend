// An array of recipe objects

const recipes = [
    {
        name: "Recipe 1",
        image: "https://www.themealdb.com/images/media/meals/wxywrq1468235067.jpg",
        category: "Category 1",
        rating: 4,
        instruction: "(Tut prjam mnogo teksta) Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus eius, sed vel esse unde? Animi qui nostrum natus, quidem debitis velit. Perferendis molestiae est corporis facilis veritatis ipsum placeat.",
        ingredients: [
            "Ingredient 1",
            "Ingredient 2",
        ],
    },
    {
        name: "Recipe 2",
        image: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg",
        category: "Category 2",
        rating: 4.5,
        instruction: "Instruction for recipe 2",
        ingredients: [
            "Ingredient 1",
            "Ingredient 2",
        ],
    },
    {
        name: "Recipe 3",
        image: "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
        category: "Category 3",
        rating: 2,
        instruction: "Instruction for recipe 3",
        ingredients: [
            "Ingredient 1",
            "Ingredient 2",
        ],
    },
    // Add more recipes as needed
];

// Initialize the recipe index
let currentRecipeIndex = 0;

// Function to update the recipe content based on the current index
function updateRecipe() {
    const currentRecipe = recipes[currentRecipeIndex];
    document.getElementById("recipeName").textContent = currentRecipe.name;
    document.getElementById("recipeImage").src = currentRecipe.image;
    document.getElementById("recipeCategory").textContent = currentRecipe.category;

    // Update the star rating using the displayStarRating function
    displayStarRating(currentRecipe.rating);

    document.getElementById("recipeInstruction").textContent = currentRecipe.instruction;

    const ingredientsList = document.getElementById("recipeIngredients");
    ingredientsList.innerHTML = "";
    currentRecipe.ingredients.forEach((ingredient) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${ingredient}</span>`;
        ingredientsList.appendChild(li);
    });

    document.getElementById("recipeId").value = currentRecipeIndex;
}
// Function to handle next recipe
document.getElementById("nextRecipe").addEventListener("click", function () {
    if (currentRecipeIndex < recipes.length - 1) {
        currentRecipeIndex++;
        updateRecipe();
    }
});

// Function to handle previous recipe
document.getElementById("prevRecipe").addEventListener("click", function () {
    if (currentRecipeIndex > 0) {
        currentRecipeIndex--;
        updateRecipe();
    }
});

function displayStarRating(rating) {
    // Round the rating value to the nearest integer
    const roundedRating = Math.round(rating);
    
    // Create an HTML string for full and empty stars
    let starsHtml = '';
    for (let i = 0; i < roundedRating; i++) {
        starsHtml += '<i class="fas fa-star"></i>'; // Full star
    }
    for (let i = roundedRating; i < 5; i++) {
        starsHtml += '<i class="far fa-star"></i>'; // Empty star
    }
    
    // Update the HTML element with the star rating
    const ratingContainer = document.getElementById('recipeRating');
    ratingContainer.innerHTML = starsHtml;
}


document.addEventListener("DOMContentLoaded", function () {
    const starRating = document.querySelector(".star-rating");
    const stars = starRating.querySelectorAll("i");

    stars.forEach((star) => {
        star.addEventListener("click", () => {
            const rating = parseInt(star.getAttribute("data-rating"));
            // Update the hidden input field with the selected rating
            document.getElementById("recipeId").value = rating;
            // Update star icons to reflect the selected rating
            stars.forEach((s, index) => {
                s.classList.remove("fas");
                s.classList.remove("far");
                if (index < rating) {
                    s.classList.add("fas");
                } else {
                    s.classList.add("far");
                }
            });
        });
    });
});

$(document).ready(function () {
    const instruction = $("#recipeInstruction");
    const toggleButton = $("#toggleInstructionButton");
    let instructionVisible = false;

    toggleButton.click(function () {
        if (instructionVisible) {
            instruction.slideUp();
            toggleButton.text("Show Instruction");
        } else {
            instruction.slideDown();
            toggleButton.text("Hide Instruction");
        }
        instructionVisible = !instructionVisible;
    });
});

function toggleButtonActivity(isDisabled) {
    if(isDisabled){
    var ratingButton = document.getElementById("ratingButton");
    ratingButton.textContent = "Login to Rate!";
    }
  }


  window.onload = function () {
    toggleButtonActivity(true); // To disable the button when the page loads
    // You can set the appropriate boolean value based on your logic
  };
// Initialize with the first recipe
updateRecipe();