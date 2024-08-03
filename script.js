// script.js

// Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Product Carousel (assuming similar functionality to slider)
let currentProduct = 0;
const products = document.querySelectorAll('.product');
const totalProducts = products.length;

function showProduct(index) {
    products.forEach((product, i) => {
        product.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextProduct() {
    currentProduct = (currentProduct + 1) % totalProducts;
    showProduct(currentProduct);
}

showProduct(currentProduct);
setInterval(nextProduct, 5000); // Change product every 5 seconds

