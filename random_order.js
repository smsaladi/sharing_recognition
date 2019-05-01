function randomize_order(elems) {
  elems.forEach(function (e) {
      var swap_idx = Math.floor(Math.random() * elems.length);
      e.parentNode.insertBefore(elems[swap_idx], e);
  });
}

randomize_order(
    window.document.querySelectorAll('li.about-profiles__item')
);