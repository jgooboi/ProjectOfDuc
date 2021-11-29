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
document.addEventListener("DOMContentLoaded", function(event) {
    // Watch More Link click handlers
    const $popup = document.querySelector('.video-popup');
    const $modal = document.querySelector('#modal-video');
    const $closeIcon = document.querySelector('.close-video');
    const $watchMoreLink = document.querySelector('.banner-video__play-btn');
    const $iframe = document.getElementById('iframe-video');

    $watchMoreLink.addEventListener('click', function(e) {
        $popup.style.display = 'block';
        $modal.style.display = 'block';
        e.preventDefault();
    });
    $closeIcon.addEventListener('click', function(e) {
        $popup.style.display = 'none';
        $modal.style.display = 'none';
        $iframe.src = 'https://www.youtube.com/embed/UM1O-4ll-vU?autoplay=1';
    });
    // for escape key
    document.addEventListener('keyup', function(e) {
        if (e.key === "Escape") {
            $popup.style.display = 'none';
            $modal.style.display = 'none';
            //Reload time iframe
            $iframe.src = 'https://www.youtube.com/embed/UM1O-4ll-vU?autoplay=1';
        }
    });
    // click outside of the popup, close it
    $modal.addEventListener('click', function(e) {
        $popup.style.display = 'none';
        $modal.style.display = 'none';
        $iframe.src = 'https://www.youtube.com/embed/UM1O-4ll-vU?autoplay=1';
    });
});