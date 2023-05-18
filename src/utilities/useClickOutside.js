import { useEffect } from "react";

const useClickOutside = (ref, cb) => {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      cb();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
};

export default useClickOutside;
