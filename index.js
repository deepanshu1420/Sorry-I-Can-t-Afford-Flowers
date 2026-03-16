// Function to get URL parameters
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to create and display the message
function displayMessage(message) {
    if (!message) return;
    
    // Create message container
    const messageContainer = document.createElement('div');
    messageContainer.className = 'custom-message';
    messageContainer.innerHTML = `
        <div class="message-content">
            <h1 class="message-text">${message}</h1>
            <div class="message-sparkles">
                <span class="sparkle">✨</span>
                <span class="sparkle">💝</span>
                <span class="sparkle">✨</span>
            </div>
        </div>
    `;
    
    // Insert at the beginning of body
    document.body.insertBefore(messageContainer, document.body.firstChild);
    
    // Add animation class after a brief delay
    setTimeout(() => {
        messageContainer.classList.add('message-visible');
    }, 500);
}

// Function to create and display the name on flower lights/dots
function displayName(name) {
    if (!name) return;
    
    // Get all flower light elements (the glowing dots)
    const flowerLights = document.querySelectorAll('.flower__light');
    
    // Select specific lights to show the full name (every 3rd or 4th light for better visibility)
    const selectedLights = [];
    for (let i = 0; i < flowerLights.length; i += 4) {
        selectedLights.push(flowerLights[i]);
    }
    
    // If we don't have enough lights, use every 2nd light
    if (selectedLights.length < 3) {
        selectedLights.length = 0;
        for (let i = 0; i < flowerLights.length; i += 2) {
            selectedLights.push(flowerLights[i]);
        }
    }
    
    selectedLights.forEach((light, index) => {
        // Create name element for selected lights
        const nameElement = document.createElement('span');
        nameElement.className = 'light-name';
        nameElement.textContent = name;
        
        // Add the name element to the light
        light.appendChild(nameElement);
        
        // Add a slight delay for each name appearance
        setTimeout(() => {
            nameElement.classList.add('name-visible');
        }, 1200 + (index * 300)); // Staggered appearance with longer delay
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    const message = getURLParameter('message');
    const name = getURLParameter('name');
    
    if (message) {
        // Decode URL-encoded message
        const decodedMessage = decodeURIComponent(message);
        displayMessage(decodedMessage);
    }
    
    if (name) {
        // Decode URL-encoded name
        const decodedName = decodeURIComponent(name);
        displayName(decodedName);
    }
});

// Also handle the existing onload function
window.addEventListener('load', function() {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 100);
});