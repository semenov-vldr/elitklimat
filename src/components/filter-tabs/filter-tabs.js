
function filterTabsCards () {
  const filterTabsBlock = document.querySelector(".filter-tabs");
  if (!filterTabsBlock) return;

  const filterTabsList = filterTabsBlock.querySelectorAll(".filter-tabs__list");
  const productGrid = document.querySelector(".products__grid")
  const listOfRenderedCards = Array.from( productGrid.querySelectorAll(".card") );
  const tabsListCompany = filterTabsBlock.querySelector(".filter-tabs__list--company");
  const filterTabsTitle = filterTabsBlock.querySelectorAll(".filter-tabs__title");
  const tabsListArea = filterTabsBlock.querySelector(".filter-tabs__list--area");

  // Динамическое добавление табов компаний и сортировка их по алфавиту
  const uniqueCompanyNames = [...new Set(listOfRenderedCards.map(renderedCard => renderedCard.dataset.company))].sort((a, b) => {
    return a.localeCompare(b);
  });

  uniqueCompanyNames.forEach(companyName => {
    const tagLi = document.createElement("li");
    tagLi.classList.add("filter-tabs__item");
    tagLi.dataset.company = companyName;
    tagLi.textContent = companyName;
    tabsListCompany.appendChild(tagLi);
  });

  // Динамическое добавление табов площади помещения
  const uniqueAreaValues = [...new Set(listOfRenderedCards.map(renderedCard => +renderedCard.dataset.area))].sort((a, b) => a - b);
  const tabsAreaMinMax = Array.from( tabsListArea.querySelectorAll(".filter-tabs__item[data-area-min]") );

  let uniqueAreaTabs = new Set();
  uniqueAreaValues.forEach(areaValue => {
    tabsAreaMinMax.forEach(tabAreaMinMax => {
      const dataMinArea = +tabAreaMinMax.dataset.areaMin;
      const dataMaxArea = +tabAreaMinMax.dataset.areaMax;
      if (areaValue >= dataMinArea && areaValue <= dataMaxArea) {
        uniqueAreaTabs.add(tabAreaMinMax);
      }
    });
  });
  uniqueAreaTabs.forEach(areaTab => areaTab.classList.add("filter-tab-current"));


  // Счетчик общего кол-ва карточек нак странице
  document.querySelector(".products__title-count").textContent = listOfRenderedCards.length;

  // Добавление активного класса к табам для их активации
  const classFilterActive = "js-filter-active";
  filterTabsList.forEach(tabList => {
    const filterTabs = tabList.querySelectorAll(".filter-tabs__item");
    filterTabs[0].classList.add(classFilterActive);
    filterTabs.forEach(filterTab => {
      filterTab.addEventListener("click", () => {
        filterTabs.forEach(tab => tab.classList.remove(classFilterActive));
        filterTab.classList.toggle(classFilterActive);
      });
    });
  });


  // Показ/скрытие фильтров по клику на заголовок
  filterTabsTitle.forEach(title => {
    if (title.classList.contains("filter-tabs__title--company")) {
      title.classList.add("filter-visible");
    }
    title.addEventListener("click", () => {
      title.classList.toggle("filter-visible");
    });
  });


  // Отрисовка отфильтрованных карточек
  const filterTabs = filterTabsBlock.querySelectorAll(".filter-tabs__item");
  const classHiddenCard = "js-card-hidden";

  function handlerFilterTabs () {
    const tabCompanyTarget = filterTabsBlock.querySelector(".filter-tabs__item[data-company].js-filter-active").dataset.company;
    const tabInverterTarget = filterTabsBlock.querySelector(".filter-tabs__item[data-type].js-filter-active").dataset.type;
    const tabAreaTarget = filterTabsBlock.querySelector(".filter-tabs__item[data-area].js-filter-active");
    const tabAMinAreaTarget = +tabAreaTarget.dataset.areaMin;
    const tabAMaxAreaTarget = +tabAreaTarget.dataset.areaMax;

    listOfRenderedCards.forEach(renderedCard => {
      const dataAreaRenderedCard = +renderedCard.dataset.area;

      const checkCompliance = (
        (renderedCard.dataset.company === tabCompanyTarget || tabCompanyTarget === "all")
        && (renderedCard.dataset.type === tabInverterTarget || tabInverterTarget === "all")
        && (dataAreaRenderedCard >= tabAMinAreaTarget && dataAreaRenderedCard <= tabAMaxAreaTarget
        || tabAreaTarget.dataset.area === "all")
        );

      if ( checkCompliance) {
        renderedCard.classList.remove(classHiddenCard);
      } else {
        renderedCard.classList.add(classHiddenCard);
      }
    });
    emptyCardCheck();
  };

  filterTabs.forEach(filterTab => filterTab.addEventListener("click", handlerFilterTabs));


  // Проверка на пустой список карточек по причине несоответствия фильтру
  function emptyCardCheck () {
    const hasCards = listOfRenderedCards.every(card => card.classList.contains(classHiddenCard));
    if (hasCards) {
      const messageAboutEmptiness = document.createElement("span");
      messageAboutEmptiness.classList.add("message-empty");
      messageAboutEmptiness.textContent = "По указанным параметрам товар не найден.";
      if (!productGrid.querySelector(".message-empty")) {
        productGrid.appendChild(messageAboutEmptiness);
      }
    } else {
      productGrid.querySelectorAll(".message-empty").forEach(el => el.remove());
    }
  };

  // Сортировка
  const filterSortingSelect = filterTabsBlock.querySelector(".filter-tabs__sorting select");
  filterSortingSelect.addEventListener("change", () => sortingCards(filterSortingSelect) );

  if (filterSortingSelect) window.addEventListener("load", () => sortingCards(filterSortingSelect) );


};
