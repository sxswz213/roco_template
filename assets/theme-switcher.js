(function () {
  const storageKey = "roco-theme";
  const selector = document.getElementById("theme-select");
  const savedTheme = localStorage.getItem(storageKey);
  const initialTheme = savedTheme || document.body.dataset.theme;

  function applyTheme(theme) {
    document.body.dataset.theme = theme;
    localStorage.setItem(storageKey, theme);

    if (selector) {
      selector.value = theme;
    }
  }

  if (initialTheme) {
    applyTheme(initialTheme);
  }

  if (selector) {
    selector.addEventListener("change", function () {
      applyTheme(this.value);
    });
  }
})();
