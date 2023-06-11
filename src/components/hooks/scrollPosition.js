import { useEffect } from "react";
import useWindowSize from "./viewPortWidth";
import {
  blueHeader,
  removeAllHeaderStyles,
  whiteHeader,
} from "./menueAnimation";
export default function HeaderStyle(selector) {
  //   const dispatch = useDispatch();
  const windowSize = useWindowSize();
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 200) {
        if (windowSize.width < 830) {
          blueHeader();
        } else {
          whiteHeader();
        }
      } else {
        removeAllHeaderStyles();
      }
    };

    window.addEventListener("scroll", changeBackground);
  }, [windowSize]);
  // return(window.scrollY)
}
