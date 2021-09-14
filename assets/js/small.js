







function switchToNext(btn, sideName, noneCard, flexCard) {
  document.querySelector(`#${btn}`).addEventListener("click", function () {
    document.querySelector(`#${sideName}`).innerHTML = "Approved"
    document.querySelector(`#${sideName}`).classList.remove("badge-warning")
    document.querySelector(`#${sideName}`).classList.add("badge-success")
    document.querySelector(`#${noneCard}`).style.display = "none"
    document.querySelector(`#${flexCard}`).classList.remove("d-none")
    document.querySelector(`#${flexCard}`).style.display = "flex"
  })
}

document.querySelector(`#firstStage`).addEventListener("click", function () {
  // document.querySelector(`#faq-q1`).innerHTML = "Approved"
  document.querySelector(`#faq-q1`).classList.remove("show")
  document.querySelector(`#faq-q2`).classList.add("show")

})


switchToNext("firstStage", "validate", "firstCard", "secondCard")
switchToNext("personalBtn", "personal", "secondCard", "thirdCard")
switchToNext("employerBtn", "employer", "thirdCard", "fourthCard")
switchToNext("nokBtn", "nok", "fourthCard", "fifthCard")
switchToNext("bioBtn", "bio", "fifthCard", "successCard")

document.querySelector(`#bioBtn`).addEventListener("click", function () {
  // document.querySelector(`#faq-q1`).innerHTML = "Approved"
  document.querySelector(`#faq-q2`).classList.remove("show")
  document.querySelector(`#faq-q3`).classList.add("show")

})