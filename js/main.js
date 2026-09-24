document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav a[data-page]").forEach(link => {
    const href = link.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});

  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

  document.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href === path) return;
      e.preventDefault();
      document.body.classList.add("page-leaving");
      setTimeout(() => { window.location.href = href; }, 180);
    });
  });

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("お問い合わせを受け付けました。（デモサイトのため送信処理はありません）");
    });
  }
});
