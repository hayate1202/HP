document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // MOBILE MENU
  // =========================

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");

      menuToggle.classList.toggle("is-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // メニュー内のリンクをクリックしたら閉じる
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    // Escapeキーで閉じる
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        nav.classList.remove("is-open");
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });

  }

  // =========================
  // COPYRIGHT YEAR
  // =========================

  const yearElements = document.querySelectorAll(".current-year");

  yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  // =========================
  // CONTACT FORM
  // =========================

  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  if (contactForm && formMessage) {

    contactForm.addEventListener("submit", event => {

      event.preventDefault();

      if (!contactForm.reportValidity()) {
        return;
      }

      const formData = new FormData(contactForm);

      const name = formData.get("name");
      const company = formData.get("company");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const subject = formData.get("subject");
      const message = formData.get("message");

      const confirmation = [
        "【入力内容】",
        "",
        "お名前：" + name,
        "会社名：" + (company || "未入力"),
        "メールアドレス：" + email,
        "電話番号：" + (phone || "未入力"),
        "お問い合わせ内容：" + subject,
        "",
        "詳細：",
        message,
        "",
        "※現在、このフォームには送信機能が接続されていません。"
      ].join("\n");

      formMessage.textContent =
        "入力内容を確認しました。現在は送信機能が未接続のため、お電話にてお問い合わせください。";

      console.log(confirmation);

    });

  }

});
