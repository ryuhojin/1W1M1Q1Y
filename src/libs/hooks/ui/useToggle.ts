import { useCallback, useState } from "react";

const useToggle = (init: boolean = false) => {
    
  const [state, setState] = useState(init);

  const onToggle = useCallback(() => {
    setState((state) => !state);
  }, []);

  return [state, onToggle] as [boolean, typeof onToggle];
};
export default useToggle;
