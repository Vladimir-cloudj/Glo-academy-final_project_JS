export const initModal = () => {
  const modalTriggers = document.querySelectorAll(
    ".modal-trigger, .callback-btn, .button-services",
  );
  const modal = document.querySelector(".modal-callback");
  const overlay = document.querySelector(".modal-overlay");
  const modalClose = modal?.querySelector(".modal-close");

  if (!modal || !overlay) return;

  const openModal = (e) => {
    if (e) e.preventDefault();

    const scrollY = window.scrollY;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";

    modal.style.display = "block";
    overlay.style.display = "block";
  };

  const closeModal = () => {
    modal.style.display = "none";
    overlay.style.display = "none";

    const scrollY = document.body.style.top;
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", openModal);
  });

  const serviceLinks = document.querySelectorAll(
    ".services-elements .fancyboxModal",
  );
  serviceLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openModal();
    });
  });

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });
};
