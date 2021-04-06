import faker from "faker";

console.log("Products");

const mount = (htmlElement) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  htmlElement.innerHTML = products;

  // Mount pattern works for React as well
  // ReactDOM.render(<App />, htmlElement);
};
// To handle app running in isolation
if (process.env.NODE_ENV === "development") {
  // Assume container does not have this id
  const el = document.querySelector("#dev-products");
  if (el) {
    // Probably running in isolation
    mount(el);
  }
}

// document.querySelector("#dev-products").innerHTML = products;
export { mount };
