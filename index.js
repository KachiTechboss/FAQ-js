document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqItems2 = document.querySelectorAll('.faq-item2');

    // Handle FAQ items (faq-item)
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.icon-minus'); // Select the icon

        question.addEventListener('click', () => {
            toggleAnswer(item, icon, answer);
        });

        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAnswer(item, icon, answer);
            }
        });
    });

    // Handle FAQ items with icon-plus (faq-item2)
    faqItems2.forEach(item => {
        const iconPlus = item.querySelector('.icon-plus');
        const answerIcon = item.querySelector('.faq-answer-icon');

        iconPlus.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            if (isOpen) {
                item.classList.remove('open');
                iconPlus.src = 'assets/images/icon-plus.svg'; // Change back to icon-plus
            } else {
                item.classList.add('open');
                iconPlus.src = 'assets/images/icon-minus.svg'; // Change to icon-minus
            }
            answerIcon.classList.toggle('hidden'); // Toggle visibility of the answer
        });
    });

    function toggleAnswer(item, icon, answer) {
        const isOpen = item.classList.contains('open');
        if (isOpen) {
            item.classList.remove('open');
            icon.src = 'assets/images/icon-plus.svg'; // Change to icon-plus
            answer.style.display = 'none'; // Hide the answer
        } else {
            item.classList.add('open');
            icon.src = 'assets/images/icon-minus.svg'; // Change to icon-minus
            answer.style.display = 'block'; // Show the answer
        }
    }
});