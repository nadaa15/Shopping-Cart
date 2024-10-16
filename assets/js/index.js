const productstable = document.querySelector(".products");
const logoutBtn = document.querySelector(".logout");
const cartItemsNum = document.querySelector("nav .cart-icon span");
const alert = document.querySelector(".alert");
console.log(alert);


let myProducts = JSON.parse(localStorage.getItem("products")) || [];
cartItemsNum.textContent = myProducts.length;

//! logout

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("userData");
  window.location.href = "signin.html";
});

//! Check user login

function checkLogin() {
  if (
    window.location.href !== "signin.html" &&
    !localStorage.getItem("userData")
  ) {
    console.log("yes");

    window.location.href = "signin.html";
  }
}
checkLogin();

//! Products array

let productsArr = [
  {
    id: 1,
    title: "AirPods Max Silver Starlight Aluminium",
    price: "549",
    image: "assets/images/airpods.png",
  },
  {
    id: 2,
    title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium ",
    price: "399",
    image: "assets/images/applewatch.png",
  },
  {
    id: 3,
    title: "Blackmagic Pocket Cinema Camera 6k",
    price: "2535",
    image: "assets/images/camera.png",
  },
  {
    id: 4,
    title: "Apple iPhone 11 128GB White (MQ233)",
    price: "550",
    image: "assets/images/Iphone11.png",
  },
  {
    id: 5,
    title: "Apple iPhone 13 mini 128GB Pink (MLK23)",
    price: "850",
    image: "assets/images/Iphone13mini.png",
  },
  {
    id: 6,
    title: "Galaxy Buds FE Graphite",
    price: "99",
    image: "assets/images/galaxybuds.png",
  },
  {
    id: 7,
    title: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    price: "1700",
    image: "assets/images/galaxy.png",
  },
  {
    id: 8,
    title: "Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021",
    price: "398",
    image: "assets/images/ipad.png",
  },
  {
    id: 9,
    title: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
    price: "1300",
    image: "assets/images/Iphone14pro1.png",
  },
  {
    id: 10,
    title: "Samsung Galaxy Watch6 Classic 47mm Black",
    price: "360",
    image: "assets/images/samsungwatch.png",
  },
  {
    id: 11,
    title: "Apple iPhone 14 Pro Max 128GB Deep Purple",
    price: "900",
    image: "assets/images/Iphone14pro2.png",
  },
];

//! Display products

 //! Check if we are on the index page
if (window.location.pathname.endsWith("index.html")) {
  //! Display products only on the index page
  if (productstable) {
    let products = productsArr
      .map(
        (product) =>
          `<div class="flex flex-col justify-center items-center gap-4 px-4 py-10 bg-gray-100 rounded-lg hover:bg-purple-400 transition-all">
                <img class="w-1/2 mb-4" src="${product.image}" alt="${product.title}">
                <h2 class="text-center font-semibold">${product.title}</h2>
                <span class="text-2xl font-bold">$${product.price}</span>
                <button data-id="${product.id}" class="add-to-cart text-white bg-purple-700 hover:scale-90 transition-transform text-lg rounded-xl px-10 py-2 mt-4">Add to cart</button>
            </div>`
      )
      .join("");
    productstable.innerHTML = products;
  }
}




//! Add product to cart

const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let productId = e.target.getAttribute("data-id");
    let selectedProduct = productsArr.find((product) => product.id == productId);

    //! check if product exists
    let productExists = myProducts.find(
      (product) => product.id === selectedProduct.id
    );
    if (!productExists) {
      selectedProduct.quantity = 1;
      myProducts.push(selectedProduct);
    } else {
      selectedProduct.quantity += 1;
    }
    localStorage.setItem("products", JSON.stringify(myProducts));
    //! Display alert
    alert.classList.remove("hidden");
    setInterval(() => {
      alert.classList.add("hidden");
    }, 2000);
    //! update cart number
    cartItemsNum.textContent = myProducts.length
  })
});
