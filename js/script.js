var openWriteUs = document.querySelector(".call-write-us");
	var popupWriteUs = document.querySelector(".popup-contact-us");
	var closeWriteUs = document.querySelector(".popup-close");
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
	
	
	// var openMap = document.querySelector(.call-map);
	// openMapPopup.classList.add(popup-show);
	//
	// var openItemAdded = document.querySelectorAll(.call-item-added);
	
	
	//
	// ymaps.ready(function () {
	//     var myMap = new ymaps.Map('popup-map', {
	//             center: [59.939419, 30.316818],
	//             zoom: 16
	//         }, {
	//             searchControlProvider: 'yandex#search'
	//         }),
	//
	//         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
	//             '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
	//         ),
	//
	//         myPlacemarkWithContent = new ymaps.Placemark([59.938631, 30.323055], {
	//             hintContent: 'Собственный значок метки с контентом',
	//             balloonContent: 'HTML Academy, first level',
	//         }, {
	//             // Опции.
	//             // Необходимо указать данный тип макета.
	//             iconLayout: 'default#imageWithContent',
	//             // Своё изображение иконки метки.
	//             iconImageHref: 'https://i.ya-webdesign.com/images/pin-clipart-map-pin-5.png', // здесь мы указываем путь до нашей картинки пина (метки)
	//             // Размеры метки.
	//             iconImageSize: [27, 48], // здесь уже все просто и понятно , если переводить с английского названия свойств
	//             // Смещение левого верхнего угла иконки относительно
	//             // её "ножки" (точки привязки).
	//             iconImageOffset: [-12, -48],
	//             // Смещение слоя с содержимым относительно слоя с картинкой.
	//             iconContentOffset: [15, 15],
	//             // Макет содержимого.
	//             iconContentLayout: MyIconContentLayout
	//         });
	//
	//     myMap.geoObjects
	//         .add(myPlacemarkWithContent);
	// });