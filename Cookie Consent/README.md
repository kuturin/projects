# Cookie Consent

This project is designed to help websites comply with cookie consent regulations by providing a simple and customizable cookie consent banner. The project is based on [this roadmap](https://roadmap.sh/projects/cookie-consent) and additionally uses TypeScript.

## Features

- Customizable banner text and styles
- Easy integration with any website
- Supports multiple languages
- Option to accept or decline cookies

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/cookie-consent.git
    ```
2. Include the script and stylesheet in your HTML:
    ```html
    <link rel="stylesheet" href="path/to/cookie-consent.css">
    <script src="path/to/cookie-consent.js"></script>
    ```

## Usage

1. Initialize the cookie consent banner:
    ```typescript
    CookieConsent.init({
        message: 'We use cookies to ensure you get the best experience on our website.',
        acceptText: 'Accept',
        declineText: 'Decline',
        policyURL: '/privacy-policy'
    });
    ```

2. Customize the styles in `cookie-consent.css` to match your website's design.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Contact

For any questions or feedback, please contact [yourname@example.com](mailto:yourname@example.com).