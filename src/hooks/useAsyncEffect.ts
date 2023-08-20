// a useEffect hook that can be used with async functions

import { DependencyList, useEffect } from "react";

const useAsyncEffect = (effect: () => Promise<void>, deps?: DependencyList) => {
  useEffect(() => {
    effect();
  }, deps);
};

export default useAsyncEffect;
