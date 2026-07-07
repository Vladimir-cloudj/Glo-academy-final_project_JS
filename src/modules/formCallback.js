export const formCallback = () => {
  const form = document.querySelector('form[name="form-callback"]');

  const nameInput = form.querySelector('[name="fio"]');
  const phoneInput = form.querySelector('[name="tel"]');
  const submitBtn = form.querySelector(".feedback");

  const statusBlock = document.createElement("div");
  statusBlock.className = "form-status";
  statusBlock.style.cssText = `
    margin-top: 15px;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    display: none;
    border-radius: 4px;
  `;
  form.appendChild(statusBlock);

    nameInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-ЯёЁa-zA-Z\s]/g, "");
    });

  phoneInput.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^0-9+]/g, "");
  });

  const showStatus = (message, type) => {
    statusBlock.textContent = message;
    statusBlock.style.display = "block";

    switch (type) {
      case "loading":
        statusBlock.style.background = "#fff3cd";
        statusBlock.style.color = "#856404";
        if (submitBtn) submitBtn.disabled = true;
        break;
      case "success":
        statusBlock.style.background = "#d4edda";
        statusBlock.style.color = "#155724";
        if (submitBtn) submitBtn.disabled = false;
        break;
      case "error":
        statusBlock.style.background = "#f8d7da";
        statusBlock.style.color = "#721c24";
        if (submitBtn) submitBtn.disabled = false;
        break;
    }
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();

    console.log("Данные:", { name, phone });

    if (!name || !phone) {
      showStatus("Пожалуйста, заполните все поля", "error");
      return;
    }

    showStatus("Идет отправка...", "loading");

    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      });

      if (!response.ok) throw new Error("Ошибка сети");

      showStatus("Заявка успешно отправлена!", "success");
      form.reset();

      setTimeout(() => {
        statusBlock.style.display = "none";
      }, 3000);
    } catch (error) {
      console.error("Ошибка:", error);
      showStatus("Ошибка при отправке", "error");
    }
  });
};
