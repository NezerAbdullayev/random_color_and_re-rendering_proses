import { useAppContext } from "./contexts/context";
import RenderIf from "./RenderIf";

export const randomColors = () => {
  const randomColor = () => Math.floor(Math.random() * 255 + 1);
  let r = randomColor();
  let g = randomColor();
  let b = randomColor();
  return `rgb(${r},${g},${b})`;
};

export const ChildrenA = () => {
  const { state } = useAppContext();
  const listElements = state?.elements || [];

  console.log("re-rendering AA");

  return (
    <div style={{ margin: "8px 0" }}>
      <div style={{ background: "cyan" }}>A Component</div>

      <RenderIf condition={listElements.length > 0}>
        {listElements.map((item) => (
          <div key={item} style={{ color: randomColors() }}>
            context elements - {item}
          </div>
        ))}
      </RenderIf>
    </div>
  );
};
