const faqBtns = document.querySelectorAll('.faq-list-item__title-icon');
const faqContent = document.querySelectorAll('.faq-content');

faqBtns.forEach(function(faqBtn, index) {
    faqBtn.addEventListener('click', function(e) {
        if (faqBtn.className == "faq-list-item__title-icon active") {
            faqBtn.className = faqBtn.className.replace(" active", "");
            faqContent[index].style.display = "none";
            faqBtn.childNodes[1].src = "./assets/img/icon-add-white.png"
        } else {
            faqBtn.className += " active";
            faqContent[index].style.display = "block";
            faqBtn.childNodes[1].src = "./assets/img/icon-less-white.png"
        }
    })
});