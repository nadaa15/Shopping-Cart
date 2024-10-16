const cart = document.querySelector(".cart")


let cartProducts = JSON.parse(localStorage.getItem("products")) || [];

function calculateTotalPrice() {
  let totalPrice = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  console.log(totalPrice);
  return totalPrice
}


//! Display cart items
function displayCart() {
  if (cartProducts.length === 0) {
    cart.innerHTML = `
      <div class="flex flex-col justify-center items-center gap-4 mt-32">
        <h2 class="text-center text-xl font-semibold rounded-xl py-6">You didn't add any items</h2>
        <a href="index.html" class="text-white bg-purple-500 px-4 py-2 rounded-md hover:bg-purple-800 transition-all">Add items</a>
      </div>`;
  } else {
    let cartItems = cartProducts
      .map(
        (product) => `
        <div><p class="total-price text-end mb-10 text-purple-600 font-semibold"></p></div>
        <div class="flex flex-wrap justify-center items-center gap-16 border-b-2 border-b-gray-200 py-5" data-id="${
          product.id
        }">
          <img class="w-28" src=${product.image} alt="">
          <div class="title">
            <h3 class="font-semibold mb-3">${product.title
              .split(" ")
              .slice(0, 3)
              .join(" ")}...</h3>
            <span class="text-xl font-bold">#${product.id}</span>
          </div>
          <div class="flex justify-center items-center gap-4">
            <button class="decrement-btn" onclick="decrimentQuantity(${
              product.id
            })"><i class="fa-solid fa-minus-circle text-purple-700"></i></button>
            <p>${product.quantity}</p>
            <button class="increment-btn" onclick="incrementQuantity(${
              product.id
            })"><i class="fa-solid fa-plus-circle text-purple-700"></i></button>
          </div>
          <p class="text-xl font-bold">$${product.price}</p>
          <button class="delete-btn" onclick="deleteProduct(${
            product.id
          })"><i class="fa-solid fa-xmark-square fa-xl text-red-700"></i></button>
        </div>
      `
      )
      .join("");
    
    cart.innerHTML = cartItems;
    const productsTotalPrice = document.querySelector(".total-price");
    productsTotalPrice.textContent = `Total price: $${calculateTotalPrice()}`;
    calculateTotalPrice();
  }
}
displayCart()

//! Delete items from cart

function deleteProduct(id) {
  cartProducts = cartProducts.filter((product) => product.id != id);
  localStorage.setItem("products", JSON.stringify(cartProducts));
  displayCart();
  calculateTotalPrice();
}

//! Update product quantity

function incrementQuantity(id) {
  cartProducts.forEach(product => {
    if (product.id == id) {
      product.quantity ++;
      localStorage.setItem("products", JSON.stringify(cartProducts));
      displayCart();
      calculateTotalPrice()
    }
  });
}

function decrimentQuantity(id) {
  cartProducts.forEach((product) => {
    if (product.id == id) {
      product.quantity --;
      if (product.quantity == 0) {
        deleteProduct(id)
      } else {
        localStorage.setItem("products", JSON.stringify(cartProducts));
        displayCart();
        calculateTotalPrice()
      }
    }
  });
}





