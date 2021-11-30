const faqBtns = document.querySelectorAll('.faq-list-item__title-icon');
const faqContent = document.querySelectorAll('.faq-content');

faqBtns.forEach(function(faqBtn) {
    faqBtn.addEventListener('click', function(e) {
        if (faqBtn.className == "faq-list-item__title-icon active") {
            faqBtn.className = faqBtn.className.replace(" active", "");
            // faqContent[index].style.display = "none";
            faqBtn.childNodes[1].src = "./assets/img/icon-add-white.png";
        } else {
            faqBtn.className += " active";
            // faqContent[index].style.display = "block";
            faqBtn.childNodes[1].src = "./assets/img/icon-less-white.png";
        }
    })
});
faqBtns.forEach(function(faqBtn, index) {
    faqBtn.addEventListener('click', () => {
        expandElement(faqContent[index], 'collapsed');
    });
});

function expandElement(elem, collapseClass) {
    // debugger;
    elem.style.height = '';
    elem.style.transition = 'none';

    const startHeight = window.getComputedStyle(elem).height;

    // Remove the collapse class, and force a layout calculation to get the final height
    elem.classList.toggle(collapseClass);
    const height = window.getComputedStyle(elem).height;

    // Set the start height to begin the transition
    elem.style.height = startHeight;
    // wait until the next frame so that everything has time to update before starting the transition
    requestAnimationFrame(() => {
        elem.style.transition = '';

        requestAnimationFrame(() => {
            elem.style.height = height
        })
    })

    // Clear the saved height values after the transition
    elem.addEventListener('transitionend', () => {
        elem.style.height = '';
        elem.removeEventListener('transitionend', arguments.callee);
    });
}