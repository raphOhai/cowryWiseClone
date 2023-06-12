
import { useEffect } from "react";
export default function Animate(selector,) {
//   const dispatch = useDispatch();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
          // dispatch(reverse());
        }
      });
    });
    const hiddenElements = document.querySelectorAll("."+selector);

    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
}
