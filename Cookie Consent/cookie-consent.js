"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const cookieUndecided = document.querySelector('.content');
    const cookieConsent = document.querySelector('.cookie-consent');
    const acceptButton = document.querySelector('.accept');
    const declineButton = document.querySelector('.decline');
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (cookieAccepted === 'true') {
        cookieUndecided.classList.remove('undecided');
        cookieConsent.classList.add('decided');
    }
    else {
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
