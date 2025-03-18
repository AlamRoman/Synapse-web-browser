# Synapse web browser

<p align="center">
  <img src="./resources/icon.png" width="150" />
</p>

**Synapse Browser** is a simple web browser built using **Electron.js**. It provides essential browsing features such as tab management, navigation, and search functionality. Designed with a minimal interface, Synapse allows users to browse the web efficiently with a clean, easy-to-use layout.

While it's still a work in progress, Synapse offers a lightweight browsing experience with basic functionality to manage tabs and navigate the web.

## Key Features
- **Multiple Tabs**: Open and manage multiple tabs.
- **Tab Management**: Add and close tabs as needed.
- **Basic Navigation**: Use back and forward buttons to navigate your browsing history.
- **Search Bar**: Quickly search the web or enter URLs directly.

## Installation

### Windows (Installer)
For **Windows** users, **Synapse** comes as a convenient **.exe** installer. Simply download the installer and follow the prompts to install the browser on your system.

1. Download the **Synapse** Windows installer from the [releases page](link-to-releases).
2. Double-click the installer to begin the installation process. Follow the on-screen instructions.
3. Once installed, launch **Synapse Browser** directly from the Start menu or by using the desktop shortcut.

### From Source (For Developers)
If you prefer to build from source, follow these steps:

#### Prerequisites
- **Node.js**: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/).

#### Steps
1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/AlamRoman/Synapse-web-browser
    ```

2. Navigate to the project folder:

    ```bash
    cd synapse-browser
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the Electron app:

    ```bash
    npm start
    ```

This will launch the Synapse browser.

## File Structure
- **`main.js`**: The main entry point for the Electron app that sets up the browser window and manages app lifecycle events.
- **`index.html`**: The HTML file that defines the structure of the browser's UI.

## Technologies Used
- **Electron.js**: For building the cross-platform desktop app.
- **HTML**: Markup for defining the browser's user interface.
- **CSS**: Styling for the app's layout.
- **JavaScript**: For functionality and interaction with the Electron API.

## Contributing
1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes.
4. Commit your changes and push to your fork.
5. Submit a pull request to the original repository.

## License
Distributed under the MIT License. See `LICENSE` for more information.
