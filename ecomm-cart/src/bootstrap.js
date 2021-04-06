import faker from "faker";

console.log("Cart");

const mount = (htmlElement) => {
  let cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  htmlElement.innerHTML = cartText;
};

// for (let i = 0; i < 3; i++) {
//   const name = faker.commerce.productName();
//   products += `<div>${name}</div>`;
// }

// document.querySelector("#dev-cart").innerHTML = cartText;

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  el && mount(el);
}

export { mount };
