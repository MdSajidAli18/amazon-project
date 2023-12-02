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

    <button class="add-to-cart-button button-primary">
      Add to Cart
    </button>
  </div>
   `;
});

console.log(productsHTML);

//Now the LAST STEP is to take this html and put it on the web page(by using DOM)//
document.querySelector('.js-products-grid').innerHTML = productsHTML;