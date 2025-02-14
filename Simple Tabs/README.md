# Simple Tabs

## Overview
This project demonstrates a simple tabbed interface where clicking on a tab button displays the corresponding content and hides the others. The project was created as an exercise in TypeScript, although the original intention was to use plain JavaScript.

## Contents
- `index.html`: The main HTML file containing the structure and content of the tabs.
- `style.css`: The CSS file for styling the tabs and content.
- `app.ts`: The TypeScript file for adding interactivity to the tabs.

## HTML Structure
The HTML file contains a series of buttons representing the tabs and corresponding content divs. Each tab button is associated with a content div that is displayed when the button is clicked.

## CSS Styling
The CSS file includes styles for hiding and showing content divs, as well as styles for the active tab button.

## TypeScript Functionality
The TypeScript code adds interactivity to the tabs. When a tab button is clicked, the corresponding content div is displayed, and the other content divs are hidden. The clicked tab button also receives an active class to indicate it is selected.

### Functions
- `deactivateAllContentDivs()`: Hides all content divs and removes the active class from all tab buttons.
- `handleTabClick(button, contentDiv)`: Handles the click event for a tab button, showing the corresponding content div and adding the active class to the button.

## Usage
To use this project, open the `index.html` file in a web browser. Click on the tab buttons to switch between different content sections.

## License
This project is licensed under the MIT License.

## Contact
If you have any questions or need further assistance, feel free to reach out to the project maintainers.

## Acknowledgements
This project was created based on the Simple Tabs project from roadmap.sh. It was implemented using TypeScript as an exercise, although the original intention was to use plain JavaScript.

