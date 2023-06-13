import { useEffect } from "react";
import { useDispatch } from "react-redux";
export default function InterSectionChecker(selector, action, revarseAction) {
  const dispatch = useDispatch();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
           dispatch(action());
        } else {
           dispatch(revarseAction());
        }
      });
    });
    const hiddenElements = document.querySelectorAll("." + selector);

    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
}
