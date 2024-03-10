//  BEGIN script to stop body scrolling and keep the body scroll position and then re-allow body scrolling when the user closes the menu
// Store the current scroll position
var scrollPosition = window.scrollY || window.pageYOffset;

// Add event listener to disable scrolling
function disableScroll() {
    // Store the current scroll position
    scrollPosition = window.scrollY || window.pageYOffset;

    // Set the body to fixed position and adjust the top position to maintain the scroll position
    document.body.style.top = `-${scrollPosition}px`;
    document.body.classList.add('after-disabling-scrolling');
}

// Add event listener to enable scrolling
function enableScroll() {
    // Reset the body styles to allow scrolling
    document.body.classList.remove('after-disabling-scrolling');
    document.body.style.top = '';

    // Scroll to the previous position
    window.scrollTo(0, scrollPosition);
}

// Example of usage:
// Call disableScroll to stop scrolling
// disableScroll();

// Call enableScroll to allow scrolling again
// enableScroll();

// Function to toggle between enable and disable scroll
function toggleScroll() {
    if (document.body.classList.contains('after-disabling-scrolling')) {
        enableScroll(); // If scrolling is disabled, enable it
    } else {
        disableScroll(); // If scrolling is enabled, disable it
    }
}

// Example of usage:
// Call toggleScroll to toggle between enable and disable scroll
// toggleScroll();

// END script to stop body scrolling and keep the body scroll position and then re-allow body scrolling when the user closes the menu





// BEGIN SCRIPT TO CHANGE HEADER ON SCROLL
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("myHeader");
    var headerIcons = document.querySelectorAll(".header-icon-svg");
    let headerShoppingBagCounter = document.querySelector('.header-shopping-bag-quantity-notification-span');

    window.onscroll = function () {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            header.classList.add("scrolled");
            headerIcons.forEach(function (icon) {
                icon.classList.add("scrolled");
            });
            headerShoppingBagCounter.classList.add('scrolled');
        } else {
            header.classList.remove("scrolled");
            headerIcons.forEach(function (icon) {
                icon.classList.remove("scrolled");
            });
            headerShoppingBagCounter.classList.remove('scrolled');
        }
    };
});
// END SCRIPT TO CHANGE HEADER ON SCROLL





// BEGIN HEADER APPEARANCE ON HOVER on computers
document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("myHeader");
    var anchorElements = header.getElementsByTagName("a");
    var barElements = document.querySelectorAll(".bar");
    var headerIcons = document.querySelectorAll(".header-icon-svg");
    let headerShoppingBagCounter = document.querySelector('.header-shopping-bag-quantity-notification-span');

    // Check if the device supports touch events
    var isTouchDevice = 'ontouchstart' in document.documentElement;

    // If it's not a touch device, add mouseover and mouseout events
    if (!isTouchDevice) {
        header.addEventListener("mouseover", function () {
            // Your mouseover styles
            header.classList.add("on-header-hover");
            headerIcons.forEach(function (icon) {
                icon.classList.add("on-header-hover");
            });
            headerShoppingBagCounter.classList.add('on-header-hover');

            // Change color of anchor elements inside the header
            for (var i = 0; i < anchorElements.length; i++) {
                anchorElements[i].style.color = "black";
            }

            // Loop through each bar element and update its color
            barElements.forEach(function (bar) {
                bar.style.backgroundColor = "black";
            });
        });

        header.addEventListener("mouseout", function () {
            // Your mouseout styles
            header.classList.remove("on-header-hover");
            headerIcons.forEach(function (icon) {
                icon.classList.remove("on-header-hover");
            });
            headerShoppingBagCounter.classList.remove('on-header-hover');

            // Reset anchor element colors
            for (var i = 0; i < anchorElements.length; i++) {
                anchorElements[i].style.color = "";
            }

            // Reset bar colors
            barElements.forEach(function (bar) {
                bar.style.backgroundColor = "";
            });
        });
    }
});
// END HEADER APPEARANCE ON HOVER on computers





// BEGIN hamburger menu (On click) SCRIPT
function menuOnClick() {

    if (window.innerWidth <= 768) {
        toggleScroll();
    }

    document.body.classList.toggle('after-clicking-on-hamburger-menu-icon-in-header');
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change-nav");
    document.getElementById("menu-bg").classList.toggle("change-bg");
    document.getElementById("myHeader").classList.toggle("on-menu-click-header");
    document.querySelector('.menu-bg-inside-bg-div').classList.toggle('after-clicking-on-hamburger-menu-icon-in-header');
    document.documentElement.classList.toggle('after-clicking-on-hamburger-menu-icon-in-header');
    document.querySelector('main').classList.toggle('after-clicking-on-hamburger-menu-icon-in-header');
    document.getElementById("myHeader").classList.toggle("after-clicking-on-hamburger-menu-icon-in-header");





    // Iterate over each header-icon-svg element and toggle the class
    var headerIcons = document.querySelectorAll(".header-icon-svg");
    headerIcons.forEach(function (icon) {
        icon.classList.toggle("on-menu-click-header-icon");
    });

    // Toggle the class on the header shopping bag counter
    let headerShoppingBagCounter = document.querySelector('.header-shopping-bag-quantity-notification-span');
    headerShoppingBagCounter.classList.toggle('on-menu-click');


    // Begin mouseout event on header if you close the menu and your mouse is under the header bar
    // Define header like the close shopping bag menu function so that we can trigger mouseout on the header when we close the menu
    const header = document.getElementById('myHeader');

    // Check if the mouse cursor is below the header offset height
    const mouseY = event.clientY || event.touches[0].clientY;
    // Set headerHeight to be exactly 5.5rem -- for purposes of clicking away to mouseout the header -- so doesn't apply to mobile -- even though technically it does
    const headerHeight = 5.5 * parseFloat(getComputedStyle(document.documentElement).fontSize);

    // if mouse cursor is under the header offset height whatever that means then trigger a mouseout event as if the user just left the header
    if (mouseY > headerHeight) {
        // Trigger mouseout on the header
        const mouseoutEvent = new Event('mouseout');
        header.dispatchEvent(mouseoutEvent);
    }

    console.log(header.offsetHeight)
}
// END hamburger menu (On click) SCRIPT





// BEGIN VIDEO PLAY PAUSE BUTTON
function togglePlayPause() {
    var video = document.getElementById("myVideo");
    if (video.paused) {
        video.play();
        document.getElementById("playPauseBtn").innerHTML = "⏸"; // Pause symbol
    } else {
        video.pause();
        document.getElementById("playPauseBtn").innerHTML = "▶️"; // Play symbol
    }
}
// END VIDEO PLAY PAUSE BUTTON





// BEGIN PRODUCT CARD IMAGE BUTTONS (LEFT AND RIGHT)
document.querySelectorAll('.product-card-div').forEach((card, index) => {
    const container = card.querySelector('.product-card-img-container-div');
    const leftBtn = card.querySelector('.product-card-left-chevron-button');
    const rightBtn = card.querySelector('.product-card-right-chevron-button');
    const scrollAmount = 1;

    leftBtn.addEventListener('click', () => {
        console.log('Left button clicked.');

        // Log variables
        console.log('container:', container);
        console.log('leftBtn:', leftBtn);
        console.log('rightBtn:', rightBtn);
        console.log('scrollAmount:', scrollAmount);
        console.log('container.scrollLeft:', container.scrollLeft);
        console.log('container.clientWidth:', container.clientWidth);
        console.log('container.offsetWidth:', container.offsetWidth);
        console.log('container.scrollWidth:', container.scrollWidth);

        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });

        // Check if the scroll position is less than 0, then wrap to the end
        if (container.scrollLeft <= 0) {
            console.log('Scrolling to the end.');
            container.scrollLeft = container.scrollWidth;
        }
    });

    rightBtn.addEventListener('click', () => {

        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });

        console.log('Right button clicked.');

        // Log variables
        console.log('container:', container);
        console.log('leftBtn:', leftBtn);
        console.log('rightBtn:', rightBtn);
        console.log('scrollAmount:', scrollAmount);
        console.log('container.scrollLeft:', container.scrollLeft);
        console.log('container.clientWidth:', container.clientWidth);
        console.log('container.offsetWidth:', container.offsetWidth);
        console.log('container.scrollWidth:', container.scrollWidth);

        // Check if the scroll position is at the end, then wrap to the beginning
        if (container.scrollLeft >= container.scrollWidth - container.offsetWidth - 100) {
            container.scrollLeft = 0;
        }

    });
});
// END PRODUCT CARD IMAGE BUTTONS (LEFT AND RIGHT)








/* BEGIN SHOPPING BAG */

// define shoppingBagProductQuantity variable:
/* Retrieve the shoppingBagProductQuantity from localStorage,
or default to 0 if it doesn't exist */
let shoppingBagProductQuantity = parseInt(localStorage.getItem('shoppingBagProductQuantity')) || 0;


/* BEGIN function to update the displayed shopping bag product quantity
in the header, shopping cart, and mini cart, and disable the shopping
bag icon button in the header if the quantity is 0 */
function updateShoppingBagProductQuantityDisplayAndDisableTheShoppingBagButtonIfTheQuantityIs0() {
    document.querySelector('.header-shopping-bag-quantity-notification-span').innerHTML = shoppingBagProductQuantity;
    document.querySelector('.shopping-bag-menu-on-click-title-h1-span-quantity').innerHTML = shoppingBagProductQuantity;

    if (document.querySelector('.cart-header-cart-quantity-span')) {
        document.querySelector('.cart-header-cart-quantity-span').innerHTML = shoppingBagProductQuantity;
    }

    // You can also enable or disable the button based on the quantity
    document.querySelector('.shopping-bag-icon-container-button').disabled = (shoppingBagProductQuantity < 1);

    /* You can also add and remove a class to the shopping bag button
    based on the shopping bag quantity in order to change the cursor CSS property on computers */
    if (shoppingBagProductQuantity < 1) {
        document.querySelector('.shopping-bag-icon-container-button').classList.add('if-shopping-bag-quantity-is-less-than-1');
        document.querySelector('.cart-header-for-when-there-is-products-in-the-cart-div').classList.add('if-shopping-bag-quantity-is-less-than-1');
        document.querySelector('.empty-cart-div').classList.remove('if-shopping-bag-quantity-is-less-than-1');


    } else {
        // If you want to remove the class when the quantity is not less than 1
        document.querySelector('.shopping-bag-icon-container-button').classList.remove('if-shopping-bag-quantity-is-less-than-1');
        document.querySelector('.cart-header-for-when-there-is-products-in-the-cart-div').classList.remove('if-shopping-bag-quantity-is-less-than-1');
        document.querySelector('.empty-cart-div').classList.add('if-shopping-bag-quantity-is-less-than-1');
    }

}
/* END function to update the displayed shopping bag product quantity
in the header, shopping cart, and mini cart, and disable the shopping
bag icon button in the header if the quantity is 0 */

// BEGIN ADD 1 EVERY TIME YOU PRESS PLACE IN CART
// Function to add 1 to the shopping cart variable every time the user presses 'place in cart'

function placeInBag() {

    shoppingBagProductQuantity++;
    // Store the updated shoppingBagProductQuantity in localStorage
    localStorage.setItem('shoppingBagProductQuantity', shoppingBagProductQuantity);

    updateShoppingBagProductQuantityDisplayAndDisableTheShoppingBagButtonIfTheQuantityIs0();
}
// END ADD 1 EVERY TIME YOU PRESS PLACE IN CART




/* BEGIN function to add product cards to the mini cart in the shopping bag slide in tray
depending on how much shoppingBagProductQuantity is worth */
// Function to generate and append HTML blocks

function addMiniCartProductCards() {
    var container = document.querySelector('.mini-cart-product-card-container-div'); /* Assuming you have a container div
    with class 'mini-cart-product-card-container-div' */

    for (var i = 0; i < shoppingBagProductQuantity; i++) {
        var miniCartProductCard = `
                <div class="mini-cart-product-card-div">
                    <img class="mini-cart-img"
                        src="/images/louis-vuitton-embroidered-denim-blouson--HQA15WTZ0506_PM2_Front view-2.png"
                        alt="Mini Cart Image">
                    <div class="mini-cart-product-card-text-details-div">
                        <span class="mini-cart-product-card-product-name">Monogram Flocked Silk Long-Sleeved Shirt</span>
                        <span>$2,270.00</span>
                    </div>
                </div>
            `;

        container.insertAdjacentHTML('afterbegin', miniCartProductCard); // Prepend the generated block to the container
    }
}

if (document.querySelector('.mini-cart-product-card-container-div')) {
    // Call the function to add HTML blocks
    addMiniCartProductCards();
}
/* END function to add product cards to the mini cart in the shopping bag slide in tray depending on how much shoppingBagProductQuantity is worth */




// BEGIN UPDATE shopping bag quantity everywhere with shoppingBagProductQuantity from localStorage on page load
window.onload = function () {
    updateShoppingBagProductQuantityDisplayAndDisableTheShoppingBagButtonIfTheQuantityIs0();
}
// END UPDATE shopping bag quantity everywhere on page load WITH shoppingBagProductQuantity from localStorage on page load




//BEGIN OPEN SHOPPING BAG MENU ON CLICKING SHOPPING BAG ICON IN HEADER
document.querySelector('.shopping-bag-icon-container-button').addEventListener('click', function () {

    // Check if shoppingBagProductQuantity is less than 1, and if so, prevent opening the shopping bag menu
    if (shoppingBagProductQuantity < 1) {
        return;
    }


    // Check the screen width and if bigger than mobile then open the slide in tray, else go to the cart page
    if (window.innerWidth <= 768) {
        // On mobile, navigate to a new page
        window.location.href = 'cart.html';
    } else {



        document.querySelector('.shopping-bag-icon-container-div-2').classList.add('after-clicking-on-shopping-bag-icon');
        document.querySelector('.shopping-bag-white-menu-half-div-for-computer').classList.add('after-clicking-on-shopping-bag-icon');
        document.querySelector('.shopping-bag-in-page-menu-div-for-computer').classList.add('after-clicking-on-shopping-bag-icon');
        document.querySelector('.shopping-bag-dark-menu-half-div-for-computer').classList.add('after-clicking-on-shopping-bag-icon');
        document.body.classList.add('after-clicking-on-shopping-bag-icon');
        // BEGIN keep header changed when shopping bag menu is open (not only on hover): open header classes
        document.getElementById("myHeader").classList.add("on-menu-click-header");

        // Iterate over each header-icon-svg element and toggle the class
        var headerIcons = document.querySelectorAll(".header-icon-svg");
        headerIcons.forEach(function (icon) {
            icon.classList.add("on-menu-click-header-icon");
        });

        // Toggle the class on the header shopping bag counter
        let headerShoppingBagCounter = document.querySelector('.header-shopping-bag-quantity-notification-span');
        headerShoppingBagCounter.classList.add('on-menu-click');

        // End keep header changed when shopping bag menu is open (not only one hover): open header classes
    }

});
//END OPEN SHOPPING BAG MENU ON CLICKING SHOPPING BAG ICON IN HEADER




// BEGIN CLOSE SHOPPING BAG ICON MENU ON CLICK either the X or by clicking outisde the shopping bag (clicking the dark half)
// Function to remove classes, and trigger mouseout on the header when we close the shopping bag menu
function removeClassesAndTriggerMouseoutOnShoppingBagMenuClose(event) {

    const closeButton = document.querySelector('.close-shopping-bag-in-page-menu-div-button-for-computer');
    const darkMenu = document.querySelector('.shopping-bag-dark-menu-half-div-for-computer');
    const whiteMenu = document.querySelector('.shopping-bag-white-menu-half-div-for-computer');
    const header = document.getElementById('myHeader');

    document.querySelector('.shopping-bag-icon-container-div-2').classList.remove('after-clicking-on-shopping-bag-icon');
    document.body.classList.remove('after-clicking-on-shopping-bag-icon');



    /* Begin keep header changed when shopping bag menu is open (not only on hover): close header classes
     because this function is for when the shopping bag menu is closed */
    document.getElementById("myHeader").classList.remove("on-menu-click-header");

    // Iterate over each header-icon-svg element and toggle the class
    var headerIcons = document.querySelectorAll(".header-icon-svg");
    headerIcons.forEach(function (icon) {
        icon.classList.remove("on-menu-click-header-icon");
    });

    // Toggle the class on the header shopping bag counter
    let headerShoppingBagCounter = document.querySelector('.header-shopping-bag-quantity-notification-span');
    headerShoppingBagCounter.classList.remove('on-menu-click');

    /* End keep header changed when shopping bag menu is open (not only one hover): close header classes
     because this function is for when the shopping bag menu is closed */

    // Remove classes on shopping bag menu close
    whiteMenu.classList.remove('after-clicking-on-shopping-bag-icon');
    darkMenu.classList.remove('after-clicking-on-shopping-bag-icon');

    // Check if the mouse cursor is below the header offset height
    const mouseY = event.clientY || event.touches[0].clientY;
    const headerHeight = header.offsetHeight;

    // if mouse cursor is under the header offset height whatever that means then trigger a mouseout event as if the user just left the header
    if (mouseY > headerHeight) {
        // Trigger mouseout on the header
        const mouseoutEvent = new Event('mouseout');
        header.dispatchEvent(mouseoutEvent);
    }

    /* Re-enable body element scrolling */

}

// Add the event listeners so that the function is called when the user clicks the close button or the dark half
document.querySelector('.close-shopping-bag-in-page-menu-div-button-for-computer').addEventListener('click', removeClassesAndTriggerMouseoutOnShoppingBagMenuClose);
document.querySelector('.shopping-bag-dark-menu-half-div-for-computer').addEventListener('click', removeClassesAndTriggerMouseoutOnShoppingBagMenuClose);
// END CLOSE SHOPPING BAG ICON ON CLICK either the X or by clicking outisde the shopping bag (clicking the dark half)
/* END SHOPPING BAG */












/* BEGIN define custom CSS height variable for height units for mobile */

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
/* END define custom CSS height variable for height units for mobile */








/* BEGIN CREATING INTERSECTION OBSERVER FOR THE PRODUCT CARD IMAGE CONTAINER DIVS
and detecting when the thumbnail image current worn is shown to remove text details from product card */

// Set up IntersectionObserver options
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.01,
};

// Create the IntersectionObserver
let observer = new IntersectionObserver(handleIntersection, options);

// Target all product cards
document.querySelectorAll('.product-card-thumbnail-img-2-current-worn').forEach(target => {
    // Observe each image
    observer.observe(target);
});

// Callback function for the observer
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the class when 10% or more visible
            entry.target.closest('.product-card-div').querySelector('.product-card-text-details-div').classList.add('when-the-current-worn-product-thumbnail-image-is-in-view');
        } else {
            // Remove the class when less than 10% visible
            entry.target.closest('.product-card-div').querySelector('.product-card-text-details-div').classList.remove('when-the-current-worn-product-thumbnail-image-is-in-view');
        }
    });
}

/* END CREATING INTERSECTION OBSERVER FOR THE PRODUCT CARD IMAGE CONTAINER DIVS */









/* BEGIN generic modal menu script */
function genericModalMenuOpen() {

    document.documentElement.classList.toggle('after-generic-modal-menu-open');

}

function genericModalOpen() {
    document.documentElement.classList.add('after-generic-modal-menu-open');
}

function genericModalClose() {
    document.documentElement.classList.remove('after-generic-modal-menu-open');
}
/* END generic modal menu script */

/* BEGIN call us modal function */
function callUsModal() {
    document.querySelector('.generic-modal-title-h1').innerHTML = 'Call Us';
    document.querySelector('.generic-modal-inner-content-div').innerHTML = `
        <div class="call-us-inner-modal-content-div">
            <p>Wherever you are, Louis Vuitton Client Advisors will be delighted to assist you.</p>
            <div class="call-us-contacts-div">
                <ul>
                    <li><img src="/svg/mobile.svg" alt="Phone">+1.866.VUITTON</li>
                    <li><img src="/svg/email.svg" alt="Email">Send an Email</li>
                </ul>
            </div>
            <div class="call-us-need-help-div">
                Need Help?
                <ul>
                    <li>FAQ</li>
                    <li>Care Services</li>
                    <li>Find a Store</li>
                </ul>
            </div>
        </div>
    `;

    genericModalMenuOpen();
}
/* END call us modal function */

/* BEGIN colors modal */
function colorsModal() {
    document.querySelector('.generic-modal-title-h1').innerHTML = 'Colors';
    document.querySelector('.generic-modal-inner-content-div').innerHTML = `
    <div class="color-options-modal-inner-content-div">
    <ul>
        <li>
            <img src="/images/lvcolor1.png" alt="Color Option 1">
        </li>
        <li>
            <img src="/images/lvcolor2.png" alt="Color Option 2">
        </li>
        <li>
            <img src="/images/lvcolor3.png" alt="Color Option 3">
        </li>
    </ul>
</div>
    `;

    genericModalMenuOpen();

}
/* END colors modal */

/* BEGIN sizes modal */
function sizesModal() {
    document.querySelector('.generic-modal-title-h1').innerHTML = 'Sizes';

    genericModalMenuOpen();

}
/* END sizes modal */

/* BEGIN checkout form delivery options modal */
function checkoutFormDeliveryOptionsModalOpen() {
    document.documentElement.classList.add('after-checkout-form-delivery-options-modal-open');

    genericModalOpen();
}

function checkoutFormDeliveryOptionsModalClose() {
    document.documentElement.classList.remove('after-checkout-form-delivery-options-modal-open');

    genericModalClose();
}
/* END checkout form delivery options modal */

/* BEGIN checkout form payment modal */
function checkoutFormPaymentModalOpen() {
    document.documentElement.classList.add('after-checkout-form-payment-modal-open');

    genericModalOpen();
}

function checkoutFormPaymentModalClose() {
    document.documentElement.classList.remove('after-checkout-form-payment-modal-open');

    genericModalClose();
}
/* END checkout form payment modal */












/* BEGIN Proceed to checkout button in cart page */
function navigateToCheckoutPage() {
    window.location.href = 'checkout.html';
}
/* END Proceed to checkout button in cart page */