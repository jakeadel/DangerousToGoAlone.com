document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.hamburger-menu');
    var menu = document.querySelector('.nav-menu');
    var closeButton = document.querySelector('.close-menu');
    var gray = document.querySelector('.gray-out');
    hideMenu();

    // Function to hide the menu
    function hideMenu() {
        menu.style.right = '-100%';
        gray.style.display = 'none';
        gray.style.opacity = 0;
        menu.classList.remove('menu-visible');
    }

    // Toggle the menu's visibility on hamburger menu click
    hamburger.addEventListener('click', function() {
        if (menu.style.right != '-100%') {
            hideMenu();
        } else {
            menu.style.right = '0px';
            gray.style.display = 'block';
            setTimeout(function() {
                gray.style.opacity = 1;
            }, 10);
            menu.classList.add('menu-visible');
        }
    });

    // Close the menu when the close button is clicked
    closeButton.addEventListener('click', function() {
        hideMenu();
    });

    // Close the menu if clicked outside of it
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            hideMenu();
        }
    });

    // Scroll disappear on mobile funcionality
    let lastScrollTop = 0;
    const burger = document.getElementById("hamburger-container");
    const icon = document.getElementById("site-icon-wrapper");

    if (window.innerWidth < 768) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.scrollY;

            if (Math.abs(scrollTop - lastScrollTop) > 10) {
                if (scrollTop > lastScrollTop) {
                    // User is scrolling down
                    burger.style.top = '-100px'; // header element height
                    icon.style.top = '-100px';
                } else {
                    // User is scrolling up
                    burger.style.top = '0';
                    icon.style.top = '0';
                }
                lastScrollTop = scrollTop;
            }
        });
    }
});
