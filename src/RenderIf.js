const RenderIf = ({ condition, children }) => {
  return condition ? children : null;
};

export default RenderIf;
