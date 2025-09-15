import "@hotwired/turbo-rails"  // enables turbo:load / turbo:render events
import "jquery";                // UMD build attaches to window as jQuery/$
import "fomantic-ui";           // reads window.jQuery
import "channels"               // loads the subscription above
                                // OR: import "channels/chatroom_channel" directly

function initUI() {
  const $ = window.jQuery || window.$;
  if (!$) { console.warn("jQuery not found"); return; }

  $('.ui.dropdown').dropdown();
  $('.ui.accordion').accordion();
  $('.ui.checkbox').checkbox();

  console.log("UI initialized");

}

// First load and subsequent Turbo renders (back/forward cache)
document.addEventListener("turbo:load", initUI);
document.addEventListener("turbo:render", initUI);

console.log("application.js loaded");

$(document).on('turbo:load', function() {
  /** Scroll to bottom */
  var scroll_bottom = function() {
    if( $("#messages").length > 0 ) {
      $("#messages").scrollTop($("#messages")[0].scrollHeight);
    }
  }

  /** Clear text box */
  var submit_message = function() {
    $("#message_body").on("keydown", function(e) {
      if(e.keycode == 13) {
        //$("button").click();
      }
    });
  }

  scroll_bottom();
  //submit_message();
  
  $('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
  });


})
