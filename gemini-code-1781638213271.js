document.addEventListener('DOMContentLoaded', () => {

    // 1. SERVICES / TRAININGEN FILTER LOGIC
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceCards = document.querySelectorAll('.service-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Verwijder active class van alle knoppen
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Voeg active toe aan geklikte knop
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            serviceCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    // Subtiel animatie effect bij filteren
                    card.style.opacity = '0';
                    setTimeout(() => { card.style.opacity = '1'; }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 2. CONTACTFORMULIER SIMULATIE (Extreem professioneel)
    const form = document.getElementById('academyForm');
    const successMessage = document.getElementById('formSuccess');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Voorkom herladen pagina

        // Haal waarden op voor eventuele API koppeling later
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            level: document.getElementById('level').value,
            interest: document.getElementById('interest').value,
            message: document.getElementById('message').value
        };

        // Simuleer een API netwerk request
        const submitButton = form.querySelector('button[type="submit"]');
        submitButton.innerText = "Verzenden...";
        submitButton.disabled = true;

        setTimeout(() => {
            // Succes weergave
            form.reset();
            submitButton.innerText = "Aanmelding Verzenden";
            submitButton.disabled = false;
            
            successMessage.style.display = 'block';
            
            // Scroll zachtjes naar de succesmelding
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Verberg melding na 5 seconden
            setTimeout(() => {
                successMessage.style.style.display = 'none';
            }, 5000);
        }, 1500);
    });

    // 3. NAVBAR SCROLL EFFECT
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.style.padding = '1rem 0';
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
        }
    });
});