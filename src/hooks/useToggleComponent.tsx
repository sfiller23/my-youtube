import { useState } from "preact/hooks";

export const useToggleComponent = () => {
  const [toggleComponent, setToggleComponent] = useState<boolean>(false);
  return [toggleComponent, setToggleComponent];
};
