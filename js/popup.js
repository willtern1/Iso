const productImages = document.querySelectorAll('.product-image');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup-image');
const closePopup = document.querySelector('.close-popup');

productImages.forEach(image => {
    image.addEventListener('click', () => {
        popupImage.src = image.src;
        popup.classList.add('show');
    });
});

closePopup.addEventListener('click', () => {
    popup.classList.remove('show');
    document.body.style.overflow = 'auto';
});

popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});