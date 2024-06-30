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

// Event listeners for quantity inputs
for (let i = 1; i <= 6; i++) {
    document.getElementById(`qty${i}`).addEventListener("keyup", updateCart);
}

// Event listener for cash input
document.getElementById("cash").addEventListener("keyup", calculateChange);







