  // Used
  videoDiv = document.querySelector(".video-modal"),
  snapButton = document.querySelector("#snap"),
  openBtn = document.querySelector("#open-video"),
  loader = document.querySelector(".loader-div"),
  submit = document.querySelector("#submit-form"),
  allPictures = document.querySelector("#all-pictures"),

  selectId = document.querySelector("#ids"),
  idNumber = document.querySelector("#id-number"),
  addressType = document.querySelector("#address-type"),
  address = document.querySelector("#address"),
  errorDiv = document.querySelector(".error-toaster"),


  status = document.getElementById("status"),
  output = document.getElementById("letter"),
  subTreasuries = document.querySelector("#subTreasuries"),
  pension = document.querySelector("#pension"),
  file = document.querySelector("#file-selector"),
  idPicture = document.querySelector("#id-picture"),
  errorMsg = document.querySelector("#error"),
  switchCamera = document.querySelector("#switch"),
  back = document.querySelector("#back-btn"),
  ageCheck = document.querySelector("age-check"),
  phoneNo = document.querySelector("#phone-no"),
  annual = document.querySelector("#annual");

var picture;

// Open Modal For Information
document.querySelector("#modal-opener").addEventListener("click", function () {
  document.querySelector(".modal-div").style.display = "block"
  document.querySelector(".bg-img-text").style.display = "none"
  setTimeout(() => {
    document.querySelector(".modal-div").style.opacity = "1"
  }, 50);

})



// Close Modal For Information
document.querySelector("#closeBtn").addEventListener("click", function () {
  document.querySelector(".modal-div").style.opacity = "0"
  setTimeout(() => {
    document.querySelector(".modal-div").style.display = "none"
    document.querySelector(".bg-img-text").style.display = "block"
  }, 1250);

})

document.querySelector("#backBtn").addEventListener("click", function () {
  window.location.reload()
})










function switchToNext(btn, sideName, noneCard, flexCard) {
  document.querySelector(`#${btn}`).addEventListener("click", function () {
    document.querySelector(`#${sideName}`).innerHTML = "Approved"
    document.querySelector(`#${sideName}`).classList.remove("badge-warning")
    document.querySelector(`#${sideName}`).classList.add("badge-success")
    document.querySelector(`#${noneCard}`).style.display = "none"
    document.querySelector(`#${flexCard}`).style.display = "flex"
  })
}



switchToNext("firstStage", "validate", "firstCard", "secondCard")
switchToNext("personalBtn", "personal", "secondCard", "thirdCard")
switchToNext("employerBtn", "employer", "thirdCard", "fourthCard")
switchToNext("nokBtn", "nok", "fourthCard", "fifthCard")
switchToNext("bioBtn", "bio", "fifthCard", "successCard")




/************************
  FORM SUBMISSION
*************************/

const openToaster = (msg) => {
  errorDiv.style.display = "block"
  errorDiv.innerHTML = `<p>${msg}</p>`
  setTimeout(() => {
    errorDiv.style.opacity = "1"
  }, 50);

  // Close Toaster
  setTimeout(() => {
    errorDiv.style.opacity = "0"
  }, 5000);
  setTimeout(() => {
    errorDiv.style.display = "none"
  }, 6500);
}


submit.addEventListener("click", function () {
  loader.style.display = "flex"
  if (!selectId.value || !idNumber.value || !address.value || !addressType.value) {
    loader.style.display = "none"
    openToaster("Some field(s) are empty")
  }
  else if (webcam._webcamList.length === 0) {
    loader.style.display = "none"
    openToaster("Picture is yet to be taken")
  }
  else {
    setTimeout(() => {
      loader.style.display = "none"
      document.querySelector(".collect-info").style.display = "none"
      document.querySelector(".display-info").style.display = "block"
    }, 2000);

    // Send to API
  }
})


