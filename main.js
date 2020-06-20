"use strict";
let app_placeholder = document.getElementsByClassName(
  "pp_pic_holder light_square"
)[0];

if (app_placeholder != null) {
  let app_iframe = app_placeholder.getElementsByTagName("iframe")[0];
  let app_document = app_iframe.contentDocument;

  let start_btn = app_document.getElementById("start_btn");

  start_btn.addEventListener("click", setInterval(hider, 1000), false);
}

//hands.hidden = true;
//key_board.hidden = true;
let hider = () => {
  let app_placeholder = document.getElementsByClassName(
    "pp_pic_holder light_square"
  )[0];
  if (app_placeholder != null) {
    let app_iframe = app_placeholder.getElementsByTagName("iframe")[0];
    let app_document = app_iframe.contentDocument;
    let hands = app_document.getElementById("hands");
    let key_board = app_document.getElementById("virtual_keyboard");
    if (hands != null) hands.hidden = true;
    if (key_board != null) key_board.hidden = true;
  }
};
