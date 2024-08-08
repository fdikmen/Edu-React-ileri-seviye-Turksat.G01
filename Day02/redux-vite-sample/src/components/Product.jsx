import { useSelector, useDispatch } from "react-redux";

export default function Product() {
  const currentState = useSelector((state) => state);
  console.log("Product currentState:", currentState);

  const dispatch = useDispatch();
  const addProduct = () => {
    dispatch({
      type: "ADD",
      payload: { id: 4, name: "Product 04" },
    });
  };
  return (
    <div>
      Product
      <ul>
        {currentState.product.map((item) => (
          <li key={item.id}>
            {item.id}.{item.name}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}
