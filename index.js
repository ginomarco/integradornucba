// Contenedor de productos
const products = document.querySelector(".avaliable_container"); //funca

// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container"); //funca
//El total en precio del carrito
const total = document.querySelector(".total"); //funca

// El contenedor de las categorías
const categories = document.querySelector(".categories"); //funca

// Un htmlCollection de botones de todas las categorías (mostrar el dataset)
const categoriesList = document.querySelectorAll(".category"); //funca

// Botón de ver más
const btnLoad = document.querySelector(".btn-load");

// Botón de comprar
const buyBtn = document.querySelector(".btn-buy");

// Botón para abrir y cerrar carrito
const cartBtn = document.querySelector(".icono-carrito");
const cartBtnRes = document.querySelector(".icono-carrito-res");
// Carrito
const cartMenu = document.querySelector(".cart_container_total");

//  Modal de agregado al carrito.
const successModal = document.querySelector(".add-modal");
//  Modal de agregado al carrito.
const deleteBtn = document.querySelector(".btn-delete");

//Menu Hamburguesa
const iconoMenu = document.querySelector("#icono-menu");
menu = document.querySelector("#menu");

// FIN Menu Hamburguesa
const toggleMenu = () => {
  menu.classList.toggle("active");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
};
const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    return;
  }
};
const toggleCartRes = () => {
  cartMenu.classList.toggle("open-cart");
};

const closeOnScroll = () => {
  if (
    !menu.classList.contains("active") &&
    !cartMenu.classList.contains("open-cart")
  )
    return;
  menu.classList.remove("active");
  cartMenu.classList.remove("open-cart");
};
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
  localStorage.setItem("cart", JSON.stringify(cartList));
};

const renderProduct = (product) => {
  const { id, nombre, precio, img } = product;
  return ` <div class="card-available">

  <div class="imgBox">
    <img src="${img}" alt="${nombre}" class="zapas">
  </div>

  <div class="contentBox">
    <h3>${nombre}</h3>
    <h2 class="price">${precio} $</h2>
    
    <button class="btn-add" id="btn-add" data-id='${id}' data-name='${nombre}' data-bid='${precio}' data-img='${img}'>Comprar</button> </div>
  </div>

</div>  

  `;
};
const renderDividedProducts = (index = 0) => {
  products.innerHTML += productsController.dividedProducts[index]
    .map(renderProduct) // .map((e) => renderProduct(e))
    .join("");
};

const renderFilteredProducts = (category) => {
  const productsList = shoes.filter((product) => product.category === category);
  products.innerHTML = productsList.map(renderProduct).join("");
};

const renderProducts = (index = 0, category = undefined) => {
  if (!category) {
    renderDividedProducts(index);
    return;
  }
  renderFilteredProducts(category);
};

// LOGICA DE FILTROS

// funcion para cambiar todos los estados relacionados a los filtros
const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  // necesito cambiar el estado visual de los botones
  changeBtnActiveState(selectedCategory);
  // necesito evaluar si el boton ver mas se muestra o no
  changeShowMoreBtnState(selectedCategory);
};

// funcion para cambiar el estado visual de las categorias (la categoria seleccionada)
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

// evaluar si sacamos o no el boton mostrar mas
const changeShowMoreBtnState = (category) => {
  if (!category) {
    btnLoad.classList.remove("hidden");
    return;
  }
  btnLoad.classList.add("hidden");
};

const applyFilter = (e) => {
  console.log(e.target.dataset);
  if (!e.target.classList.contains("category")) return;
  changeFilterState(e);
  if (!e.target.dataset.category) {
    products.innerHTML = "";
    renderProducts();
  } else {
    renderProducts(0, e.target.dataset.category);
    productsController.nextProductsIndex = 1;
  }
};

const isLastIndexOF = () =>
  productsController.nextProductsIndex === productsController.productsLimit;

const showMoreProducts = () => {
  renderProducts(productsController.nextProductsIndex);
  productsController.nextProductsIndex++;
  if (isLastIndexOF()) {
    btnLoad.classList.add("hidden");
  }
};

// Logica de agregado de productos y manejo del carrito.

const renderCartProduct = (cartProduct) => {
  const { id, nombre, precio, img, quantity } = cartProduct;
  return `    
  <div class="cart-item">
  <img src="${img}" alt="${nombre}" class="zapas">
    <div class="item-info">
      <h3 class="item-title">${nombre}</h3>
      <p class="item-bid">Precio</p>
      <span class="item-price">${precio} $ </span>
    </div>
    <div class="item-handler">
      <span class="quantity-handler down" data-id=${id}>-</span>
      <span class="item-quantity">${quantity}</span>
      <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
  </div>`;
};

const renderCart = () => {
  // Si el carrito esta vacío
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg"> No hay Zapatillas en el carrito. </p>`;
    return;
  }
  // Renderizamos lo que hay
  productsCart.innerHTML = cart.map(renderCartProduct).join("");
};
const getCartTotal = () => {
  return cart.reduce(
    (acc, cur) => acc + Number(cur.precio) * Number(cur.quantity),
    0
  );
};
const showTotal = () => {
  total.innerHTML = `${getCartTotal().toFixed(2)} $`;
};

const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
    return;
  }
  btn.classList.remove("disabled");
};
//Funcion para manipular el añadido de productos

const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct;
  });
};

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

const createProductData = (id, nombre, precio, img) => {
  return { id, nombre, precio, img };
};

const checkCartState = () => {
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
};

const showSuccessModal = () => {
  showAlert3();
};

const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const { id, name, bid, img } = e.target.dataset;

  const product = createProductData(id, name, bid, img);

  //El producto exista en el carrito
  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agregó una unidad del producto al carrito");
  } else {
    //Que no exista el product
    createCartProduct(product);
    showSuccessModal("El producto se ha agregado al carrito");
  }
  checkCartState();
};

const substractProductUnit = (existingProduct) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === existingProduct.id
      ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
      : cartProduct;
  });
};

const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  checkCartState();
};

const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);

  if (existingCartProduct.quantity === 1) {
    if (showAlert4()) {
      removeProductFromCart(existingCartProduct);
    }
    return;
  }
  substractProductUnit(existingCartProduct);
};

const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  addUnitToProduct(existingCartProduct);
};

const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handlePlusBtnEvent(e.target.dataset.id);
  }
  checkCartState();
};

const resetCartItems = () => {
  cart = [];
  checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};
//
//

const completeBuy = () => {
  if (!cart.length) return;
  else {
    showAlert2();
  }
};

const deleteCart = () => {
  if (!cart.length) return;
  else {
    showAlert();
  }
};
const showAlert = () => {
  Swal.fire({
    title: "Desea Vaciar el Carrito?",
    text: "¿Eliminar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, Vaciar",
    cancelButtonText: "Cancelar",
  }).then((resultado) => {
    if (resultado.value) {
      // Hicieron click en "Sí"
      resetCartItems();
    } else {
      // Dijeron que no
      return;
    }
  });
};
const showAlert2 = () => {
  Swal.fire({
    title: "Desea Realizar La Compra?",
    text: "Comprar?",
    icon: "success",
    showCancelButton: true,
    confirmButtonText: "Sí, Comprar",
    cancelButtonText: "Cancelar",
  }).then((resultado) => {
    if (resultado.value) {
      // Hicieron click en "Sí"
      resetCartItems();
    } else {
      // Dijeron que no
      return;
    }
  });
};
const showAlert3 = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Producto Agregado Con Exito",
    showConfirmButton: false,
    timer: 1500,
  });
};
const showAlert4 = () => {
  Swal.fire({
    title: "Desea Eliminar este producto del carrito?",
    text: "¿Eliminar?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, Borrar",
    cancelButtonText: "Cancelar",
  }).then((resultado) => {
    if (resultado.value) {
      // Hicieron click en "Sí"
      resetCartItems();
    } else {
      // Dijeron que no
      return;
    }
  });
};

const init = () => {
  renderProducts();
  categories.addEventListener("click", applyFilter);
  btnLoad.addEventListener("click", showMoreProducts);
  cartBtn.addEventListener("click", toggleCart);
  cartBtnRes.addEventListener("click", toggleCart);
  iconoMenu.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", closeOnScroll);
  products.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  buyBtn.addEventListener("click", completeBuy);
  deleteBtn.addEventListener("click", deleteCart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
};

init();