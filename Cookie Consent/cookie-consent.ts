document.addEventListener('DOMContentLoaded', () => {
    const cookieUndecided = document.querySelector('.content') as HTMLElement;
    const cookieConsent = document.querySelector('.cookie-consent') as HTMLElement;
    const acceptButton = document.querySelector('.accept') as HTMLElement;
    const declineButton = document.querySelector('.decline') as HTMLElement;
    const cookieAccepted = localStorage.getItem('cookieAccepted');

    if (cookieAccepted === 'true') {
        cookieUndecided.classList.remove('undecided');
        cookieConsent.classList.add('decided')
    } else {
        cookieUndecided.classList.add('undecided');
    }

    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookieAccepted', 'true');
        cookieConsent.classList.add('decided');
        cookieUndecided.classList.remove('undecided');
    });

    declineButton.addEventListener('click', () => {
        localStorage.removeItem('cookieAccepted');
        cookieConsent.classList.add('decided');
        cookieUndecided.classList.remove('undecided');
        ;
    });
});