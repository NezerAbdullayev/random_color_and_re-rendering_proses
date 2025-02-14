import { useReducer, createContext, useContext } from "react";

const Context = createContext();

const actionTypes = {
  ADD_ELEMENT: "add_element",
  DELETE_ELEMENT: "delete_element",
  TOGGLE_ACTIVE: "toggle_active",
  GET_DELETED_ELEMENTS: "get_deleted_elements",
};

const initialState = {
  elements: [4, 5, 10],
  isActive: false,
  deletedItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_ELEMENT:
      return {
        ...state,
        elements: [...state.elements, action.payload],
      };

    case actionTypes.DELETE_ELEMENT: {
      const isDeletedEl = state.elements.includes(action.payload);
      return {
        ...state,
        elements: state.elements.filter((el) => el !== action.payload),
        deletedItems: isDeletedEl
          ? [...state.deletedItems, action.payload]
          : state.deletedItems,
      };
    }

    case actionTypes.TOGGLE_ACTIVE:
      return { ...state, isActive: !state.isActive };

    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

const useAppContext = () => useContext(Context);

export { Context, actionTypes, useAppContext };
export default AppProvider;
