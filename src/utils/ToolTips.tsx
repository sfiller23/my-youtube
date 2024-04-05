import { Tooltip } from "react-tooltip";

const ToolTips = () => {
  const TOOLTIPS: string[] = ["settings", "search", "voiceSearch"];
  return (
    <>
      {TOOLTIPS.map((id, index) => (
        <Tooltip style={{ zIndex: "999" }} id={id} key={index} noArrow />
      ))}
    </>
  );
};

export default ToolTips;
