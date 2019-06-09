///////////Попап "Свяжитесь с нами"///////////
	
var popupWriteUs = document.querySelector(".popup-contact-us");
if (popupWriteUs) {
    var openWriteUs = document.querySelector(".call-write-us");
    var closeWriteUs = popupWriteUs.querySelector(".popup-close");
    var nameWriteUs = document.querySelector("[name=name]");
    var emailWriteUs = document.querySelector("[name=email]");
    var letterWriteUs = document.querySelector("[name=letter]");
    var formWriteUs = popupWriteUs.querySelector("form");
    var isStorageSupport = true;
    var storage = "";
    try {
        storageName = localStorage.getItem("nameWriteUs");
        storageEmail = localStorage.getItem("emailWriteUs");
    } catch (err) {
        isStorageSupport = false;
    }
    openWriteUs.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupWriteUs.classList.add("popup-show");
            if (storageName && storageEmail) {
            nameWriteUs.value = storageName;
            emailWriteUs.value = storageEmail;
            letterWriteUs.focus();
            } else {
            nameWriteUs.focus();
            }
    });
    closeWriteUs.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupWriteUs.classList.remove("popup-show");
        popupWriteUs.classList.remove("popup-error");
    });
    formWriteUs.addEventListener("submit", function (evt) {
        if (!nameWriteUs.value || !emailWriteUs.value || !letterWriteUs.value) {
        evt.preventDefault();
        popupWriteUs.classList.remove("popup-error");
        popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
        popupWriteUs.classList.add("popup-error");
        } else {
        if (isStorageSupport) {
            localStorage.setItem("nameWriteUs", nameWriteUs.value);
            localStorage.setItem("emailWriteUs", emailWriteUs.value);
        }
        }
    });
    window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
            evt.preventDefault();
                if (popupWriteUs.classList.contains("popup-show")) {
                    popupWriteUs.classList.remove("popup-show");
                    popupWriteUs.classList.remove("popup-error");
                }
            }
    });
}




var popupMap = document.querySelector(".popup-map");
if (popupMap) {
  var openMap = document.querySelector(".call-map");
  var closeMap = popupMap.querySelector(".popup-close");

  openMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("popup-show");
  });

  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("popup-show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupMap.classList.contains("popup-show")) {
        popupMap.classList.remove("popup-show");
      }
    }
  });
}
