// Custom element's class

class InputPlusMinus extends HTMLElement {

  constructor() {
    super();

    const inputPlusMinus = this;

    const template = document.querySelector("#input-plus-minus-template").content;
    this.attachShadow({mode: "open"}).appendChild(template.cloneNode(true));

    const container = this.shadowRoot.querySelector("#container");
    const plus_button = this.shadowRoot.querySelector("#plus");
    const minus_button = this.shadowRoot.querySelector("#minus");
    const count_textbox = this.shadowRoot.querySelector("#countInput");

    this.setAttribute("value", "1");
    this.setAttribute("data-value", "1");

    plus_button.addEventListener("click", () => {
      const current = +count_textbox.value;
      count_textbox.value = current + 1;
      this.setAttribute("value", count_textbox.value);
      this.setAttribute("data-value", count_textbox.value);
    });

    minus_button.addEventListener("click", () => {
      const current = +count_textbox.value;
      if (current > 1) {
        count_textbox.value = current - 1;
        this.setAttribute("value", count_textbox.value);
        this.setAttribute("data-value", count_textbox.value);
      }
    });



    // Отслеживание изменения аттрибута value
    function handlerCountText () {
      count_textbox.value = inputPlusMinus.getAttribute("value");
    };

    let observer = new MutationObserver(handlerCountText);
    observer.observe(inputPlusMinus, {
      attributes: true,
    });


    container.setAttribute("style", `
      display: flex;
      align-items: center;
      height: 30px;
      border: 2px solid #bce8f1;
      padding: 5px;
      border-radius: 22px;
      `);

    const mQueryMobile = window.matchMedia('(max-width: 768px)');
    if (mQueryMobile.matches) {

      container.setAttribute("style", `
      display: flex;
      align-items: center;
      height: 25px;
      border: 2px solid #bce8f1;
      padding: 5px;
      border-radius: 22px;
      `);
    };

    count_textbox.setAttribute("style", `
      width: 35px;
      text-align: center;
      border: none;
      outline: none;
      height: 100%;
      font-size: 18px;
      `);


    if (mQueryMobile.matches) {

      count_textbox.setAttribute("style", `
      width: 30px;
      text-align: center;
      border: none;
      outline: none;
      height: 100%;
      font-size: 16px;
      `);

    }


    [plus_button, minus_button].forEach(button => {
      button.setAttribute("style", `
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      height: 100%;
      background-color: transparent;
      cursor: pointer;
      `);

      button.addEventListener("mousedown", () => {
        button.style.opacity = "0.5";
      });

      button.addEventListener("mouseup", () => {
        button.style.opacity = "1";
      });

    });


  }
};


customElements.define("input-plus-minus", InputPlusMinus);
