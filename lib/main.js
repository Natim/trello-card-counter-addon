// Import the page-mod API
var pageMod = require("sdk/page-mod");

// Import the self API
var self = require("sdk/self");
var tabs = require('sdk/tabs');
 
// Create a page mod
pageMod.PageMod({
  include: "https://trello.com/b/*",
  contentScriptFile: self.data.url("trello-counter.js"),
  onAttach: function(worker) {
    worker.port.emit("setupObserver");
    worker.port.emit("cardCounterRefresh");
    tabs.on('activate', function () {
      worker.port.emit("cardCounterRefresh");
    });
  }
});
