import { useEffect } from "react";
import SrollPosition from "./scrollPosition";
import useWindowSize from "./viewPortWidth";
export default function HeaderDynamicStyle(selector) {
  //   const dispatch = useDispatch();
  const position = SrollPosition()
  const windowSize = useWindowSize()
  useEffect(() => {
    // console.log(position)
    // console.log(windowSize.width)
       

   
  }, [position, windowSize]);
}
