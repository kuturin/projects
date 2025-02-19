document.addEventListener('DOMContentLoaded', () => {
    const firstTabButton = document.querySelector('.firstTab') as HTMLButtonElement;
    const secondTabButton = document.querySelector('.secondTab') as HTMLButtonElement;
    const thirdTabButton = document.querySelector('.thirdTab') as HTMLButtonElement;
    const fourthTabButton = document.querySelector('.fourthTab') as HTMLButtonElement;
    const firstContentDiv = document.querySelector('.firstContent') as HTMLDivElement;
    const secondContentDiv = document.querySelector('.secondContent') as HTMLDivElement;
    const thirdContentDiv = document.querySelector('.thirdContent') as HTMLDivElement;
    const fourthContentDiv = document.querySelector('.fourthContent') as HTMLDivElement;
    const allContentDivs = document.querySelectorAll('.eachContent') as NodeListOf<HTMLDivElement>;
    const allTabButtons = document.querySelectorAll('.tabButton') as NodeListOf<HTMLButtonElement>;


    

    // Remove 'displayNone' class from the first content div
    if (firstContentDiv) {
        firstContentDiv.classList.remove('displayNone');
    }
    if (firstTabButton) {
        firstTabButton.classList.add('buttonActive');
    }

    // Function to deactivate all content divs
    function deactivateAllContentDivs() {
        allContentDivs.forEach(div => {
            div.classList.add('displayNone');
        });
        allTabButtons.forEach(button => {
            button.classList.remove('buttonActive');
        });
    }

    // Function to handle tab button clicks
    function handleTabClick(button: HTMLButtonElement, contentDiv: HTMLDivElement) {
        deactivateAllContentDivs();
        if (contentDiv) {
            contentDiv.classList.remove('displayNone');
        }
        button.classList.add('buttonActive');
    }

    // Add event listeners to all tab buttons
    firstTabButton.addEventListener('click', () => handleTabClick(firstTabButton, firstContentDiv));
    secondTabButton.addEventListener('click', () => handleTabClick(secondTabButton, secondContentDiv));
    thirdTabButton.addEventListener('click', () => handleTabClick(thirdTabButton, thirdContentDiv));
    fourthTabButton.addEventListener('click', () => handleTabClick(fourthTabButton, fourthContentDiv));
});