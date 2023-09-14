window.addEventListener("load", () => {
  createProductProfile(productsArr);
});


function createProductProfile (products) {

  const breadcrumbs = document.querySelector(".breadcrumbs");
  if (!breadcrumbs) return;

  const breadcrumbsValue = breadcrumbs.querySelector("span.breadcrumbs__item")?.textContent;
  const productProfileTemplate = document.querySelector('#product-profile-template')?.content.querySelector('.product-profile');

  products.forEach(product => {

    if (product.title !== breadcrumbsValue) return;

    const profileItem = productProfileTemplate.cloneNode(true);
    const swiperTopWrapper = profileItem.querySelector('.product-profile__images .swiper-top .swiper-wrapper');
    const swiperThumbsWrapper = profileItem.querySelector('.product-profile__images .swiper-thumbs .swiper-wrapper');

    profileItem.querySelectorAll('.product-profile__title').forEach(title => title.textContent = product.title);

    // product.imgSrc.forEach((src, i) => {
    //   const tagImg = document.createElement("img");
    //   tagImg.classList.add("swiper-slide");
    //   tagImg.src = src;
    //   tagImg.setAttribute("data-src", tagImg.src);
    //   tagImg.setAttribute('data-fancybox', "images-index");
    //   swiperTopWrapper.appendChild(tagImg);
    //   if (i === 0) {
    //     tagImg.classList.add("product-img");
    //   }
    // });


    product.imgSrc.forEach((src, i) => {
      const tagImg = document.createElement("img");
      const divSwiperSlide = document.createElement("div");
      divSwiperSlide.classList.add("swiper-slide");
      tagImg.src = src;
      tagImg.setAttribute("data-src", tagImg.src);
      tagImg.setAttribute('data-fancybox', "images-index");
      swiperTopWrapper.appendChild(divSwiperSlide);
      divSwiperSlide.appendChild(tagImg);
      if (i === 0) {
        tagImg.classList.add("product-img");
      }
    });

    product.imgSrc.forEach((src) => {
      const tagImg = document.createElement("img");
      tagImg.classList.add("swiper-slide");
      tagImg.src = src;
      swiperThumbsWrapper.appendChild(tagImg);
    });

    // Характеристики
    const properties = profileItem.querySelector('.product-profile__properties');
    properties.querySelector('.area-value').textContent = product.area;
    properties.querySelector('.inverter').textContent = `${product.inverter ? "Да" : "Нет"}`;
    properties.querySelector('.cooling-performance').textContent = product.cooling.performance;
    properties.querySelector('.cooling-powerConsumption').textContent = product.cooling.powerConsumption;
    properties.querySelector('.heating-performance').textContent = product.heating.performance;
    properties.querySelector('.heating-powerConsumption').textContent = product.heating.powerConsumption;
    properties.querySelector('.powerSupply').textContent = product.powerSupply;
    properties.querySelector('.maxTrackLength').textContent = product.maxTrackLength;
    properties.querySelector('.maxHeightDifference').textContent = product.maxHeightDifference;
    properties.querySelector('.liquidPipeDiameter').textContent = product.liquidPipeDiameter;
    properties.querySelector('.gasPipeDiameter').textContent = product.gasPipeDiameter;
    properties.querySelector('.gasPipeDiameter').textContent = product.gasPipeDiameter;
    // ---Вставить Модель компрессора---

    // Внутренний блок
    properties.querySelector('.indoorUnit-noise').textContent = product.indoorUnit.noise;
    properties.querySelector('.indoorUnit-weight').textContent = product.indoorUnit.weight;
    properties.querySelector('.indoorUnit-size').textContent = product.indoorUnit.size;

    // Внешний блок
    properties.querySelector('.outdoorUnit-noise').textContent = product.outdoorUnit.noise;
    properties.querySelector('.outdoorUnit-weight').textContent = product.outdoorUnit.weight;
    properties.querySelector('.outdoorUnit-size').textContent = product.outdoorUnit.size;
    properties.querySelector('.outdoorUnit-freon').textContent = product.outdoorUnit.freon;

    profileItem.querySelectorAll('.product-price').forEach(price => price.textContent = `${product.price.toLocaleString("ru")} ₽`)
    profileItem.querySelector('.product-profile__desc-text').textContent = product.description;
    profileItem.querySelector(".meta-price").content = product.price;

    breadcrumbs.insertAdjacentElement('afterEnd', profileItem);
  });

  const productProfile = document.querySelector('.product-profile');

  if (productProfile) {
    setTimeout(() => createProductProfileSlider(productProfile), 100);

    const descText = productProfile.querySelector(".product-profile__desc-text");
    const showMoreBtn = productProfile.querySelector(".product-profile__desc-show-more-btn");

// Кнопка "Показать больше" для описания
    showMoreBtn.addEventListener("click", () => {
      descText.classList.add("js-show-more");
    });
  }
  handlerCart();
};



// Слайдер с миниатюрами
function createProductProfileSlider (productProfile) {

  const swiperTop = productProfile.querySelector('.swiper-top');
  const swiperThumbs = productProfile.querySelector('.swiper-thumbs');

  let swiper__thumbs = new Swiper(swiperThumbs, {
    spaceBetween: 28,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    initialSlide: 0,
  });

  let swiper__top = new Swiper(swiperTop, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 0,
    thumbs: {
      swiper: swiper__thumbs,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });
};

