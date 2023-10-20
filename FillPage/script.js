
function showSuggestions1() {
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
            suggestionItem.addEventListener("click", function () {
                // Set the input field's value to the clicked suggestion
                input.value = this.textContent;
                // Clear the suggestion list
                suggestionList.innerHTML = "";
            });
            suggestionList.appendChild(suggestionItem);
        }
    }
}


function showSuggestions2() {
    var input = document.getElementById("NotPrefProductName");
    var filter = input.value.toLowerCase();
    var suggestionList = document.getElementById("suggestionList");
    suggestionList.innerHTML = "";

    for (var i = 0; i < productList.length; i++) {
        var product = productList[i].name.toLowerCase();
        if (product.startsWith(filter)) {
            var suggestionItem = document.createElement("div");
            suggestionItem.textContent = productList[i].name;
            suggestionItem.classList.add("suggestion"); // Add a class for styling
            suggestionItem.addEventListener("click", function () {
                // Set the input field's value to the clicked suggestion
                input.value = this.textContent;
                // Clear the suggestion list
                suggestionList.innerHTML = "";
            });
            suggestionList.appendChild(suggestionItem);
        }
    }
}

var selectedProducts = [];
var selectedNotPrefProducts = [];

function addSelectedProduct(isPreferred) {
    var inputId = isPreferred ? "productName" : "NotPrefProductName";
    var productList = isPreferred ? selectedProducts : selectedNotPrefProducts;

    var input = document.getElementById(inputId);
    var selectedProductName = input.value.trim();

    if (selectedProductName.length > 0) {
        productList.push(selectedProductName);
        updateSelectedProductsList(isPreferred);
        input.value = ""; // Clear the input field
    }
}

function updateSelectedProductsList(isPreferred) {
    var productListId = isPreferred ? "selectedProductList" : "selectedNotPrefedProductList";
    var productList = isPreferred ? selectedProducts : selectedNotPrefProducts;

    var productListElement = document.getElementById(productListId);
    productListElement.innerHTML = "";

    for (var i = 0; i < productList.length; i++) {
        var product = productList[i];
        var listItem = document.createElement("li");
        listItem.classList.add("selected-product");
        listItem.textContent = product;

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function () {
            // Remove the selected product from the array and update the list
            var index = productList.indexOf(product);
            if (index !== -1) {
                productList.splice(index, 1);
                updateSelectedProductsList(isPreferred);
            }
        });

        listItem.appendChild(deleteButton);
        productListElement.appendChild(listItem);
    }
}


// Update the hidden input field with the selectedProducts array
function updateHiddenInput() {
    var selectedProductsInput = document.getElementById("selectedProductsInput");
    var selectedNotPrefProductsInput = document.getElementById("selectedNotPrefProductsInput");
    selectedProductsInput.value = JSON.stringify(selectedProducts);
    selectedNotPrefProductsInput.value = JSON.stringify(selectedNotPrefProducts);
}

// Call updateHiddenInput() whenever the selectedProducts array changes
setInterval(updateHiddenInput, 100);
