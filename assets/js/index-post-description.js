function onMobile() {
    return window.innerWidth <= 768;
}

document.addEventListener('DOMContentLoaded', function() {
    let articles = document.querySelectorAll(".article-wrapper");

    function onMobile() {
        return window.innerWidth <= 768;
    }

    articles.forEach((article) => {
        let imageWrapper = article.querySelector(".image-wrapper");
        let description = article.querySelector(".description-wrapper");

        if (onMobile() && imageWrapper && description) {
            description.style.width = '260px';
            let arrowButton = document.createElement("img");
            arrowButton.classList.add("arrow-button");
            arrowButton.src = "./assets/images/DTGA_Arrow.png";
            imageWrapper.appendChild(arrowButton);

            let swiper = description;
            let isExpanded = false;

            arrowButton.addEventListener('click', (event) => {
                event.stopPropagation();
                event.preventDefault();
                if (isExpanded) {
                    swiper.style.left = "450px";
                    arrowButton.style.transform = '';
                } else {
                    swiper.style.left = 0;
                    arrowButton.style.transform = 'rotate(180deg)';
                }
                isExpanded = !isExpanded;
            });
        }
    });
});
