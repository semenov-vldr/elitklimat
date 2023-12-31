// ----- Мульти-сплит-система (наружные блоки) Denko  (DNMULT) -----

const functionsDenkoDNMULT_Out = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A", "Уровень шума от 22dB", "Фреон R410A"];

const imagesDenkoDNMULT_Out =
  ["./assets/img/catalog/Denko/DNMULT/outdoor/01.jpg",
  ];

const pricesDenkoDNMULT_Out = {
  "denko_dnmult_out_18_2": 68500,
  "denko_dnmult_out_24_3": 80000,
  "denko_dnmult_out_30_3": 102000,
  "denko_dnmult_out_42_4": 145200,
  //"denko_dnmult_out_42_5": 212000,

}

const descriptionDenkoDNMULT_Out = "Серия DNMULT DC INVERTER бренда Denko 2023 года - это комплекс современных высокотехнологичных мульти-сплит систем, оснащенных наилучшими комплектующими и представленных в современных высококачественных корпусах.\n" +
  "Возможность одновременного подключения к одному внешнему блоку сразу нескольких внутренних блоков позволяет с минимальными затратами и нарушением внешнего вида зданий задать комфортный климат сразу в нескольких помещениях. Данная серия является одной из лучших вариантов обладающих высокой энергоэффективностью, низким уровнем шума, компактными размерами. Серия DNMULT может стать идеальным вариантом для установки, например, в загородном доме или многокомнатной квартире."


const DENKO_DNMULT_OUT = [

  // ------ Denko DNMULT-18/2 ------
  {
    article: "denko-dnmult-18-2",
    title: "Наружный блок Denko DNMULT-18/2",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Outdoor)",
    link: "denko-dnmult-18-2.html",
    imgSrc: imagesDenkoDNMULT_Out,
    price: pricesDenkoDNMULT_Out.denko_dnmult_out_18_2, // Цена
    area: 50, // На площадь, м²
    coolingCapacity: 4.1, // Мощность охлаждения, кВт
    noise: 54, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_Out,
    description: descriptionDenkoDNMULT_Out, // Описание

    // Охлаждение
    cooling: {
      performance: 4100, // Производительность, Вт
      powerConsumption: 1240, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 4800, // Производительность, Вт
      powerConsumption: 1150, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 40, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "2x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "2x9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    // indoorUnit: {
    //   noise: "-", // Уровень шума, дБ (A)
    //   weight: "-", // Вес, кг
    //   size: "-", // Размеры
    // },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 34, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DNMULT-24/3 ------
  {
    article: "denko-dnmult-24-3",
    title: "Наружный блок Denko DNMULT-24/3",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Outdoor)",
    link: "denko-dnmult-24-3.html",
    imgSrc: imagesDenkoDNMULT_Out,
    price: pricesDenkoDNMULT_Out.denko_dnmult_out_24_3, // Цена
    area: 70, // На площадь, м²
    coolingCapacity: 6.2, // Мощность охлаждения, кВт
    noise: 56, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_Out,
    description: descriptionDenkoDNMULT_Out, // Описание

    // Охлаждение
    cooling: {
      performance: 6200, // Производительность, Вт
      powerConsumption: 1920, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 6600, // Производительность, Вт
      powerConsumption: 1780, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 60, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "3x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "3x9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    // indoorUnit: {
    //   noise: "-", // Уровень шума, дБ (A)
    //   weight: "-", // Вес, кг
    //   size: "-", // Размеры
    // },
    // Внешний блок
    outdoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "834x328x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DNMULT-30/3 ------
  {
    article: "denko-dnmult-30-3",
    title: "Наружный блок Denko DNMULT-30/3",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Outdoor)",
    link: "denko-dnmult-30-3.html",
    imgSrc: imagesDenkoDNMULT_Out,
    price: pricesDenkoDNMULT_Out.denko_dnmult_out_30_3, // Цена
    area: 80, // На площадь, м²
    coolingCapacity: 7.9, // Мощность охлаждения, кВт
    noise: 58, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_Out,
    description: descriptionDenkoDNMULT_Out, // Описание

    // Охлаждение
    cooling: {
      performance: 7900, // Производительность, Вт
      powerConsumption: 2460, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 8200, // Производительность, Вт
      powerConsumption: 2270, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 60, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "3x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "3x9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    // indoorUnit: {
    //   noise: "-", // Уровень шума, дБ (A)
    //   weight: "-", // Вес, кг
    //   size: "-", // Размеры
    // },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 46, // Вес, кг
      size: "834x328x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DNMULT-42/4 ------
  {
    article: "denko-dnmult-42-4",
    title: "Наружный блок Denko DNMULT-42/4",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Outdoor)",
    link: "denko-dnmult-42-4.html",
    imgSrc: imagesDenkoDNMULT_Out,
    price: pricesDenkoDNMULT_Out.denko_dnmult_out_42_4, // Цена
    area: 110, // На площадь, м²
    coolingCapacity: 10.5, // Мощность охлаждения, кВт
    noise: 61, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_Out,
    description: descriptionDenkoDNMULT_Out, // Описание

    // Охлаждение
    cooling: {
      performance: 10500, // Производительность, Вт
      powerConsumption: 3600, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 11000, // Производительность, Вт
      powerConsumption: 3400, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 80, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "4x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "4x9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    // indoorUnit: {
    //   noise: "-", // Уровень шума, дБ (A)
    //   weight: "-", // Вес, кг
    //   size: "-", // Размеры
    // },
    // Внешний блок
    outdoorUnit: {
      noise: 61, // Уровень шума, дБ (A)
      weight: 76.5, // Вес, кг
      size: "985x395x808", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DNMULT-42/5 ------
  // {
  //   article: "denko-dnmult-42-5",
  //   title: "Наружный блок Denko DNMULT-42/5",
  //   type: "multi-split-systems",
  //   company: "Denko",
  //   series: "DNMULT DC INVERTER (Outdoor)",
  //   link: "denko-dnmult-42-5.html",
  //   imgSrc: imagesDenkoDNMULT_Out,
  //   price: pricesDenkoDNMULT_Out.denko_dnmult_out_42_5, // Цена
  //   area: 130, // На площадь, м²
  //   coolingCapacity: 12.1, // Мощность охлаждения, кВт
  //   noise: 61, // Уровень шума, дБ (A)
  //   inverter: true, // Наличие инвертора (да/нет)
  //
  //   functions: functionsDenkoDNMULT_Out,
  //   description: descriptionDenkoDNMULT_Out, // Описание
  //
  //   // Охлаждение
  //   cooling: {
  //     performance: 12100, // Производительность, Вт
  //     powerConsumption: 4450, // Потребл. мощность, Вт
  //   },
  //   // Обогрев
  //   heating: {
  //     performance: 13000, // Производительность, Вт
  //     powerConsumption: 3800, // Потребл. мощность, Вт
  //   },
  //   powerSupply: powerSupply, // Электропитание
  //   maxTrackLength: 80, // Макс. длина трассы, м
  //   maxHeightDifference: 10, // Макс. перепад высот, м
  //   liquidPipeDiameter: "5x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
  //   gasPipeDiameter: "5x9,52мм(3/8)", // Диаметр газовой трубы, мм
  //   // Внутренний блок
  //   // indoorUnit: {
  //   //   noise: "-", // Уровень шума, дБ (A)
  //   //   weight: "-", // Вес, кг
  //   //   size: "-", // Размеры
  //   // },
  //   // Внешний блок
  //   outdoorUnit: {
  //     noise: 61, // Уровень шума, дБ (A)
  //     weight: 78.5, // Вес, кг
  //     size: "985x395x808", // Размеры
  //     freon: "R410A", // Фреон
  //     compressorModel: "GMCC",
  //   }
  // },

];
