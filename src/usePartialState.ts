import { Dispatch, useState } from "react";

function usePartialState<S>(initialState: S): [S, Dispatch<Partial<S>>] {
  const [state, setState] = useState(initialState);

  const patchState = (patch: Partial<S>) =>
    setState((prevState) => ({ ...prevState, ...patch }));

  return [state, patchState];
}

export default usePartialState;
