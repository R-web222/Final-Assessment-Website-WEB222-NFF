document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');
    if (menuToggle && menuList) {
        menuToggle.addEventListener('click', function () {
            menuList.classList.toggle('show');
        });
    }

    const contactReasonInput = document.querySelector('input[name="contactReason"]');
    const hourlyRateInput = document.getElementById('hourlyRateInput');
    if (contactReasonInput) {
        contactReasonInput.addEventListener('change', function () {
            if (this.value === 'Hiring') {
                hourlyRateInput.style.display = 'block';
            } else {
                hourlyRateInput.style.display = 'none';
            }
        });
    }
});

