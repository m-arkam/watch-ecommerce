const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hamburger.addEventListener("click", ()=>{

    navlinks.classList.toggle("navlinks-active")
})

// Get cart items from localStorage


function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Add item to cart
function addToCart(productName, productPrice) {
    let cart = getCartItems();
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
}

// Display cart items on the cart page
function displayCartItems() {
    let cart = getCartItems();
    let cartContainer = document.getElementById('cart-items');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            let cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <p>${item.name}</p>
                <p>$${item.price}</p>
            `;
            cartContainer.appendChild(cartItem);
        });
    }
}







