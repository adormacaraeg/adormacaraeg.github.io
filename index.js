// Function to update the cart display
function updateCart() {
    let cartContent = "";
    let totalCost = 0;

    for (let i = 1; i <= 6; i++) {
        let qty = parseFloat(document.getElementById(`qty${i}`).value);
        let price = parseFloat(document.getElementById(`price${i}`).textContent);

        if (!isNaN(qty) && qty > 0) {
            let subtotal = qty * price;
            totalCost += subtotal;
            cartContent += `${qty} pc/s x ${price.toFixed(2)} ------ ${document.getElementById(`product${i}`).textContent} ------ Php ${subtotal.toFixed(2)}\n`;
        }
    }

    document.getElementById("carts").value = cartContent;
    document.getElementById("total").value = totalCost.toFixed(2);
}

// Function to calculate change
function calculateChange() {
    let totalCost = parseFloat(document.getElementById("total").value);
    let cashAmount = parseFloat(document.getElementById("cash").value);

    if (!isNaN(totalCost) && !isNaN(cashAmount)) {
        let change = cashAmount - totalCost;
        document.getElementById("change").value = change.toFixed(2);
    }
}

// Function to show purchase details and reset the page
function showPurchaseAndReset() {
    // Show purchase details (alert for demonstration)
    let cartContent = document.getElementById("carts").value;
    alert(`Purchase Details:\n\n${cartContent}`);

    // Reset the form and refresh the page
    document.getElementById("orderForm").reset();
    updateCart(); // Update cart display after reset
    calculateChange(); // Recalculate change after reset

    // Refresh the page
    location.reload();
}

// Event listeners for quantity inputs
for (let i = 1; i <= 6; i++) {
    document.getElementById(`qty${i}`).addEventListener("keyup", updateCart);
}

// Event listener for cash input
document.getElementById("cash").addEventListener("keyup", calculateChange);

// Event listener for Order button
document.getElementById("orderButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission (if this is a form button)

    // Show purchase details and reset the page
    showPurchaseAndReset();
});

// Event listener for window load (to handle the page refresh)
window.addEventListener("load", function() {
    // Check if there's a query parameter indicating a purchase confirmation
    const urlParams = new URLSearchParams(window.location.search);
    const purchaseConfirmed = urlParams.get('purchaseConfirmed');

    // If purchase is confirmed, show the purchase details and reset the page
    if (purchaseConfirmed === 'true') {
        showPurchaseAndReset();
    }
});
