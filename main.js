"use strict";

let isTypingContentExist = () => {
  return !!document.getElementById("typing_content") ? true : false;
};

let isExampleContainerExist = () => {
  return isTypingContentExist()
    ? document
        .getElementById("typing_content")
        .contentDocument.getElementById("example_container")
      ? true
      : false
    : false;
};
let isHandsExist = () => {
  return isTypingContentExist()
    ? document
        .getElementById("typing_content")
        .contentDocument.getElementById("hands")
      ? true
      : false
    : false;
};
let isKeyBoardExist = () => {
  return isTypingContentExist()
    ? document
        .getElementById("typing_content")
        .contentDocument.getElementById("virtual_keyboard")
      ? true
      : false
    : false;
};

let makeProgressBarHidden = () => {
  if (isExampleContainerExist()) {
    let progressBar = document
      .getElementById("typing_content")
      .contentDocument.getElementById("progress_bar");

    progressBar.hidden = true;
  }
};

let makeAdHidden = () => {
  if (isTypingContentExist()) {
    let Ad = document
      .getElementById("typing_content")
      .contentDocument.getElementsByTagName("iframe")[0];
    Ad.style.visibility = "hidden";
  }
};

let makeHandsHidden = () => {
  if (isHandsExist()) {
    let hands = document
      .getElementById("typing_content")
      .contentDocument.getElementById("hands");
    hands.hidden = true;
  }
};

let makeKeyBoardHidden = () => {
  if (isKeyBoardExist()) {
    let hands = document
      .getElementById("typing_content")
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
