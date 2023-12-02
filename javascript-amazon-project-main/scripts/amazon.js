//step1:- Saving the datas (datas means the products we want on our amazon interface//
//Datas are saved in a folder with name 'data' and inside the 'data' folder we have datas for products with name 'products.js' which we wanted to save .
//And this folder is linked in our html code by javascript file at the bottom.

// step3:-Let's create a variable for combining all the 'html strings(created by step2)' together//
let productsHTML = ''; //And now that we combined all the html into this variable(productsHTML) in the line34 of this page.


// step2:- is to use this saved data(by step1) to generate html//
products.forEach((product) => {
    productsHTML = productsHTML + `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary  js-add-to-cart"
    data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>
   `;
});


//Now the LAST STEP is to take this html and put it on the web page(by using DOM) to make it interactive.//
document.querySelector('.js-products-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId; //which product we want to add.

    let matchingItem;
    cart.forEach((item) => {
      if(productId === item.productId){ //this is to check whether the product is in our cart or not which we are wanting to add. 
        matchingItem = item;
      }
    });
    if(matchingItem){ //If the product we wanting to add in the cart is already in the cart then it will increase the quantity by 1.
      matchingItem.quantity += 1;
    } else{
      cart.push({                //It will add the new product which we are adding first time in the cart with the 'product name' and 'no. of quantity = 1'after clicking the 'Add to Cart' button.
        productId: productId,
        quantity: 1
    });
  }

  //code is to calculate the cart quantity// 
  let cartQuantity = 0;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });

  //code is to make cart section interactive, so if we add the product ,the cart section will be updated.
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
  });
});