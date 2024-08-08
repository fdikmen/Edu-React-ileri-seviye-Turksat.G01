import Product from "../components/Product";

/* console.log("Val01:", myStore.getState());

const myAction = {
  type: "myAction",
  payload: "myPayload",
};

myStore.dispatch(myAction);
console.log("Val02:", myStore.getState());

myStore.subscribe(() => {
  console.log("Val-subscribe:", myStore.getState());
});
myStore.dispatch(myAction);
myStore.dispatch(myAction);
myStore.dispatch(myAction);

const myAction02 = {
  type: "myAction02",
  payload: "myPayload02",
};

myStore.dispatch(myAction02);
*/
export default function App() {
  return (
    <>
      <h1>Redux Sample</h1>
      <Product />
    </>
  );
}
