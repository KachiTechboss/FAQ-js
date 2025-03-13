document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    const faqItems2 = document.querySelectorAll('.faq-item2');

    // Handle FAQ items (faq-item)
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            toggleAnswer(item);
        });

        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAnswer(item);
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

    function toggleAnswer(item) {
        const isOpen = item.classList.contains('open');
        if (isOpen) {
            item.classList.remove('open');
        } else {
            item.classList.add('open');
        }
    }
});