const productInitialState = [
    { id: 1, name: "Product 01" },
    { id: 2, name: "Product 02" },
    { id: 3, name: "Product 03" },
  ];
  
  function productReducer(state = productInitialState, { type, payload }) {
    switch (type) {
      case "ADD":
        return [...state, payload]; // state.concat(action.payload)
      case "REMOVE":
        return state.filter((item) => item.id !== payload.id);
      default:
        return state;
    }
  }

    export { productReducer };