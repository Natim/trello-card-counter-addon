/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
function showCounters() {
  var list = document.getElementsByClassName("list-header-num-cards");
  if (list === null) setTimeout(showCounters, 100);
  for (var i = 0; i < list.length; i++) {
    if (list[i].classList.contains("hide")) {
      list[i].classList.remove("hide");
    }
  }
}

function setupObserver() {
  console.debug('Init observers');
  var observer = new MutationObserver(function(mutations) {
    console.debug("Mutation detected on num cards headers");
    showCounters();
  });
  var list = document.querySelector('.list-header-num-cards');
  if (list === null) setTimeout(setupObserver, 100);
  observer.observe(list, {
    attributes: true,
    characterData: true
  });
}

self.port.on("setupObserver", setupObserver);
self.port.on("cardCounterRefresh", showCounters);
