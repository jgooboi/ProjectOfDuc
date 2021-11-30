// Image Modal About Us
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
document.getElementById("myModal").addEventListener('click', function(e) {
    closeModal();
});
document.querySelector(".modal-content").addEventListener('click', function(e) {
    e.stopPropagation()
});
// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

/* var slideImageIndex = 1;
 showSlidesImg(slideImageIndex);
 */

// Next/previous controls
function plusSlidesImg(n) {
    showSlidesImg(slideImageIndex += n);
}

// Thumbnail image controls
function currentSlideImg(n) {
    showSlidesImg(slideImageIndex = n);
}

function showSlidesImg(n) {
    var i;
    var slides = document.getElementsByClassName("slideImg");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideImageIndex = 1 }
    if (n < 1) { slideImageIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideImageIndex - 1].style.display = "block";
    dots[slideImageIndex - 1].className += " active";
    captionText.innerHTML = dots[slideImageIndex - 1].alt;
}

// End Image Modal About Us

// embed video