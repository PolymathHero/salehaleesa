// List of websites
const websites = [
    'umn.edu',
    'forbes.com',
    // ... (add all the websites from your list here)
    'storify.com'
];

// Function to pick a random website
function getRandomWebsite() {
    const randomIndex = Math.floor(Math.random() * websites.length);
    return websites[randomIndex];
}

// Example of how to use the function
const assignedWebsite = getRandomWebsite();

console.log('Assigned Website:', assignedWebsite);
