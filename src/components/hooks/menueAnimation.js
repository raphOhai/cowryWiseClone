export const ClickedMenue = () => {
  let elements = document.querySelectorAll(".dashes");
  for (const element of elements) {
    if (element.classList.contains("rotateStrock")) {
      element.classList.remove("rotateStrock");
    } else {
      element.classList.add("rotateStrock");
    }
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
