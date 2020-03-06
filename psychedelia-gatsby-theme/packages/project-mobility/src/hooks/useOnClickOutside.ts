import { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";

export const useOnClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement>,
  handler: Dispatch<SetStateAction<boolean>>
) => {
  console.log(ref);

  useEffect(() => {
    const listener = event => {
      if (ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
