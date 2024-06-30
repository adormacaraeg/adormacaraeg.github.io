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






/*const btnLike1 = document.getElementById("btnLike1")
const count1 = document.getElementById("count1")

function countLike1() {
  let likeCounts = parseInt(count1.value) + 1
  count1.textContent = likeCounts.toString()
}
btnLike1.addEventListener("click", countLike1)

const btnLike2 = document.getElementById("btnLike2")
const count2 = document.getElementById("count2")

function countLike2() {
  let likeCounts = parseInt(count2.value) + 1
  count2.textContent = likeCounts.toString()
}
btnLike2.addEventListener("click", countLike2)

const btnDisLike3 = document.getElementById("btnDisLike3")
const count3 = document.getElementById("count3")

function countDisLike3() {
  let likeCounts = parseInt(count3.value) + 1
  count3.textContent = likeCounts.toString()
}
btnDisLike3.addEventListener("click", countDisLike3)

const btnDisLike4 = document.getElementById("btnDisLike4")
const count4 = document.getElementById("count4")

function countDisLike4() {
  let likeCounts = parseInt(count4.value) + 1
  count4.textContent = likeCounts.toString()
}
btnDisLike4.addEventListener("click", countDisLike4)

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")

function submitcomment(){
 commentbox.textContent += comment.value.toString() + "\n" ;
  comment.value= " ";
}
submit.addEventListener("click",submitcomment)


