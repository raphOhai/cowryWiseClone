import { useEffect } from "react";
import useWindowSize from "./viewPortWidth";
import {
  blueHeader,
  removeAllHeaderStyles,
  whiteHeader,
} from "./menueAnimation";
import { useDispatch } from "react-redux";
import { BlueLogo, WhiteLogo } from "../../reducer/logoColor";
export default function HeaderStyle(selector) {
  //   const dispatch = useDispatch();
  const windowSize = useWindowSize();
  const dispatch = useDispatch()
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 200) {
        if (windowSize.width < 830) {
          blueHeader();
          dispatch(WhiteLogo())
        } else {
          whiteHeader();
          dispatch(BlueLogo())
        }
      } else {
        removeAllHeaderStyles();
        dispatch(BlueLogo())

      }
    };

    window.addEventListener("scroll", changeBackground);
  }, [windowSize]);
  // return(window.scrollY)
}
