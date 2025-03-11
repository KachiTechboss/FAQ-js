// document.addEventListener('DOMContentLoaded', () => {
//     const faqItems = document.querySelectorAll('.faq-item');

//     faqItems.forEach(item => {
//         const question = item.querySelector('.faq-question');
//         const answer = item.querySelector('.faq-answer');

//         question.addEventListener('click', () => {
//             toggleAnswer(item, answer);
//         });

//         question.addEventListener('keydown', (e) => {
//             if (e.key === 'Enter' || e.key === ' ') {
//                 e.preventDefault();
//                 toggleAnswer(item, answer);
//             }
//         });
//     });

//     function toggleAnswer(item, answer) {
//         const isOpen = item.classList.contains('open');
//         faqItems.forEach(i => i.classList.remove('open'));
//         if (!isOpen) {
//             item.classList.add('open');
//         }
//     }
// });
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    const iconPlusContainers = document.querySelectorAll('.icon-plus-container');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            toggleAnswer(item, answer);
        });

        question.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAnswer(item, answer);
            }
        });
    });

    iconPlusContainers.forEach(container => {
        container.addEventListener('click', () => {
            container.querySelector('p').classList.toggle('active');
        });
    });

    function toggleAnswer(item, answer) {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
            item.classList.add('open');
        }
    }
});