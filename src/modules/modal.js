export const initModal = () => {
  const modalTriggers = document.querySelectorAll(".callback-btn");
  const modal = document.querySelector(".modal-callback");
  const overlay = document.querySelector(".modal-overlay");
  const modalClose = modal?.querySelector(".modal-close");

  const openModal = (event) => {
    event.preventDefault();

    if (modal && overlay) {
      modal.style.display = "block";
      overlay.style.display = "block";
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    if (modal && overlay) {
      modal.style.display = "none";
      overlay.style.display = "none";
      document.body.style.overflow = "";
    }
  };

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", openModal);
  });

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (overlay) {
    overlay.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.style.display === "block") {
      closeModal();
    }
  });
};
