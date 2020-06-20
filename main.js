"use strict";

let isAppPlaceHolderExist = () => {
  return document.getElementsByClassName("pp_pic_holder light_square")
    .length === 1
    ? true
    : false;
};
let isAppIframeExist = () => {
  return isAppPlaceHolderExist()
    ? document
        .getElementsByClassName("pp_pic_holder light_square")[0]
        .getElementsByTagName("iframe").length === 1
      ? true
      : false
    : false;
};
let isExampleContainerExist = () => {
  return isAppIframeExist()
    ? document
        .getElementsByClassName("pp_pic_holder light_square")[0]
        .getElementsByTagName("iframe")[0]
        .contentDocument.getElementById("example_container")
      ? true
      : false
    : false;
};
let isHandsExist = () => {
  return isAppIframeExist()
    ? document
        .getElementsByClassName("pp_pic_holder light_square")[0]
        .getElementsByTagName("iframe")[0]
        .contentDocument.getElementById("hands")
      ? true
      : false
    : false;
};
let isKeyBoardExist = () => {
  return isAppIframeExist()
    ? document
        .getElementsByClassName("pp_pic_holder light_square")[0]
        .getElementsByTagName("iframe")[0]
        .contentDocument.getElementById("virtual_keyboard")
      ? true
      : false
    : false;
};

let makeProgressBarHidden = () => {
  if (isExampleContainerExist()) {
    let progressBar = document
      .getElementsByClassName("pp_pic_holder light_square")[0]
      .getElementsByTagName("iframe")[0]
      .contentDocument.getElementById("progress_bar");

    progressBar.hidden = true;
  }
};

let makeAdHidden = () => {
  if (isAppIframeExist()) {
    let Ad = document
      .getElementsByClassName("pp_pic_holder light_square")[0]
      .getElementsByTagName("iframe")[0]
      .contentDocument.getElementsByTagName("iframe")[0];
    Ad.style.visibility = "hidden";
  }
};

let makeHandsHidden = () => {
  if (isHandsExist()) {
    let hands = document
      .getElementsByClassName("pp_pic_holder light_square")[0]
      .getElementsByTagName("iframe")[0]
      .contentDocument.getElementById("hands");
    hands.hidden = true;
  }
};

let makeKeyBoardHidden = () => {
  if (isKeyBoardExist()) {
    let hands = document
      .getElementsByClassName("pp_pic_holder light_square")[0]
      .getElementsByTagName("iframe")[0]
      .contentDocument.getElementById("virtual_keyboard");
    hands.hidden = true;
  }
};

let hider = () => {
  makeAdHidden();
  makeProgressBarHidden();
  makeKeyBoardHidden();
  makeHandsHidden();
  console.log(new Date());
};

setInterval(hider, 3000);
