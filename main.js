(function () {
  var list = document.getElementById("offers-list");
  if (!list || !window.SHOWCASE_OFFERS) return;

  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }

  list.innerHTML = window.SHOWCASE_OFFERS.map(function (o) {
    var logoHtml = o.logo
      ? '<img class="offer-card__logo" src="' + esc(o.logo) + '" alt="" loading="lazy" />'
      : '<span class="offer-card__logo offer-card__logo--text">' + esc(o.logoText || o.bank.slice(0, 3)) + "</span>";

    var fields = (o.fields || [])
      .map(function (f) {
        return (
          '<li class="offer-card__param">' +
          '<span class="offer-card__param-name">' +
          esc(f.key) +
          "</span>" +
          '<span class="offer-card__param-value">' +
          esc(f.value) +
          "</span></li>"
        );
      })
      .join("");

    return (
      '<li class="offer-card">' +
      '<article class="offer-card__inner">' +
      '<div class="offer-card__head">' +
      logoHtml +
      '<div class="offer-card__titles">' +
      '<p class="offer-card__bank">' +
      esc(o.bank) +
      "</p>" +
      '<h2 class="offer-card__name">' +
      esc(o.name) +
      "</h2></div></div>" +
      '<ul class="offer-card__params">' +
      fields +
      "</ul>" +
      '<a class="offer-card__btn" href="' +
      esc(o.url) +
      '" target="_blank" rel="noopener noreferrer sponsored">Оформить</a>' +
      "</article></li>"
    );
  }).join("");
})();
