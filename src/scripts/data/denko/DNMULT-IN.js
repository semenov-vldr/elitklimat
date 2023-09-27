// ----- Мульти-сплит-система (внутрненние блоки) Denko  (DNMULT) -----

const functionsDenkoDNMULT_In = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A", "Уровень шума от 22dB", "Фреон R410A"];

const imagesDenkoDNMULT_In =
  ["./assets/img/catalog/Denko/DNMULT/indoor/01.jpg",
    "./assets/img/catalog/Denko/DNMULT/indoor/02.jpg"
  ];

const pricesDenkoDNMULT_In = {
  "denko_dnmult_07": 13500,
  "denko_dnmult_09": 14500,
  "denko_dnmult_12": 16200,
  "denko_dnmult_18": 21000,
}

const descriptionDenkoDNMULT_In = "Серия DNMULT DC INVERTER бренда Denko 2023 года - это комплекс современных высокотехнологичных мульти-сплит систем, оснащенных наилучшими комплектующими и представленных в современных высококачественных корпусах.\n" +
  "Возможность одновременного подключения к одному внешнему блоку сразу нескольких внутренних блоков позволяет с минимальными затратами и нарушением внешнего вида зданий задать комфортный климат сразу в нескольких помещениях. Данная серия является одной из лучших вариантов обладающих высокой энергоэффективностью, низким уровнем шума, компактными размерами. Серия DNMULT может стать идеальным вариантом для установки, например, в загородном доме или многокомнатной квартире."

const DENKO_DNMULT_IN = [

  // ------ Denko DNMULT-07 ------
  {
    article: "denko-dnmult-07",
    title: "Внутренний блок Denko DNMULT-07",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Indoor)",
    link: "denko-dnmult-07.html",
    imgSrc: imagesDenkoDNMULT_In,
    price: pricesDenkoDNMULT_In.denko_dnmult_07, // Цена
    area: 30, // На площадь, м²
    coolingCapacity: 2.05, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_In,
    description: descriptionDenkoDNMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 2050, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2150, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x285x200", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },

  // ------ Dahatsu DHMULT-09 ------
  {
    article: "denko-dnmult-09",
    title: "Внутренний блок Denko DNMULT-09",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Indoor)",
    link: "denko-dnmult-09.html",
    imgSrc: imagesDenkoDNMULT_In,
    price: pricesDenkoDNMULT_In.denko_dnmult_09, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 2.58, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_In,
    description: descriptionDenkoDNMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 2580, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x285x200", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },

  // ------ Ddenko DNMULT-12 ------
  {
    article: "denko-dnmult-12",
    title: "Внутренний блок Denko DNMULT-12",
    type: "multi-split-systems",
    company: "Denko",
    series: "DHMULT DC INVERTER (Indoor)",
    link: "denko-dnmult-12.html",
    imgSrc: imagesDenkoDNMULT_In,
    price: pricesDenkoDNMULT_In.denko_dnmult_12, // Цена
    area: 40, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 33, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_In,
    description: descriptionDenkoDNMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 3500, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3500, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 33, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x285x200", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },

  // ------ Dahatsu DHMULT-18 ------
  {
    article: "denko-dnmult-18",
    title: "Внутренний блок Denko DNMULT-18",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Indoor)",
    link: "denko-dnmult-18.html",
    imgSrc: imagesDenkoDNMULT_In,
    price: pricesDenkoDNMULT_In.denko_dnmult_18, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.27, // Мощность охлаждения, кВт
    noise: 35, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_In,
    description: descriptionDenkoDNMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 5270, // Производительность, Вт
      powerConsumption: 63, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5370, // Производительность, Вт
      powerConsumption: 63, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 35, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "900x310x225", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },


];
