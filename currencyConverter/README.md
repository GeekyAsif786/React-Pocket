# Currency Converter

A modern, elegant currency converter application built with React and Tailwind CSS.

![Currency Converter Screenshot](src/assets/currency.png)

## Features

- **Real-time Currency Conversion**: Convert between multiple currencies instantly.
- **Modern UI**: Split-screen layout with glassmorphism effects and a 3D hero image.
- **Animated Background**: Dynamic, linearly moving background for an immersive experience.
- **Responsive Design**: Fully responsive layout that adapts to mobile and desktop screens.
- **Stylish Typography**: Uses 'Poppins' font for a clean and professional look.

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **API**: Custom hook for fetching currency data

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/GeekyAsif786/React-Pocket.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd React-Pocket/currencyConverter
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1.  Select the "From" currency.
2.  Select the "To" currency.
3.  Enter the amount you wish to convert.
4.  Click "Convert" to see the result.
5.  Use the "Swap" button to quickly reverse the currencies.

## Project Structure

```
currencyConverter/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable UI components (InputBox, etc.)
│   ├── hooks/           # Custom React hooks (useCurrencyInfo)
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global styles and animations
│   ├── index.css        # Tailwind imports and base styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
