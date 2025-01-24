// Function to save the data in localStorage
function saveToLocalStorage(userData) {
    // Retrieve any existing users from localStorage, or initialize an empty array if none
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    console.log('Before saving:', users); // Debug: Log users before saving new data

    // Add the new user data to the users array
    users.push(userData);

    // Save the updated array back into localStorage
    localStorage.setItem('users', JSON.stringify(users));
    console.log('After saving:', users); // Debug: Log users after saving the new data
}

// Event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const contact = document.getElementById('contact').value; // New contact field

    // Create an object to hold the user's registration data
    const userData = {
        name: name,
        email: email,
        password: password,
        contact: contact // Include the contact field
    };

    // Save the user data to localStorage
    saveToLocalStorage(userData);

    // Notify the user and redirect to the next page (dataList.html)
    alert('Registration successful!');
    window.location.href = 'dataList.html'; // Redirect to another page to display users
});

