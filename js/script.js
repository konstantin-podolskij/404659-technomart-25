ymaps.ready(function () {
    var myMap = new ymaps.Map('popup-map', {
            center: [59.939419, 30.316818],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([59.938631, 30.323055], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: 'HTML Academy, first level',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'https://i.ya-webdesign.com/images/pin-clipart-map-pin-5.png', // здесь мы указываем путь до нашей картинки пина (метки)
            // Размеры метки.
            iconImageSize: [27, 48], // здесь уже все просто и понятно , если переводить с английского названия свойств
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-12, -48],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);
});