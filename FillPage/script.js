var selectedProducts = [];

function showSuggestions() {
    var input = document.getElementById("productName");
    var filter = input.value.toLowerCase();
    var suggestionList = document.getElementById("suggestionList");
    suggestionList.innerHTML = "";

    for (var i = 0; i < productList.length; i++) {
        var product = productList[i].name.toLowerCase();
        if (product.startsWith(filter)) {
            var suggestionItem = document.createElement("div");
            suggestionItem.textContent = productList[i].name;
            suggestionItem.classList.add("suggestion"); // Add a class for styling
            suggestionItem.addEventListener("click", function() {
                // Set the input field's value to the clicked suggestion
                input.value = this.textContent;
                // Clear the suggestion list
                suggestionList.innerHTML = "";
            });
            suggestionList.appendChild(suggestionItem);
        }
    }
}

        function addSelectedProduct() {
    var input = document.getElementById("productName");
    var selectedProductName = input.value.trim();

    if (selectedProductName.length > 0) {
        selectedProducts.push(selectedProductName);
        updateSelectedProductsList();
        input.value = ""; // Clear the input field
    }
}

function updateSelectedProductsList() {
    var selectedProductList = document.getElementById("selectedProductList");
    selectedProductList.innerHTML = "";

    for (var i = 0; i < selectedProducts.length; i++) {
        var product = selectedProducts[i];
        var listItem = document.createElement("li");
        listItem.classList.add("selected-product");
        listItem.textContent = product;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            // Remove the selected product from the array and update the list
            var index = selectedProducts.indexOf(product);
            if (index !== -1) {
                selectedProducts.splice(index, 1);
                updateSelectedProductsList();
            }
        });

        listItem.appendChild(deleteButton);
        selectedProductList.appendChild(listItem);
    }
}

// Update the hidden input field with the selectedProducts array
function updateHiddenInput() {
    var selectedProductsInput = document.getElementById("selectedProductsInput");
    selectedProductsInput.value = JSON.stringify(selectedProducts);
}

// Call updateHiddenInput() whenever the selectedProducts array changes
setInterval(updateHiddenInput, 100);
