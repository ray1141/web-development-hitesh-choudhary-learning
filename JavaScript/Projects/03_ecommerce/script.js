document.addEventListener("DOMContentLoaded", () => {
  //variables
  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPrice = document.getElementById("total-price");
  const checkoutButton = document.getElementById("checkout-btn");

  let addToCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  if (addToCartItems.length === 0) {
    emptyCartMessage.classList.remove("hidden");
    cartTotal.classList.add("hidden");
  } else {
    renderCartItems(addToCartItems);
    totalCartItems(addToCartItems);
  }

  //adding products to the cart
  const productItems = [
    {
      id: 1,
      name: "Product - 1",
      price: 48.88,
    },
    { id: 2, name: "Product - 2", price: 27.77 },
    { id: 3, name: "Product - 3", price: 99.99 },
    { id: 4, name: "Product - 4", price: 56.666 },
  ];

  //render product items
  renderProductItems(productItems);

  //add to Cart functionality
  addToCart();

  //checkout
  checkout();

  function renderProductItems(pI) {
    pI.forEach((p) => {
      const pDiv = document.createElement("div");
      const pNameSpan = document.createElement("span");
      const pPriceSpan = document.createElement("span");
      const pBtn = document.createElement("button");
      pDiv.classList.add("product");
      pBtn.setAttribute("data-id", `${p.id}`);
      pBtn.classList.add("add-to-cart-btn");
      productList.appendChild(pDiv);
      pDiv.appendChild(pNameSpan);
      pDiv.appendChild(pPriceSpan);
      pDiv.appendChild(pBtn);
      pNameSpan.textContent = `${p.name}`;
      pPriceSpan.textContent = `Rs. ${p.price.toFixed(2)}`;
      pBtn.textContent = `Add to Cart`;
    });
  }

  function addToCart() {
    const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
    addToCartBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const clickedProduct = productItems.find(
          (p) => p.id === parseInt(btn.getAttribute("data-id")),
        );
        const cartItem = {
          ...clickedProduct,
          uniqueId: crypto.randomUUID(),
        };

        addToCartItems.push(cartItem);
        localStorage.setItem("cartItems", JSON.stringify(addToCartItems));

        //render cart items
        renderCartItems(addToCartItems);

        //total price of the cart
        totalCartItems(addToCartItems);
      });
    });
  }

  function renderCartItems(added) {
    emptyCartMessage.classList.add("hidden");
    // console.log(added);
    cartItems.innerHTML = "";
    added.forEach((cartItem) => {
      const cDiv = document.createElement("div");
      cDiv.classList.add("cart-item");
      cDiv.classList.add("cart");
      const cNameSpan = document.createElement("span");
      const cPriceSpan = document.createElement("span");
      const cDelBtn = document.createElement("button");
      cDelBtn.setAttribute("data-id", cartItem.uniqueId);
      cDelBtn.classList.add("del-from-cart-btn");
      cNameSpan.textContent = cartItem.name;
      // console.log(cartItem.name);
      cPriceSpan.textContent = `Rs. ${cartItem.price.toFixed(2)}`;
      cDelBtn.textContent = `Delete Item`;
      cartItems.appendChild(cDiv);
      cDiv.appendChild(cNameSpan);
      cDiv.appendChild(cPriceSpan);
      cDiv.appendChild(cDelBtn);
    });
    deleteFromCart();
  }

  function totalCartItems(added) {
    cartTotal.classList.remove("hidden");
    let total = 0;
    added.forEach((cartItem) => {
      total += parseFloat(cartItem.price.toFixed(2));
    });
    totalPrice.textContent = total.toFixed(2);
  }

  function deleteFromCart() {
    const delFromCartbtns = document.querySelectorAll(".del-from-cart-btn");
    // console.log(delFromCartbtns);
    delFromCartbtns.forEach((delBtn) => {
      delBtn.addEventListener("click", () => {
        const item = addToCartItems.find(
          (btn) => btn.uniqueId === delBtn.getAttribute("data-id"),
        );
        addToCartItems = addToCartItems.filter(
          (cartItem) => cartItem.uniqueId !== item.uniqueId,
        );
        localStorage.setItem("cartItems", JSON.stringify(addToCartItems));
        // console.log(item);
        renderCartItems(addToCartItems);
        totalCartItems(addToCartItems);
      });
    });
  }

  function checkout() {
    checkoutButton.addEventListener("click", () => {
      alert("Thank you for shopping with us!");
      addToCartItems.length = 0;
      localStorage.clear();
      cartItems.innerHTML = ` <p id="empty-cart">Your cart is empty.</p>`;
      cartTotal.classList.add("hidden");
    });
  }
});
