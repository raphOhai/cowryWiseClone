export const ClickedMenue = () => {
  let elements = document.querySelectorAll(".dashes");
  let menue = document.querySelector(".menueBox");
  const menueItem = document.getElementById("menu");
  const lastItem = document.getElementById("MenuMinorText2");
  console.log(menueItem);
  const add = () => {
    menueItem.classList.add("addtoDom");
  };

  for (const element of elements) {
    if (element.classList.contains("rotateStrock")) {
      element.classList.remove("rotateStrock");
      menue.classList.remove("showMenue");
    } else {
      element.classList.add("rotateStrock");
      menue.classList.add("showMenue");
    }
  }

  if (elements[0].classList.contains("rotateStrock")) {
    menueItem.classList.replace("meMenueBoxItem", "addtoDom");
    lastItem.classList.replace("meMenueBoxItem", "addtoDom");
  } else {
    menueItem.classList.replace("addtoDom", "meMenueBoxItem");
    lastItem.classList.replace("addtoDom", "meMenueBoxItem");
  }
  //    menue.classList.add("rotateStrock")
};

export const blueHeader = () => {
  let element = document.querySelector(".headerBox");
  if (element.classList.contains("fixedNonColeredHeader")) {
    element.classList.remove("fixedNonColeredHeader");
  }

  element.classList.add("fixedColoredHeader");
};

export const whiteHeader = () => {
  let element = document.querySelector(".headerBox");
  if (element.classList.contains("fixedColoredHeader")) {
    element.classList.remove("fixedColoredHeader");
  }
  element.classList.add("fixedNonColeredHeader");
};

export const removeAllHeaderStyles = () => {
  let element = document.querySelector(".headerBox");
  if (element.classList.contains("fixedColoredHeader")) {
    element.classList.remove("fixedColoredHeader");
  }

  if (element.classList.contains("fixedNonColeredHeader")) {
    element.classList.remove("fixedNonColeredHeader");
  }
};
