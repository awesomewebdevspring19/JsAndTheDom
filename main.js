var image = document.getElementById('the-image');
console.log('added event lister')
console.log(image)

image.addEventListener('click', event => {
    image.src = "./images/pexels-photo-2.jpeg"
});