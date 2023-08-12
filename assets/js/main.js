
const html = document.querySelector('html');

const classBlockScroll = "js-block-scroll";

function blockScrollBody () {
  if ( !html.classList.contains(classBlockScroll) ) {
    html.classList.add(classBlockScroll);
  }
};

function unblockScrollBody () {
  if ( html.classList.contains(classBlockScroll) ) {
    html.classList.remove(classBlockScroll);
  }
};

const powerSupply = "220-240V,50HZ";
const powerSupplyOnePhase = "1 ФАЗА 220-240V,50HZ";
const powerSupplyThreePhase = "3 ФАЗА 380-415V,50HZ";


//
// // ----- Dahatsu Dragon (DHP) -----
//
// const functionsDahatsuDragon = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A",
// "Уровень шума 22dB", "Фреон R32", "Компактный дизайн", "Антибактериальный фильтр", "Самоочистка внутреннего блока",
// "Режим Turbo производительности", "Таймер", "Запоминание положения жалюзи", "Автоматический перезапуск"];
//
// const functionsDahatsuLegend = ["Компрессор GMCC Toshiba", "Режим Turbo производительности", "Автоматическое качание заслонок", "Режим комфортного сна",
//   "Режим 'Антиплесень'", "Компактный дизайн", "HEALTH - режим здоровье", "Самоочистка внутреннего блока", "Режим I Feel", "Автоматический перезапуск",
// "Запоминание положения жалюзи", "Таймер"];
//
// const imagesDahatsuDragon =
//   ["./assets/img/catalog/dahatsu/dhp/01.jpg",
//     "./assets/img/catalog/dahatsu/dhp/02.png",
//     "./assets/img/catalog/dahatsu/dhp/03.jpg",
//     "./assets/img/catalog/dahatsu/dhp/04.jpg"
//   ];
//
// const imagesDahatsuLegend =
//   ["./assets/img/catalog/dahatsu/da-h/01.png",
//     "./assets/img/catalog/dahatsu/da-h/02.png",
//     "./assets/img/catalog/dahatsu/da-h/03.png",
//     "./assets/img/catalog/dahatsu/da-h/04.png"
//   ];
//
// const descriptionDahatsuDragon = "Сплит-системы Dahatsu серии Dragon выполнены в современном, лаконичном дизайне и имеют обтекаемые формы, что позволит разместить данные сплит-системы в помещениях с высококлассными требованиями к решением интерьера. Помимо быстрого обогрева и охлаждения, устройство гарантирует тщательную очистку воздуха от загрязнений и аллергенов при помощи моющегося фильтра высокой плотности. В кондиционере предусмотрены такие функции, как: спящий режим, обнаружение утечки хладагента, горизонтальный автоповорот жалюзи, 2 способа подключения трубопровода, Н-образная установочная пластина, функция short cut- устанавливает и активирует ваши предварительные настройки, и прочие сверхтехнологичные функции."
// const descriptionDahatsuLegend = "Сплит-системы Dahatsu серии Legend это легендарное возвращение модели, которая отвечает всем стандартам современного качества. Лаконичный, обтекаемый дизайн впишется в помещение любого типа и интерьера.Новейшие технологии позволят вам комфортно использовать сплит-систему, быстро охлаждать и обогревать помещение, а интеллектуальное управление и энергосбережение создадут идеальную среду жизненного пространства. В кондиционере присутствуют такие функции, как: авто-рестарт, самоочистка, режим i feel, тихий и турбо режим, антиплесень, горизонтальный автоповорот жалюзи, программируемый таймер, самодиагностика при включении и работе, независимое осушение, саморазморозка и другие функции."
//
// const powerSupply = "220-240V,50HZ";
//
// // Все кондиционеры Dahatsu
// const dataDahatsu = [
//
//   // --------------------------- Dahatsu Dragon (DHP) ---------------------------
//
//   // ------ Dahatsu DHP-07/DHV-07 ------
//   {
//     article: "dahatsu-dhp-07",
//     title: "Dahatsu DHP-07/DHV-07",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Dragon",
//     link: "##",
//     imgSrc: imagesDahatsuDragon,
//     price: 25500, // Цена
//     area: 22, // На площадь, м²
//     coolingCapacity: 2.3, // Мощность охлаждения, кВт
//     noise: 22, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuDragon,
//     description: descriptionDahatsuDragon, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 2343, // Производительность, Вт
//       powerConsumption: 730, // Потребл. мощность, Вт
//     },
//       // Обогрев
//     heating: {
//       performance: 2419, // Производительность, Вт
//       powerConsumption: 670, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "8м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 22, // Уровень шума, дБ (A)
//       weight: 7.47, // Вес, кг
//       size: "715x194x285", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 53, // Уровень шума, дБ (A)
//       weight: 23.7, // Вес, кг
//       size: "720x270x495", // Размеры
//       freon: "R32", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DHP-09/DHV-09 ------
//   {
//     article: "dahatsu-dhp-09",
//     title: "Dahatsu DHP-09/DHV-09",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Dragon",
//     link: "##",
//     imgSrc: imagesDahatsuDragon,
//     price: 27700, // Цена
//     area: 28 , // На площадь, м²
//     coolingCapacity: 2.5, // Мощность охлаждения, кВт
//     noise: 22, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuDragon,
//     description: descriptionDahatsuDragon, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 2491, // Производительность, Вт
//       powerConsumption: 776, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 2491, // Производительность, Вт
//       powerConsumption: 690, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "8м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 22, // Уровень шума, дБ (A)
//       weight: 7.6, // Вес
//       size: "715x194x285", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 53, // Уровень шума, дБ (A)
//       weight: 23.7, // Вес, кг
//       size: "720x270x495", // Размеры
//       freon: "R32", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DHP-12/DHV-12 ------
//   {
//     article: "dahatsu-dhp-12",
//     title: "Dahatsu DHP-12/DHV-12",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Dragon",
//     link: "##",
//     imgSrc: imagesDahatsuDragon,
//     price: 38500, // Цена
//     area: 35 , // На площадь, м²
//     coolingCapacity: 3.5, // Мощность охлаждения, кВт
//     noise: 24, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuDragon,
//     description: descriptionDahatsuDragon, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 3517, // Производительность, Вт
//       powerConsumption: 1095, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 3664, // Производительность, Вт
//       powerConsumption: 1015, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "8м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 24, // Уровень шума, дБ (A)
//       weight: 8.1, // Вес, кг
//       size: "805x194x285", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 55, // Уровень шума, дБ (A)
//       weight: 25.6, // Вес, кг
//       size: "720x270x495", // Размеры
//       freon: "R32", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DHP-18/DHV-18 ------
//   {
//     article: "dahatsu-dhp-18",
//     title: "Dahatsu DHP-18/DHV-18",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Dragon",
//     link: "##",
//     imgSrc: imagesDahatsuDragon,
//     price: 59900, // Цена
//     area: 55 , // На площадь, м²
//     coolingCapacity: 5.2, // Мощность охлаждения, кВт
//     noise: 26, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuDragon,
//     description: descriptionDahatsuDragon, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 5275, // Производительность, Вт
//       powerConsumption: 1643, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 5569, // Производительность, Вт
//       powerConsumption: 1542, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "25м", // Макс. длина трассы, м
//     maxHeightDifference: "10м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 26, // Уровень шума, дБ (A)
//       weight: 10.9, // Вес, кг
//       size: "957x213x302", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 57, // Уровень шума, дБ (A)
//       weight: 34.5, // Вес, кг
//       size: "765x303x555", // Размеры
//       freon: "R32", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DHP-24/DHV-24 ------
//   {
//     article: "dahatsu-dhp-24",
//     title: "Dahatsu DHP-24/DHV-24",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Dragon",
//     link: "##",
//     imgSrc: imagesDahatsuDragon,
//     price: 77800, // Цена
//     area: 75 , // На площадь, м²
//     coolingCapacity: 7, // Мощность охлаждения, кВт
//     noise: 28, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuDragon,
//     description: descriptionDahatsuDragon, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 7034, // Производительность, Вт
//       powerConsumption: 2190, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 7034, // Производительность, Вт
//       powerConsumption: 1948, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "25м", // Макс. длина трассы, м
//     maxHeightDifference: "10м", // Макс. перепад высот, м
//     liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 28, // Уровень шума, дБ (A)
//       weight: 13.7, // Вес, кг
//       size: "1040x220x327", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 60.5, // Уровень шума, дБ (A)
//       weight: 47.9, // Вес, кг
//       size: "890x342x673", // Размеры
//       freon: "R32", // Фреон
//     }
//   },
//
//   // --------------------------- Dahatsu Legend (DA-H) ---------------------------
//
//   // ------ Dahatsu DA-07H ------
//
//   {
//     article: "dahatsu-da-07h",
//     title: "Dahatsu DA-07H",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Legend",
//     link: "##",
//     imgSrc: imagesDahatsuLegend,
//     price: 0, // Цена
//     area: 22 , // На площадь, м²
//     coolingCapacity: 2.1, // Мощность охлаждения, кВт
//     noise: 24, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuLegend,
//     description: descriptionDahatsuLegend, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 2100, // Производительность, Вт
//       powerConsumption: 650, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 2200, // Производительность, Вт
//       powerConsumption: 610, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "10м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 24, // Уровень шума, дБ (A)
//       weight: 8, // Вес, кг
//       size: "690x199x283", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 48, // Уровень шума, дБ (A)
//       weight: 20, // Вес, кг
//       size: "665x280x420", // Размеры
//       freon: "R410A", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DA-09H ------
//
//   {
//     article: "dahatsu-da-09h",
//     title: "Dahatsu DA-09H",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Legend",
//     link: "##",
//     imgSrc: imagesDahatsuLegend,
//     price: 0, // Цена
//     area: 28 , // На площадь, м²
//     coolingCapacity: 2.6, // Мощность охлаждения, кВт
//     noise: 24, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuLegend,
//     description: descriptionDahatsuLegend, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 2650, // Производительность, Вт
//       powerConsumption: 825, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 2700, // Производительность, Вт
//       powerConsumption: 748, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "10м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 24, // Уровень шума, дБ (A)
//       weight: 8.5, // Вес, кг
//       size: "690x199x283", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 50, // Уровень шума, дБ (A)
//       weight: 21, // Вес, кг
//       size: "665x280x420", // Размеры
//       freon: "R410A", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DA-12H ------
//
//   {
//     article: "dahatsu-da-12h",
//     title: "Dahatsu DA-12H",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Legend",
//     link: "##",
//     imgSrc: imagesDahatsuLegend,
//     price: 0, // Цена
//     area: 35 , // На площадь, м²
//     coolingCapacity: 3.5, // Мощность охлаждения, кВт
//     noise: 27, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuLegend,
//     description: descriptionDahatsuLegend, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 3550, // Производительность, Вт
//       powerConsumption: 1106, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 3650, // Производительность, Вт
//       powerConsumption: 1011, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "10м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 27, // Уровень шума, дБ (A)
//       weight: 9, // Вес, кг
//       size: "750x200x285", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 52, // Уровень шума, дБ (A)
//       weight: 25, // Вес, кг
//       size: "710x240x500", // Размеры
//       freon: "R410A", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DA-18H ------
//
//   {
//     article: "dahatsu-da-18h",
//     title: "Dahatsu DA-18H",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Legend",
//     link: "##",
//     imgSrc: imagesDahatsuLegend,
//     price: 0, // Цена
//     area: 55 , // На площадь, м²
//     coolingCapacity: 5.3, // Мощность охлаждения, кВт
//     noise: 29, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuLegend,
//     description: descriptionDahatsuLegend, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 5300, // Производительность, Вт
//       powerConsumption: 1656, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 5450, // Производительность, Вт
//       powerConsumption: 1509, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "10м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 29, // Уровень шума, дБ (A)
//       weight: 11, // Вес, кг
//       size: "900x225x310", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 54, // Уровень шума, дБ (A)
//       weight: 37, // Вес, кг
//       size: "800x315x545", // Размеры
//       freon: "R410A", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DA-24H ------
//
//   {
//     article: "dahatsu-da-24h",
//     title: "Dahatsu DA-24H",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Legend",
//     link: "##",
//     imgSrc: imagesDahatsuLegend,
//     price: 0, // Цена
//     area: 75 , // На площадь, м²
//     coolingCapacity: 7, // Мощность охлаждения, кВт
//     noise: 31, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuLegend,
//     description: descriptionDahatsuLegend, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 7000, // Производительность, Вт
//       powerConsumption: 2325, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 7100, // Производительность, Вт
//       powerConsumption: 2211, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "25м", // Макс. длина трассы, м
//     maxHeightDifference: "15м", // Макс. перепад высот, м
//     liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 31, // Уровень шума, дБ (A)
//       weight: 12, // Вес, кг
//       size: "900x225x310", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 55, // Уровень шума, дБ (A)
//       weight: 46, // Вес, кг
//       size: "825x310x655", // Размеры
//       freon: "R410A", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DA-36H ------
//
//   {
//     article: "dahatsu-da-36h",
//     title: "Dahatsu DA-36H",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Legend",
//     link: "##",
//     imgSrc: imagesDahatsuLegend,
//     price: 0, // Цена
//     area: 100 , // На площадь, м²
//     coolingCapacity: 9.7, // Мощность охлаждения, кВт
//     noise: 39, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuLegend,
//     description: descriptionDahatsuLegend, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 9700, // Производительность, Вт
//       powerConsumption: 3222, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 99000, // Производительность, Вт
//       powerConsumption: 3084, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "25м", // Макс. длина трассы, м
//     maxHeightDifference: "15м", // Макс. перепад высот, м
//     liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 39, // Уровень шума, дБ (A)
//       weight: 22, // Вес, кг
//       size: "1082x233x330", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 62, // Уровень шума, дБ (A)
//       weight: 70, // Вес, кг
//       size: "900x350x700", // Размеры
//       freon: "R410A", // Фреон
//     }
//   },
//
// ]
//
//
//

//
// // -----Denko Dragon (KR) -----
//
// const functionsDenkoDragon = ["Компрессор Gmcc Toshiba", "Класс энергоэффективности A", "Автоматическое качание заслонок", "Режим комфортного сна", "Зеленый фильтр высокой плотности", "Компактный дизайн",
//   "Режим Turbo производительности", "Самоочистка внутреннего блока", "Golden fin", "Автоматический перезапуск",
//   "Запоминание положения жалюзи", "Защитная крышка патрубков"];
//
//
// const imagesDenkoDragon =
//   ["./assets/img/catalog/Denko/kr/01.jpg",
//     "./assets/img/catalog/Denko/kr/02.png",
//     "./assets/img/catalog/Denko/kr/03.jpg",
//     "./assets/img/catalog/Denko/kr/04.jpg"
//   ];
//
// const descriptionDenkoDragon = "Сплит-системы Dahatsu серии Dragon выполнены в современном, лаконичном дизайне и имеют обтекаемые формы, что позволит разместить данные сплит-системы в помещениях с высококлассными требованиями к решением интерьера. Помимо быстрого обогрева и охлаждения, устройство гарантирует тщательную очистку воздуха от загрязнений и аллергенов при помощи моющегося фильтра высокой плотности. В кондиционере предусмотрены такие функции, как: спящий режим, обнаружение утечки хладагента, горизонтальный автоповорот жалюзи, 2 способа подключения трубопровода, Н-образная установочная пластина, функция short cut- устанавливает и активирует ваши предварительные настройки, и прочие сверхтехнологичные функции."
//
//
// // Все кондиционеры Denko
// const dataDenko  = [
//
//   // --- Denko Dragon ---
//   {
//     article: "denko-kr-07",
//     title: "Denko RK-07",
//     type: "split-system",
//     company: "Denko",
//     series: "Dragon",
//     link: "##",
//     imgSrc: imagesDenkoDragon,
//     price: 25500,
//     // На площадь
//     area: "25 м²",
//     // Мощность охлаждения
//     coolingCapacity: "2.3 кВт",
//     // Уровень шума
//     noise: "22 дБ",
//     // Наличие инвертора
//     inverter: "нет",
//     // Класс энергоэффективности
//     class: "A",
//     // Габариты внутреннего и внешнего блоков
//     dimensions: {
//       "indoor": "715x194x285",
//       "outdoor": "720x270x495"
//     },
//     functions: functionsDenkoDragon,
//     // Описание
//     description: descriptionDahatsuDragon,
//   },
// ]
//
//
//
//
// const functionsDenkoLegend = ["Компрессор Gmcc Toshiba", "Режим Turbo производительности", "Автоматическое качание заслонок",
//   "Режим комфортного сна", "Режим 'Антиплесень'", "Компактный дизайн", "HEALTH - режим здоровье", "Самоочистка внутреннего блока", "Режим I Feel",
//   "Автоматический перезапуск", "Запоминание положения жалюзи", "Таймер"];

// ----- Dahatsu Legend (DA-H) -----

const functionsDahatsuLegend = ["Компрессор GMCC Toshiba", "Режим Turbo производительности", "Автоматическое качание заслонок", "Режим комфортного сна",
  "Режим 'Антиплесень'", "Компактный дизайн", "HEALTH - режим здоровье", "Самоочистка внутреннего блока", "Режим I Feel", "Автоматический перезапуск",
  "Запоминание положения жалюзи", "Таймер"];

const imagesDahatsuLegend =
  ["./assets/img/catalog/dahatsu/da-h/01.png",
    "./assets/img/catalog/dahatsu/da-h/02.png",
    "./assets/img/catalog/dahatsu/da-h/03.png",
    "./assets/img/catalog/dahatsu/da-h/04.png"
  ];

const descriptionDahatsuLegend = "Сплит-системы Dahatsu серии Legend это легендарное возвращение модели, которая отвечает всем стандартам современного качества. Лаконичный, обтекаемый дизайн впишется в помещение любого типа и интерьера.Новейшие технологии позволят вам комфортно использовать сплит-систему, быстро охлаждать и обогревать помещение, а интеллектуальное управление и энергосбережение создадут идеальную среду жизненного пространства. В кондиционере присутствуют такие функции, как: авто-рестарт, самоочистка, режим i feel, тихий и турбо режим, антиплесень, горизонтальный автоповорот жалюзи, программируемый таймер, самодиагностика при включении и работе, независимое осушение, саморазморозка и другие функции."


const DAHATSU_DA_H = [

  // ------ Dahatsu DA-07H ------
  {
    article: "dahatsu-da-07h",
    title: "Dahatsu DA-07H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "##",
    imgSrc: imagesDahatsuLegend,
    price: 0, // Цена
    area: 22 , // На площадь, м²
    coolingCapacity: 2.1, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 2100, // Производительность, Вт
      powerConsumption: 650, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 610, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 20, // Вес, кг
      size: "665x280x420", // Размеры
      freon: "R410A", // Фреон
    }
  },

  // ------ Dahatsu DA-09H ------

  {
    article: "dahatsu-da-09h",
    title: "Dahatsu DA-09H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "##",
    imgSrc: imagesDahatsuLegend,
    price: 0, // Цена
    area: 28 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 825, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 748, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8.5, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21, // Вес, кг
      size: "665x280x420", // Размеры
      freon: "R410A", // Фреон
    }
  },

  // ------ Dahatsu DA-12H ------

  {
    article: "dahatsu-da-12h",
    title: "Dahatsu DA-12H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "##",
    imgSrc: imagesDahatsuLegend,
    price: 0, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 27, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 3550, // Производительность, Вт
      powerConsumption: 1106, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3650, // Производительность, Вт
      powerConsumption: 1011, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 27, // Уровень шума, дБ (A)
      weight: 9, // Вес, кг
      size: "750x200x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 25, // Вес, кг
      size: "710x240x500", // Размеры
      freon: "R410A", // Фреон
    }
  },

  // ------ Dahatsu DA-18H ------

  {
    article: "dahatsu-da-18h",
    title: "Dahatsu DA-18H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "##",
    imgSrc: imagesDahatsuLegend,
    price: 0, // Цена
    area: 55 , // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 29, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1656, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5450, // Производительность, Вт
      powerConsumption: 1509, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 29, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 37, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
    }
  },

  // ------ Dahatsu DA-24H ------

  {
    article: "dahatsu-da-24h",
    title: "Dahatsu DA-24H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "##",
    imgSrc: imagesDahatsuLegend,
    price: 0, // Цена
    area: 75 , // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 31, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 7000, // Производительность, Вт
      powerConsumption: 2325, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7100, // Производительность, Вт
      powerConsumption: 2211, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "25м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 31, // Уровень шума, дБ (A)
      weight: 12, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 46, // Вес, кг
      size: "825x310x655", // Размеры
      freon: "R410A", // Фреон
    }
  },

  // ------ Dahatsu DA-36H ------

  {
    article: "dahatsu-da-36h",
    title: "Dahatsu DA-36H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "##",
    imgSrc: imagesDahatsuLegend,
    price: 0, // Цена
    area: 100 , // На площадь, м²
    coolingCapacity: 9.7, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 9700, // Производительность, Вт
      powerConsumption: 3222, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 99000, // Производительность, Вт
      powerConsumption: 3084, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "25м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 22, // Вес, кг
      size: "1082x233x330", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 62, // Уровень шума, дБ (A)
      weight: 70, // Вес, кг
      size: "900x350x700", // Размеры
      freon: "R410A", // Фреон
    }
  },
];

// ----- Dahatsu Dragon (DHP) -----

const functionsDahatsuDragon = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A",
  "Уровень шума 22dB", "Фреон R32", "Компактный дизайн", "Антибактериальный фильтр", "Самоочистка внутреннего блока",
  "Режим Turbo производительности", "Таймер", "Запоминание положения жалюзи", "Автоматический перезапуск"];

const imagesDahatsuDragon =
  ["./assets/img/catalog/dahatsu/dhp/01.jpg",
    "./assets/img/catalog/dahatsu/dhp/02.png",
    "./assets/img/catalog/dahatsu/dhp/03.jpg",
    "./assets/img/catalog/dahatsu/dhp/04.jpg"
  ];

const descriptionDahatsuDragon = "Сплит-системы Dahatsu серии Dragon выполнены в современном, лаконичном дизайне и имеют обтекаемые формы, что позволит разместить данные сплит-системы в помещениях с высококлассными требованиями к решением интерьера. Помимо быстрого обогрева и охлаждения, устройство гарантирует тщательную очистку воздуха от загрязнений и аллергенов при помощи моющегося фильтра высокой плотности. В кондиционере предусмотрены такие функции, как: спящий режим, обнаружение утечки хладагента, горизонтальный автоповорот жалюзи, 2 способа подключения трубопровода, Н-образная установочная пластина, функция short cut- устанавливает и активирует ваши предварительные настройки, и прочие сверхтехнологичные функции."

const DAHATSU_DHP = [

  // ------ Dahatsu DHP-07/DHV-07 ------
  {
    article: "dahatsu-dhp-07",
    title: "Dahatsu DHP-07/DHV-07",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "##",
    imgSrc: imagesDahatsuDragon,
    price: 25500, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.3, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 2343, // Производительность, Вт
      powerConsumption: 730, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2419, // Производительность, Вт
      powerConsumption: 670, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "8м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 7.47, // Вес, кг
      size: "715x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 23.7, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R32", // Фреон
    }
  },

  // ------ Dahatsu DHP-09/DHV-09 ------
  {
    article: "dahatsu-dhp-09",
    title: "Dahatsu DHP-09/DHV-09",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "##",
    imgSrc: imagesDahatsuDragon,
    price: 27700, // Цена
    area: 28 , // На площадь, м²
    coolingCapacity: 2.5, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 2491, // Производительность, Вт
      powerConsumption: 776, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2491, // Производительность, Вт
      powerConsumption: 690, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "8м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 7.6, // Вес
      size: "715x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 23.7, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R32", // Фреон
    }
  },

  // ------ Dahatsu DHP-12/DHV-12 ------
  {
    article: "dahatsu-dhp-12",
    title: "Dahatsu DHP-12/DHV-12",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "##",
    imgSrc: imagesDahatsuDragon,
    price: 38500, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 3517, // Производительность, Вт
      powerConsumption: 1095, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3664, // Производительность, Вт
      powerConsumption: 1015, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "8м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8.1, // Вес, кг
      size: "805x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 25.6, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R32", // Фреон
    }
  },

  // ------ Dahatsu DHP-18/DHV-18 ------
  {
    article: "dahatsu-dhp-18",
    title: "Dahatsu DHP-18/DHV-18",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "##",
    imgSrc: imagesDahatsuDragon,
    price: 59900, // Цена
    area: 55 , // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 26, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 5275, // Производительность, Вт
      powerConsumption: 1643, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5569, // Производительность, Вт
      powerConsumption: 1542, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "25м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 26, // Уровень шума, дБ (A)
      weight: 10.9, // Вес, кг
      size: "957x213x302", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 34.5, // Вес, кг
      size: "765x303x555", // Размеры
      freon: "R32", // Фреон
    }
  },

  // ------ Dahatsu DHP-24/DHV-24 ------
  {
    article: "dahatsu-dhp-24",
    title: "Dahatsu DHP-24/DHV-24",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "##",
    imgSrc: imagesDahatsuDragon,
    price: 77800, // Цена
    area: 75 , // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 28, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 7034, // Производительность, Вт
      powerConsumption: 2190, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7034, // Производительность, Вт
      powerConsumption: 1948, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "25м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 28, // Уровень шума, дБ (A)
      weight: 13.7, // Вес, кг
      size: "1040x220x327", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 60.5, // Уровень шума, дБ (A)
      weight: 47.9, // Вес, кг
      size: "890x342x673", // Размеры
      freon: "R32", // Фреон
    }
  },
];

// -----Denko Кассетный (DCS-A) -----

const functionsDenkoDCS_A = ["ON/OFF", "Инфракрасный пульт (в комплекте)", "Режим энергосбережения",
  "Самоочистка внутреннего блока", "Объемное воздухо-распределение", "Турборежим", "Тихий режим", "Горячий запуск",
"24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка", "Работа в режиме охлаждения до -15°C",
"Работа в режиме обогрева до -15°C", "Дренажный насос", "Самодиагностика", "Низкотемпературный комплект",
  "Панель с круговым распределением воздушного потока", "HEALTH"];

const imagesDenkoDCS_A =
  ["./assets/img/catalog/Denko/dcs-a/01.png",
    "./assets/img/catalog/Denko/dcs-a/02.png",
    "./assets/img/catalog/Denko/dcs-a/03.png",
    "./assets/img/catalog/Denko/dcs-a/04.png"
  ];

const descriptionDenkoDCS_A = "Кассетная сплит-система DCS-A позволит быстро и равномерно создать и поддерживать комфортную температуру в помещении. Распределение воздуха на 360 градусов. Панель с круговым распределением воздушного потока обеспечивает эффективное охлаждение и обогрев. \n Данный вид кондиционеров интегрируется в подвесные потолки и осуществляет подачу воздуха в 4 потока. Новейшая модель DCS-A обладает привлекательным видом, компактными габаритами, множеством настроек и функций. \n Режим TURBO активирует максимальную производительность и позволяет быстрее достичь необходимой температуры."


const DENKO_DCS_A = [

  // ------ Denko DCS-12A ------
  {
    article: "denko-dcs-12a",
    title: "Denko DCS-12A",
    type: "cassette",
    company: "Denko",
    series: "DCS-A",
    factory: "GREE",
    link: "##",
    imgSrc: imagesDenkoDCS_A,
    price: 56000, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDCS_A,
    description: descriptionDenkoDCS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 3520, // Производительность, Вт
      powerConsumption: 1300, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3960, // Производительность, Вт
      powerConsumption: 1280, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 16, // Вес, кг
      size: "570x570x260", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "780x285x545", // Размеры
      freon: "R410A", // Фреон
      //compressorModel: "GREE",
    }
  },

  // ------ Denko DCS-18A ------
  {
    article: "denko-dcs-18a",
    title: "Denko DCS-18A",
    type: "cassette",
    company: "Denko",
    series: "DCS-A",
    factory: "GREE",
    link: "##",
    imgSrc: imagesDenkoDCS_A,
    price: 63200, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDCS_A,
    description: descriptionDenkoDCS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 5280, // Производительность, Вт
      powerConsumption: 1700, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5600, // Производительность, Вт
      powerConsumption: 1550, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 16, // Вес, кг
      size: "570x570x260", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      //compressorModel: "GREE",
    }
  },

  // ------ Denko DCS-24A ------
  {
    article: "denko-dcs-24a",
    title: "Denko DCS-24A",
    type: "cassette",
    company: "Denko",
    series: "DCS-A",
    factory: "GREE",
    link: "##",
    imgSrc: imagesDenkoDCS_A,
    price: 78000, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDCS_A,
    description: descriptionDenkoDCS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 7030, // Производительность, Вт
      powerConsumption: 2150, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7200, // Производительность, Вт
      powerConsumption: 1820, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 27, // Вес, кг
      size: "835x835x250", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 48, // Вес, кг
      size: "825x310x655", // Размеры
      freon: "R410A", // Фреон
      //compressorModel: "GREE",
    }
  },



]

// -----Denko Dragon (KR) -----

const functionsDenkoDragon = ["Компрессор GMCC Toshiba", "Класс энергоэффективности A", "Автоматическое качание заслонок", "Режим комфортного сна", "Зеленый фильтр высокой плотности", "Компактный дизайн",
  "Режим Turbo производительности", "Самоочистка внутреннего блока", "Golden fin", "Автоматический перезапуск",
  "Запоминание положения жалюзи", "Защитная крышка патрубков"];

const imagesDenkoDragon =
  ["./assets/img/catalog/Denko/kr/01.jpg",
    "./assets/img/catalog/Denko/kr/02.png",
    "./assets/img/catalog/Denko/kr/03.jpg",
    "./assets/img/catalog/Denko/kr/04.jpg"
  ];

const descriptionDenkoDragon = "Сплит-системы Denko серии Dragon - минималистичный, но в то же время элегантный дизайн внутреннего блока, эргономичный и удобный пульт ДУ и стильный внешний блок в комплекте создают идеальную, современную сплит-систему. Скрытый дисплей, зеленый фильтр высокой плотности, теплообменник Golden fin, два направления воздушного потока, экономичный режим ECO, самоочистка - все эти функции присутствуют в кондиционерах серии KR. Данная модель соответствует наивысшему классу энергоэффективности по российской классификации - классу A. При разработке были внедрены новейшие технологии, направленные на сокращение потребления электроэнергии. Комплекс классических режимов присутствует в данной серии: обогрев, охлаждение, осушение и вентиляция."


const DENKO_KR = [

  // ------ Denko KR-09 ------
  {
    article: "denko-kr-09",
    title: "Denko KR-09",
    type: "split-system",
    company: "Denko",
    series: "Dragon",
    factory: "Midea",
    link: "##",
    imgSrc: imagesDenkoDragon,
    price: 21000, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 23, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDragon,
    description: descriptionDenkoDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 2630, // Производительность, Вт
      powerConsumption: 817, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2690, // Производительность, Вт
      powerConsumption: 743, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "10м", // Макс. длина трассы, м
    maxHeightDifference: "5м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 23, // Уровень шума, дБ (A)
      weight: 6.5, // Вес, кг
      size: "700x198x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 20, // Вес, кг
      size: "660x250x421", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GREE",
    }
  },

  // ------ Denko KR-12 ------
  {
    article: "denko-kr-12",
    title: "Denko KR-12",
    type: "split-system",
    company: "Denko",
    series: "Dragon",
    factory: "Midea",
    link: "##",
    imgSrc: imagesDenkoDragon,
    price: 28900, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 25, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDragon,
    description: descriptionDenkoDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 3510, // Производительность, Вт
      powerConsumption: 1093, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3570, // Производительность, Вт
      powerConsumption: 986, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "15м", // Макс. длина трассы, м
    maxHeightDifference: "7м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 25, // Уровень шума, дБ (A)
      weight: 7.2, // Вес, кг
      size: "805x197x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 23.5, // Вес, кг
      size: "660x240x530", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GREE",
    }
  },

]

const dataDahatsu = [
  DAHATSU_DHP,
  DAHATSU_DA_H,
];

const dataDenko = [
  DENKO_KR,
  DENKO_DCS_A,
];

const productsArr = [
  dataDahatsu,
  dataDenko,

].flat().flat();

//productsArr = productsArr.flat()



{

  let mySwiper;

  const swiperAbout = document.querySelector('.about__slider');

      mySwiper = new Swiper(swiperAbout, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          types: "bullets",
        },

        // Откл функционала, если слайдов меньше, чем нужно
        watchOverflow: true,

        // Брейк поинты (адаптив)
        // Ширина экрана
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1.3,
            spaceBetween: 16,
          },

          640: {
            slidesPerView: 1.5,
            spaceBetween: 32,
          },

          768: {
            slidesPerView: 2.2,
            spaceBetween: 32,
          },

          1100: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }

      });

}

const filter = document.querySelector('.filter');

if (filter) {

  const filterItems = filter.querySelectorAll('.filter__item-title');

  const filterOpen = (filter) => filter.classList.add('js-filter-open');
  const filterHide = (filter) => filter.classList.remove('js-filter-open');

  filterItems.forEach(filterItem => {
    filterItem.addEventListener('click', () => {
      filterItem.classList.toggle('js-filter-open');

      // Скрыть все, кроме активного
      const inactiveFilters = Array.from(filterItems).filter(el => el !== filterItem);
      inactiveFilters.forEach(filterHide);

      // Скрыть по клику вне блока фильтра
      document.addEventListener('click', function (evt) {
        if (!evt.target.closest('.filter__item')) {
          filterItems.forEach(filterHide);
        }
      });
    });
  });

  const filterBtn = filter.querySelector('.filter__icon');
  const closeFilter = filter.querySelector('.filter__close');

  filterBtn.addEventListener('click', () => {
    filterOpen(filterBtn)
    blockScrollBody();
  });

  closeFilter.addEventListener('click', () => {
    filterHide(filterBtn)
    unblockScrollBody();
  });



  // Добавление кнопки на моб.версии---------------

  const form = filter.querySelector('.filter__form');
  const btnForm = form.querySelector('.filter__form-submit');

  const visibleBtn = () => btnForm.classList.add('js-visible');
  const hiddenBtn = () => btnForm.classList.remove('js-visible');

  //checkboxes----------------------------
  const checkboxesForm = form.querySelectorAll('input[type="checkbox"]');

  function isSelectedCheckbox (checkboxes) {
    return Array.from(checkboxes).some(checkbox => checkbox.checked);
  };


  // Selects-----------------
  const selectsForm = form.querySelectorAll('select');

  function isSelectedOption (selects) {
    return Array.from(selects).some(select => select.selectedIndex !== 0);
  };

  // Inputs price-----------------
  const inputsNumberForm = form.querySelectorAll('input[type="number"]');

  function isEnteredPrice (inputsNumber) {
    return Array.from(inputsNumber).some(inputNumber => inputNumber.value !== "");
  };

  // Radio-----------------
  const radiosForm = form.querySelectorAll('input[type="radio"]');

  function isSelectedRadio (radioBtns) {
    return Array.from(radioBtns).some(radioBtn => radioBtn.checked);
  };


  form.addEventListener('change', () => {
    ( isSelectedCheckbox(checkboxesForm)
      || isSelectedOption(selectsForm)
      || isEnteredPrice(inputsNumberForm)
      || isSelectedRadio(radiosForm) ) ? visibleBtn() : hiddenBtn();
  });



}



const header = document.querySelector('header.header');
const menu = header.querySelector('.header__nav');
const burger = header.querySelector('.header__burger');
const menuClose = header.querySelector('.header__nav-close');

burger.addEventListener('click', () => {
  menu.classList.add('js-menu-open');
  blockScrollBody();
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('js-menu-open');
  unblockScrollBody();
});




const loader = document.querySelector('.loader');

if (loader) {

  function hideLoader () {
    loader.classList.add('hide');
    setTimeout(() => loader.remove(), 300);
  };

  window.addEventListener('load', hideLoader);
}

const swiperPopular = document.querySelector('.popular__slider');

if (swiperPopular) {
setTimeout(createPopularSlider, 0);
}


function createPopularSlider () {
  const mySwiper = new Swiper(swiperPopular, {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    // Ширина экрана
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      380: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },
      480: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },

      640: {
        slidesPerView: "auto",
        spaceBetween: 32,
      },

      1100: {
        slidesPerView: "auto",
        spaceBetween: 32,
      },
    }
  });
}


const popular = document.querySelector('.popular');

if (popular) {

  const cardPopularTemplate = document.querySelector('#template-card-popular').content.querySelector('.card-popular.swiper-slide');
  const swiperWrapperPopular = document.querySelector('.popular__slider .swiper-wrapper');

  const articlesPopularCards = ["dahatsu-dhp-07", "denko-kr-09"];

  // Создание карточек товара для блока "Популярное", используется общий массив данных товара.
  // Для выбора карточек в функцию передается массив с артикулами товара
  function createCardPopular (products, articles) {

    products.forEach(product => {

      articles.forEach(article => {
        if (product.article === article) {
          const popularItem = cardPopularTemplate.cloneNode(true);

          popularItem.querySelector('.card-popular__link').href = product.link;
          popularItem.querySelector('.card-popular__img').src = product.imgSrc[0];
          popularItem.querySelector('.card-popular__title').textContent = product.title;
          popularItem.querySelector('.card-popular__price').textContent = `${product.price.toLocaleString("ru")} ₽`;
          popularItem.querySelector('.card-popular__data-item-value--area').textContent = `${product.area} м²`;
          popularItem.querySelector('.card-popular__data-item-value--coolingCapacity').textContent = `${product.coolingCapacity} кВт`;
          popularItem.querySelector('.card-popular__data-item-value--noise').textContent = `${product.noise} дБ`;
          popularItem.querySelector('.card-popular__data-item-value--inverter').textContent = `${product.inverter ? "Есть" : "Нет"}`;

          swiperWrapperPopular.appendChild(popularItem);
        }
      })
    });
  };

  createCardPopular(productsArr, articlesPopularCards);

}



const mainProducts = document.querySelector(".products.products--main");

if (mainProducts) {

  const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
  const productsGrid = mainProducts.querySelector(".products__grid");

  function createCard (products) {
    products.forEach(product => {

      const cardItem = cardTemplate.cloneNode(true);

      cardItem.querySelector('.card__link').href = product.link;
      cardItem.querySelector('.card__img').src = product.imgSrc[0];
      cardItem.querySelector('.card__title').textContent = product.title;
      cardItem.querySelector('.card__price').textContent = `${product.price.toLocaleString("ru")} ₽`;
      cardItem.querySelector('.card__data-item-value--area').textContent = `${product.area} м²`;
      cardItem.querySelector('.card__data-item-value--coolingCapacity').textContent = `${product.coolingCapacity} кВт`;
      cardItem.querySelector('.card__data-item-value--noise').textContent = `${product.noise} дБ`;
      cardItem.querySelector('.card__data-item-value--inverter').textContent = `${product.inverter ? "Есть" : "Нет"}`;

      productsGrid.appendChild(cardItem);
    });
  };



  const startProductsArr = productsArr.slice(0, 6);

  // Отрисовка первичных картчоек при загрузке страницы
  window.addEventListener("load", () => createCard (startProductsArr));

  let loadedCards = 6; // С номерка какой карточки в массиве начать "ленивую" загрузку
  let cardsPerPage = 6; // Сколько карточек будет прибавляться при "ленивой" загрузке

  function lazyLoadingCards (products) {
    const windowsHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (windowsHeight + scrollTop >= documentHeight - 500) {
      const renderedCards = products.slice(loadedCards, loadedCards+cardsPerPage);
      loadedCards += renderedCards.length;

        createCard (renderedCards);

      //createCard (renderedCards);

      // console.log("products.length", products.length);
      // console.log("loadedCards", loadedCards);
    }

    if (loadedCards === products.length) {
      console.log('stop')
      return true;
    }

  };

  window.addEventListener("scroll", () => {
    lazyLoadingCards(productsArr);

    if (lazyLoadingCards(productsArr)) {
      console.log('stop stop stop')
    }
  });




}


