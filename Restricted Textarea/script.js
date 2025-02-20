"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const counter = document.querySelector('.char-count');
    const textarea = document.querySelector('textarea');
    const textareaContainer = document.querySelector('.textarea-container');
    const maxLenght = textarea.maxLength;
    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;
        counter.innerText = `${currentLength}/${maxLenght}`;
        if (currentLength === maxLenght) {
            textarea.classList.add('full');
            textareaContainer.classList.add('redBorder');
        }
        else {
            textarea.classList.remove('full');
            textareaContainer.classList.remove('redBorder');
        }
    });
});
