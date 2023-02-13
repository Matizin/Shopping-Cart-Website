let cart = localStorage.getItem("cart");
let data = JSON.parse(data);

let shoopingCart = document.getElementById("shopping-cart");



function removeFromCart(params) {
    console.log(params);
    let item = cart.filter(item => item.id != params);
    console.log(item);
    cart = item;
    displayShoppingCart(cart)
  
  }


  let generateShopCar = () => {
    return (shoopingCart.innerHTML = data.map((x) => {
        let { id, image,name, productPrice } = x;
        return `
        <div class="card">
        <h3>${item.name}</h3>
        <p>${item.productPrice}</p>
        <button id="remove-from-cart" onclick="removeFromCart(${item.id})">Remove from Cart</button>
      </div>
         `
    }));
};

generateShopCar();