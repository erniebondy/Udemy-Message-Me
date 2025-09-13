// // Initialize components
// $('.ui.dropdown').dropdown();
// $('.ui.accordion').accordion();
// $('.ui.checkbox').checkbox();

// $('.message .close').on('click', function() {
//   $(this).closest('.message').transition('fade');
// });

// console.log("HERHEHREHHRE")
import "@hotwired/turbo-rails"     // enables turbo:load / turbo:render events
import "jquery";        // UMD build attaches to window as jQuery/$
import "fomantic-ui";   // reads window.jQuery
import "channels"                 // loads the subscription above
// OR: import "channels/chatroom_channel" directly

function initUI() {
  const $ = window.jQuery || window.$;
  if (!$) { console.warn("jQuery not found"); return; }

  $('.ui.dropdown').dropdown();
  $('.ui.accordion').accordion();
  $('.ui.checkbox').checkbox();

  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });

  console.log("UI initialized");
}

// First load and subsequent Turbo renders (back/forward cache)
document.addEventListener("turbo:load", initUI);
document.addEventListener("turbo:render", initUI);

// Optional: prove the file itself executed
console.log("application.js loaded");

