document.addEventListener('DOMContentLoaded', () => {
    const counter = document.querySelector('.char-count') as HTMLElement;
    const textarea = document.querySelector('textarea') as HTMLTextAreaElement;
    const textareaContainer = document.querySelector('.textarea-container') as HTMLElement; 
    const maxLenght = textarea.maxLength;

    textarea.addEventListener('input', () => {
        const currentLength = textarea.value.length;
        counter.innerText = `${currentLength}/${maxLenght}`;
        if (currentLength === maxLenght) {
            textarea.classList.add('full');
            textareaContainer.classList.add('redBorder');
            
        }else {
            textarea.classList.remove('full');
            textareaContainer.classList.remove('redBorder');
        }
    });

});