document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');

    function showAnimation() {
        if (window.innerWidth <= 768) {
            document.body.classList.add('show');
            document.body.classList.add('show-content');
            setTimeout(() => {
                document.body.classList.add('show-content');
            }, 1000)
        } else if (content) {
            content.style.display = 'block';
        }
    }

    window.addEventListener('load', showAnimation);
});