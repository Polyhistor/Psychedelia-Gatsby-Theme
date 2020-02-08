import { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";

export const useOnClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement>,
  handler: Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    const listener = () => {
      if (!ref.current) {
        return;
      }
      handler(true);
    };

    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
