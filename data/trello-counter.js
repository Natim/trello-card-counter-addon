/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

self.port.on("cardCounterRefresh", function() {
  var list = document.getElementsByClassName("list-header-num-cards");
  for (var i = 0; i < list.length; i++) {
    list[i].classList.remove("hide");
  }
});
