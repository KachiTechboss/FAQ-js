document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

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

    function toggleAnswer(item) {
        const isOpen = item.classList.contains('open');
        if (isOpen) {
            item.classList.remove('open');
        } else {
            item.classList.add('open');
        }
    }
});