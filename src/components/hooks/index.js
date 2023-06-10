import { useEffect } from "react";
export default function SrollPosition(selector) {
  //   const dispatch = useDispatch();
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 100) {
        console.log(scrollY);
      } else {
        console.log(scrollY);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }, []);
}
