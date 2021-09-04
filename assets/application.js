// =================================================
// * FUNCTIONS
// =================================================
function handleFilter() {
    document.querySelector('#sort_by').addEventListener('change', function (e) {
        var url = new URL(window.location.href);
        url.searchParams.set('sort_by', e.currentTarget.value);
        window.location = url.href;
    })
}

// =================================================
// * Handle all "add to cart" buttons
// =================================================
function addToCart() {
    const API_URL = '/cart/add.js'
    const TIMEOUT = 1500
    $("form[action='/cart/add']").submit(function (e) {
        e.preventDefault()
        // preparing the products
        let productId = null
        let quantity = 1
        const currentUrl = window.location.href
        //if single detail product
        if (currentUrl.match(/products/gi)) {
            productId = $("#ProductSelect").val()
            quantity = $("[name=quantity]").val()
        } else {
            productId = $(e.target).find("input[type=hidden]").val()
        }
        const items = {
            items: [
                {
                    id: productId,
                    quantity: quantity
                }
            ]
        }
        $.ajax({
            method: "POST",
            url: API_URL,
            data: items,
            dataType: "json"
        })
            .done(function () {
                updateCartProds()
                iziToast.success({
                    title: 'Done',
                    message: 'Successfully added to cart!',
                    timeout: TIMEOUT
                });
            })
            .fail(function (error) {
                console.log(error.responseJSON)
                iziToast.error({
                    title: 'Error',
                    message: 'Some error ocurred, try again',
                });
            })
    })
}

// =================================================
// * Update cart counter
// =================================================
function updateCartProds() {
    const API_URL = '/cart.js'
    if ($("#total_products").length) {
        $.ajax({
            method: "GET",
            url: API_URL,
            dataType: "json"
        })
            .done(function (cart) {
                $("#total_products").text(cart.items.length)
            })
            .fail(function (error) {
                console.log(error)
            })
    }
}
function isDetailPage() {
    const currentUrl = window.location.href
    return currentUrl.match(/products/gi) ? true : false
}
function setSliderDetailProduct() {
    //Seting the vertical scroller
    const prevArrow = `<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mx-auto my-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
      </svg>`
    const nextArrow = `<svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 mx-auto my-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
      </svg>`
    const sliderConfiguration = {
        slidesToShow: 2,
        vertical: true,
        autoplay: true,
        prevArrow,
        nextArrow
    }
    $(".products-variants-slider").slick(sliderConfiguration)
}

function handleMainImageDetailProds() {
    $(".gallery-container img").click(function (e) {
        const currentImage = e.target
        const index = currentImage.src.lastIndexOf("_") + 1
        const dotIndex = currentImage.src.lastIndexOf(".")
        let formatedUrl = currentImage.src
        formatedUrl = formatedUrl.substring(0, index) + "750x750" + formatedUrl.substring(dotIndex)
        $("#ProductMainImage").attr("src", formatedUrl)
    })
}
function handleSwatcherImages() {
    setTimeout(() => {
        $(".available label").on("click", function () {
            const productImage = $(this).parent().attr("data-image")
            const productId = $(this).prev().attr("data-variantid")
            $("#ProductMainImage").attr("src", productImage)
        })
    }, 1000)
}
// =================================================
// * Init store
// =================================================
document.addEventListener("DOMContentLoaded", function () {
    console.log("ready")
    //Updating the total items on the cart
    updateCartProds()
    //*Appliying the filters
    let filterItem = document.querySelector('#sort_by')
    if (filterItem) {
        handleFilter()
    }
    //Handling all the "add to cart" buttons
    addToCart()
    //Handling slider, and events from details page
    if (isDetailPage()) {
        setSliderDetailProduct()
        handleMainImageDetailProds()
        handleSwatcherImages()
    }
})