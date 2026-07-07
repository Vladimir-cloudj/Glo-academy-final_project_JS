export const initModal = () => {
  const modalTriggers = document.querySelectorAll(
    ".modal-trigger, .callback-btn",
  );
  const modal = document.querySelector(".modal-callback");
  const overlay = document.querySelector(".modal-overlay");
  const modalClose = modal?.querySelector(".modal-close");

  if (!modal || !overlay) return;

  const openModal = (e) => {
    if (e) e.preventDefault();
    modal.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "";
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
