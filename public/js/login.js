const loginFormHandler = async (event) => {
    event.preventDefault();
    const userName = $('#loginUsername').val();
    const password = $('#loginPassword').val();
    if (!userName) {
        alert('Please enter username');
        return
    }
    if (!password) {
        alert('Please enter password');
        return
    }
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ 
            userName,
            password
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to log in');
    }
};

document
    .querySelector('#loginForm')
    .addEventListener('submit', loginFormHandler);