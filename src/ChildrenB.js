const cStyle = { background: "cyan" };
import { useAppContext } from "./contexts/context";
import RenderIf from "./RenderIf";

export const ChildrenB = () => {
  const { state } = useAppContext();
  const deltedItems = state?.deletedItems || [];
  console.log("re-rendering BB");

  return (
    <div>
      <div style={cStyle}>
        <strong>B -component</strong>
      </div>

      <RenderIf condition={deltedItems.length > 0}>
        {deltedItems.map((item) => (
          <div key={item}>DELTED ITEM==> {item}</div>
        ))}
      </RenderIf>
    </div>
  );
};
