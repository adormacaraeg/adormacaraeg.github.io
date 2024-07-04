
function updateCart() {
    let cartContent = "";
    let totalCost = 0;

    
    let qty1 = parseFloat(document.getElementById("qty1").value);
    let price1 = parseFloat(document.getElementById("price1").textContent);
    if (!isNaN(qty1) && qty1 > 0) {
        let subtotal1 = qty1 * price1;
        totalCost += subtotal1;
        cartContent += `${qty1} pc/s x ${price1.toFixed(2)} ------ ${document.getElementById("product1").textContent} ------ Php ${subtotal1.toFixed(2)}\n`;
    }

    
    let qty2 = parseFloat(document.getElementById("qty2").value);
    let price2 = parseFloat(document.getElementById("price2").textContent);
    if (!isNaN(qty2) && qty2 > 0) {
        let subtotal2 = qty2 * price2;
        totalCost += subtotal2;
        cartContent += `${qty2} pc/s x ${price2.toFixed(2)} ------ ${document.getElementById("product2").textContent} ------ Php ${subtotal2.toFixed(2)}\n`;
    }
 
    
    let qty3 = parseFloat(document.getElementById("qty3").value);
    let price3 = parseFloat(document.getElementById("price3").textContent);
    if (!isNaN(qty3) && qty3 > 0) {
        let subtotal3 = qty3 * price3;
        totalCost += subtotal3;
        cartContent += `${qty3} pc/s x ${price3.toFixed(2)} ------ ${document.getElementById("product3").textContent} ------ Php ${subtotal3.toFixed(2)}\n`;
    }
 
    
    let qty4 = parseFloat(document.getElementById("qty4").value);
    let price4 = parseFloat(document.getElementById("price4").textContent);
    if (!isNaN(qty4) && qty4 > 0) {
        let subtotal4 = qty4 * price4;
        totalCost += subtotal4;
        cartContent += `${qty4} pc/s x ${price4.toFixed(2)} ------ ${document.getElementById("product4").textContent} ------ Php ${subtotal4.toFixed(2)}\n`;
    }
 
    
    let qty5 = parseFloat(document.getElementById("qty5").value);
    let price5 = parseFloat(document.getElementById("price5").textContent);
    if (!isNaN(qty5) && qty5 > 0) {
        let subtotal5 = qty5 * price5;
        totalCost += subtotal5;
        cartContent += `${qty5} pc/s x ${price5.toFixed(2)} ------ ${document.getElementById("product5").textContent} ------ Php ${subtotal5.toFixed(2)}\n`;
    }
 
    
    let qty6 = parseFloat(document.getElementById("qty6").value);
    let price6 = parseFloat(document.getElementById("price6").textContent);
    if (!isNaN(qty6) && qty6 > 0) {
        let subtotal6 = qty6 * price6;
        totalCost += subtotal6;
        cartContent += `${qty6} pc/s x ${price6.toFixed(2)} ------ ${document.getElementById("product6").textContent} ------ Php ${subtotal6.toFixed(2)}\n`;
    }

    
    document.getElementById("carts").value = cartContent;
    document.getElementById("total").value = totalCost.toFixed(2);

    
    calculateChange(); 
}

// Function to calculate change
function calculateChange() {
    let totalCost = parseFloat(document.getElementById("total").value);
    let cashAmount = parseFloat(document.getElementById("cash").value);

    if (!isNaN(totalCost) && !isNaN(cashAmount)) {
        let change = cashAmount - totalCost;
        document.getElementById("change").value = 'Php: ' + change.toFixed(2);
    }
}


function showPurchase() {
    let cartContent = document.getElementById("carts").value;

    if (confirm(`Thank for ordering in Bornok's Hardware Store\n\nPurchase Details:\n\n${cartContent}\n\nOrder Successful!`)) {
        window.location.reload(); // Reload the page on confirmation
    }
}


document.getElementById("qty1").addEventListener("keyup", updateCart);
document.getElementById("qty2").addEventListener("keyup", updateCart);
document.getElementById("qty3").addEventListener("keyup", updateCart);
document.getElementById("qty4").addEventListener("keyup", updateCart);
document.getElementById("qty5").addEventListener("keyup", updateCart);
document.getElementById("qty6").addEventListener("keyup", updateCart);

document.getElementById("cash").addEventListener("keyup", calculateChange);

document.getElementById("orderButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission (if this is a form button)

    // Show purchase details
    showPurchase();
});
