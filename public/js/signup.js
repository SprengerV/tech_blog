const signUpFormHandler = async (event) => {
    try {
        event.preventDefault();
        const username = document.querySelector('#username').value.trim();
        const password = document.querySelector('#password').value.trim();
        console.log(`username: ${username} password: ${password}`)
        if (username && password) {
            const response = await fetch('/api/auth/', {
                method: 'POST',
                body: JSON.stringify({
                    userName: username,
                    password: password
                }),
                headers: { 'Content-Type': 'application/json'}
            });
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to create user');
            }
        }
    } catch (err) {
        alert(err);
    }
};

document
    .querySelector('#signup')
    .addEventListener('submit', signUpFormHandler)