//MY API: https://jsonblob.com/api/1073032277046607872

window.addEventListener("load", () =>{



  axios.get("https://jsonblob.com/api/1073310293253439489")
  .then((res) => {
    console.log(res.data);
    res.data.forEach((item, index) => {
      document.getElementById("list-of-cards").innerHTML += 
      `
      <div class="card">
        <img class="pic1" src="${item.image}" alt="product1">
        <h3>${item.name}</h3>
        <p>${item.productPrice}</p>
        <button id="add-to-cart">Add to Cart</button>
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

 shoppingCart = [];

addToCartBtn.addEventListener('click', () => {
  const product = {
    name: productDiv.querySelector('h3').textContent,
    price: productDiv.querySelector('p').textContent,
  };
  
  shoppingCart.push(product);
  console.log(shoppingCart);
})

function deleteItem(index) {
  shoppingCart.splice(index, 1);

  renderShoppingCart();
}

})