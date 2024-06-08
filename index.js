const btnLike1 = document.getElementById("btnLike1")
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

const Submit = document.getElementById("Submit")
const comment = document.getElementById("comment")
const commentbox = document.ElementById("commentbox")

function Submitcomment(){
 commentbox.textContent += comment.value.toString() +"\n"
  
}
Submit.addEventListener("click",Submitcomment)


