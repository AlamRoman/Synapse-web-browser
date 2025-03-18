const path = require('path');

function getErrorMessage(errorCode) {
    switch (errorCode) {
        case -105: // ERR_NAME_NOT_RESOLVED
            return 'The URL is invalid or the website could not be found.';
        case -106: // ERR_INTERNET_DISCONNECTED
            return 'You are offline. Please check your internet connection.';
        case -102: // ERR_CONNECTION_REFUSED
            return 'The server refused the connection.';
        case -109: // ERR_ADDRESS_UNREACHABLE
            return 'The website is unreachable.';
        default:
            return 'An unknown error occurred.';
    }
}

function handleError(errorCode, webview) {
    const errorMessage = getErrorMessage(errorCode);
    console.error(`Error Code: ${errorCode}, Message: ${errorMessage}`);

    // Construct the path to the error page
    const errorPagePath = path.join(__dirname, '../pages/error.html');

    // Load the error page
    webview.loadFile(errorPagePath).then(() => {
        // Inject the error message into the error page
        webview.executeJavaScript(`
            document.getElementById('error-message').innerText = '${errorMessage}';
        `);
    }).catch((err) => {
        console.error('Failed to load error page:', err);
    });
}

module.exports = {
    getErrorMessage,
    handleError,
};