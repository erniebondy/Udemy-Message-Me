// From ChatGPT
//import $ from "jquery";
//window.$ = window.jQuery = $;

// 1) Make jQuery global ASAP
import jq from "jquery";
window.$ = window.jQuery = jq;
globalThis.$ = jq;            // extra-safe
globalThis.jQuery = jq;       // extra-safe

import "@hotwired/turbo-rails"
import "./controllers"

//import "fomantic-ui-css/semantic.min.js";
import "fomantic-ui-css/semantic.min.css";

// 4) Load Fomantic JS only after jQuery is guaranteed to exist
document.addEventListener("turbo:load", async () => {
  // if something wiped it out, set again
  if (!window.jQuery) {
    const { default: $ } = await import("jquery");
    window.$ = window.jQuery = $;
    globalThis.$ = $;
    globalThis.jQuery = $;
  }

  // Dynamically import Fomantic's JS now that jQuery is global
  await import("fomantic-ui-css/semantic.min.js");

  // Initialize components
  $('.ui.dropdown').dropdown();
  $('.ui.accordion').accordion();
  $('.ui.checkbox').checkbox();
});

