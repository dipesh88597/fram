
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

const searchInput = document.querySelector('.search-login input');
searchInput.addEventListener('keyup', function(event) {
    const query = event.target.value.toLowerCase();
    const destinationCards = document.querySelectorAll('.destination-card');

    destinationCards.forEach(card => {
        const destinationName = card.querySelector('h3').textContent.toLowerCase();
        if (destinationName.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const tourCards = document.querySelectorAll('.tour-card .learn-more');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close-modal');

    tourCards.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
