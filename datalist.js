// Function to display user data from localStorage
function displayUserData() {
    // Get the user data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Get the element where we want to display the users
    const userList = document.getElementById('userList');

    // Clear the user list first
    userList.innerHTML = '';

    if (users.length > 0) {
        // Loop through users and create list items for each
        users.forEach((user, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `User ${index + 1}: Name: ${user.name}, Email: ${user.email}, Contact: ${user.contact}`;
            userList.appendChild(listItem);
        });
    } else {
        // Display a message if no users are found
        const listItem = document.createElement('li');
        listItem.textContent = 'No users found';
        userList.appendChild(listItem);
    }
}

// Call the function to display user data when the page loads
window.onload = displayUserData;
