const dataDahatsu = [
  DAHATSU_DA_H,
  DAHATSU_DA_I,
  DAHATSU_GW_H,
  DAHATSU_DHP,
  DAHATSU_DS_I,

  DAHATSU_DH_CS_A,
  DAHATSU_DH_NP_A,
  DAHATSU_DH_KL_A,
  DAHATSU_DH_KN_CH,
];

const dataDenko = [
  DENKO_KR,
  DENKO_DU,
  DENKO_DCS_A,
];

const dataEurohoff = [
  EUROHOFF_EV,
];

const dataLG = [
  LG_Dual,
];

const dataMidea = [
  MIDEA_PARAMOUNT,
  MIDEA_PARAMOUNT_INVERTER,
  MIDEA_UNLIMITED,
];

const dataDaichi = [
  DAICHI_ICE,
  DAICHI_ICE_INVERTER,
  DAICHI_AIR,
  DAICHI_AIR_INVERTER,
];

const dataBosch = [
  BOSCH_CLIMATE_LINE_2000,
];



// Общий массив всех товаров
const productsArr = [
  dataDahatsu,
  dataDenko,
  dataEurohoff,
  dataLG,
  dataMidea,
  dataDaichi,
  dataBosch,

].flat().flat();

//productsArr = productsArr.flat()

