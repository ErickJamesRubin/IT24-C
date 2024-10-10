// Create the DataLogger class
class DataLogger {
    constructor(buttonId, cardContainerId, clearButtonId, logCountId) {
        this.logButton = document.getElementById(buttonId);       // Log button element
        this.cardContainer = document.getElementById(cardContainerId); // Container for displaying logs
        this.clearButton = document.getElementById(clearButtonId); // Clear button element
        this.logCountElement = document.getElementById(logCountId);  // Element to show the log count
        this.loggedData = [];  // Array to store logs

        // Add event listeners for the buttons
        this.logButton.addEventListener('click', () => this.logData());
        this.clearButton.addEventListener('click', () => this.clearLogs());
    }

    // Method to log data with the current timestamp
    logData() {
        const timestamp = new Date().toLocaleString();  // Get current date and time
        this.loggedData.push(timestamp);  // Add the timestamp to the log array
        this.updateCardContainer();       // Update the log display
    }

    // Method to clear all logs
    clearLogs() {
        this.loggedData = [];  // Reset the logged data
        this.updateCardContainer();  // Clear the log display
    }

    // Method to update the displayed logs
    updateCardContainer() {
        this.cardContainer.innerHTML = '';  // Clear the container

        // Loop through the logs and display each in a card format
        this.loggedData.forEach(data => {
            const card = document.createElement('div');   // Create a card element
            card.className = 'card mb-2';                 // Add Bootstrap classes
            card.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">Log</h5>
                    <p class="card-text">${data}</p>
                </div>
            `;
            this.cardContainer.appendChild(card);  // Add each card to the container
        });

        // Update the log count
        this.displayLogCount();
    }

    // Method to count the logs
    countLogs() {
        return this.loggedData.length;
    }

    // Method to display the total log count
    displayLogCount() {
        const logCount = this.countLogs();
        this.logCountElement.innerHTML = `Total Logs: ${logCount}`;  // Update the log count display
    }
}

// Initialize the DataLogger when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    new DataLogger('logButton', 'cardContainer', 'clearButton', 'logCount'); 
});
