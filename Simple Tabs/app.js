"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const firstTabButton = document.querySelector('.firstTab');
    const secondTabButton = document.querySelector('.secondTab');
    const thirdTabButton = document.querySelector('.thirdTab');
    const fourthTabButton = document.querySelector('.fourthTab');
    const firstContentDiv = document.querySelector('.firstContent');
    const secondContentDiv = document.querySelector('.secondContent');
    const thirdContentDiv = document.querySelector('.thirdContent');
    const fourthContentDiv = document.querySelector('.fourthContent');
    const allContentDivs = document.querySelectorAll('.eachContent');
    const allTabButtons = document.querySelectorAll('.tabButton');
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
    function handleTabClick(button, contentDiv) {
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
