import $ from "jquery/dist/jquery";
import util from "./src/js/util.js";
import collapse from "./src/js/collapse.js";
import dropdown from "./src/js/dropdown.js";
import tooltip from "./src/js/tooltip.js";

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
})