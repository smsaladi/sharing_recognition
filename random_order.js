// 
// A bit of code to randomize elements within a page
// The call corresponds to the ECAG page on eLife's website.
//
// Author: Shyam Saladi (saladi@caltech.edu)
// Date: April 2019
// License: CC0 - “No Rights Reserved” (i.e. Public Domain)
//

function randomize_order(elems) {
  elems.forEach(function (e) {
      var swap_idx = Math.floor(Math.random() * elems.length);
      e.parentNode.insertBefore(elems[swap_idx], e);
  });
}

randomize_order(
    window.document.querySelectorAll('li.about-profiles__item')
);