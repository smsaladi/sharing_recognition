// 
// A bit of code to randomize elements "every XX" time period.
// This might be nice to keep things changing but consistant, e.g. upon
// a refresh of a page.
// The call corresponds to the ECAG page on eLife's website.
//
// Author: Shyam Saladi (saladi@caltech.edu)
// Date: April 2019
// License: CC0 - “No Rights Reserved” (i.e. Public Domain)
//

function getSeed(period = "hour") {
    var millisec = new Date().valueOf();
    var hours = Math.floor(millisec / 3.6e6);
    if (period == "hour")
        return hours;
    else
        return Math.floor(hours / 24);
}

var seed = getSeed();
function random() {
    // Just like Math.random, returns a value between 0 and 1
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

function randomize_order(elems) {
  elems.forEach(function (e) {
      var swap_idx = Math.floor(random() * elems.length);
      e.parentNode.insertBefore(elems[swap_idx], e);
  });
}

randomize_order(
    window.document.querySelectorAll('li.about-profiles__item')
);