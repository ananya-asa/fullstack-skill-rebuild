// --- 1. SETUP: Get all the HTML elements we need ---
const searchInput = document.getElementById('search-input');
const profileCard = document.getElementById('profile-card');
const errorMessage = document.getElementById('error-message');

// Elements inside the card
const avatar = document.getElementById('avatar');
const nameEl = document.getElementById('name'); // Renamed to nameEl to avoid conflict
const bio = document.getElementById('bio');
const repos = document.getElementById('repos');
const followers = document.getElementById('followers');


// --- 2. THE TOOL: The Debounce Function (From our lesson!) ---
function debounce(func, delay) {
    let timer;
    return function(...args) {
        // Stop the old timer (Reset the elevator)
        clearTimeout(timer);
        
        // Start a new timer
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}


// --- 3. THE LOGIC: Fetch Data from GitHub API ---
async function fetchUser(username) {
    // If input is empty, hide everything
    if (!username) {
        profileCard.style.display = 'none';
        errorMessage.style.display = 'none';
        return;
    }

    try {
        // Go fetch the data! (Awaiting the promise)
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        // Check if user exists (GitHub returns 404 if not found)
        if (!response.ok) {
            throw new Error('User not found');
        }

        const data = await response.json();
        
        // Success! Show the user
        displayUser(data);
        errorMessage.style.display = 'none';

    } catch (error) {
        // Fail! Show error
        profileCard.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}


// --- 4. THE UI: Update the Screen ---
function displayUser(data) {
    avatar.src = data.avatar_url;
    nameEl.textContent = data.name || data.login; // Fallback to username if Name is null
    bio.textContent = data.bio || "No bio available";
    repos.textContent = data.public_repos;
    followers.textContent = data.followers;

    profileCard.style.display = 'block'; // Reveal the card
}


// --- 5. THE CONNECT: Listen for Typing ---
// We wrap our fetch function inside the debounce
// We wait 500ms after the user STOPS typing
const processChange = debounce((e) => {
    const text = e.target.value.trim();
    fetchUser(text);
}, 500);

// Attach the listener
searchInput.addEventListener('input', processChange);