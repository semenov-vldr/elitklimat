

handlerChat();

function handlerChat () {
  const chat = document.querySelector(".chat");
  if (!chat) return;
  const chatIcon = chat.querySelector(".chat__icon");
  const chatWrapper = chat.querySelector(".chat__wrapper");
  const closeBtn = chat.querySelector(".chat__cancel");

  const mobileWidthMediaQuery = window.matchMedia('(max-width: 768px)');

  chatIcon.addEventListener("click", () => {
    if (mobileWidthMediaQuery.matches) {
      chatWrapper.classList.toggle("js-chat-open");
      toggleBlockScrollBody();
    }
  });

  if (mobileWidthMediaQuery.matches) {

    closeBtn.addEventListener("click", () => {
      chatWrapper.classList.remove("js-chat-open");
      unblockScrollBody();
    });

    document.body.addEventListener("click", (evt) => {

      if ( chatWrapper.classList.contains("js-chat-open") && evt.target === chatWrapper ) {
        chatWrapper.classList.remove("js-chat-open");
        unblockScrollBody();
      }
    });
  }
};



