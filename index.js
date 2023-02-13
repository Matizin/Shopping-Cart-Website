//MY API: https://jsonblob.com/api/1073032277046607872
let cart = [];
let data = [];

  axios.get("https://jsonblob.com/api/1073650268440379392")
  .then((res) => {
    console.log(res.data);
    data = Array.from(res.data);

    res.data.forEach((item, index) => {
      document.getElementById("list-of-cards").innerHTML += 
      `
      <div class="card">
        <img class="pic1" src="${item.image}" alt="product1">
        <h3>${item.name}</h3>
        <p>${item.productPrice}</p>
        <button id="add-to-cart" onclick="addToCart(${item.id})">Add to Cart</button>
      </div>
      `
    })

  })
  .catch((err) => {
    console.log(err);
  })



  const productDiv = document.getElementsByClassName("card")
  const addToCartBtn = document.querySelector('#add-to-cart');
  const shoppingCart = document.getElementsByClassName("shopping-cart")


function deleteItem(index) {
  shoppingCart.splice(index, 1);

  // renderShoppingCart();
}

function addToCart(params) {
  console.log(params);
  let item = data.filter(item => item.id == params)[0];
  console.log(item);
  cart.push(item);
  displayShoppingCart(cart);
}

function displayShoppingCart(arr){
  document.getElementById("cart").innerHTML = "";
  arr.forEach(item => {
    document.getElementById("count-of-item").innerHTML = arr.length;

    document.getElementById("cart").innerHTML += 
    `
      <div class="card">
        <h3>${item.name}</h3>
        <p>${item.productPrice}</p>
        <button id="remove-from-cart" onclick="removeFromCart(${item.id})">Remove from Cart</button>
      </div>
    `;
  })
}

// function removeFromCart(params) {
//   console.log(params);
//   let item = cart.filter(item => item.id != params);
//   console.log(item);
//   cart = item;
//   displayShoppingCart(cart)

// }